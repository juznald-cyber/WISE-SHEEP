// WISE SHEEP - Main Application Engine
import { QUESTIONS_DATABASE, QUESTION_LEVELS, QUESTION_TYPES, shuffleArray } from './data/questions.js';
import { sounds } from './services/sound.js';
import { roomSync, DEFAULT_FIREBASE_CONFIG } from './services/firebase.js';

class WiseSheepApp {
  constructor() {
    this.currentView = 'view-home';
    this.selectedDifficulty = 'ALL';
    this.gameMode = 'TEAMS'; // 'TEAMS' | 'INDIVIDUAL'
    this.questionCount = 10;
    this.timeLimit = 20;
    this.autoCloseOnAllAnswered = true;
    this.leaderboardMode = 'MANUAL'; // 'MANUAL' | 'EVERY_ROUND' | 'END_ONLY'

    // Estado del Anfitrión (Host)
    this.isHost = false;
    this.roomPin = null;
    this.roomStatus = 'IDLE'; // 'LOBBY' | 'QUESTION' | 'TIMES_UP' | 'LEADERBOARD' | 'PODIUM'
    this.players = {}; // { [id]: { name, avatar, team, score, streak } }
    this.activeQuestions = [];
    this.currentQIndex = 0;
    this.questionTimer = null;
    this.timeLeft = 20;
    this.qStartTime = 0;
    this.receivedAnswers = {}; // { [playerId]: { answerIndex, isCorrect, points } }

    // Estado del Jugador (Player)
    this.myPlayerId = roomSync.playerId;
    this.myPlayerName = '';
    this.myAvatar = '🐑';
    this.myTeam = 'A'; // 'A': Hombres, 'B': Mujeres
    this.myScore = 0;
    this.myStreak = 0;
    this.hasAnsweredCurrent = false;

    // Avatares disponibles
    this.availableAvatars = ['🐑', '🕊️', '👑', '🐟', '🔥', '🛡️', '🦁', '⛵'];
  }

  init() {
    console.log('Iniciando WISE SHEEP App...');
    this.renderAvatarSelector();
    this.setupRoomSyncListeners();
    this.setupPhoneVisibilityResume();
    this.checkSavedSession();
    this.checkUrlForPin();

    // Actualizar conteo de preguntas en header
    const qCountHeader = document.getElementById('header-q-count');
    if (qCountHeader) qCountHeader.innerText = `${QUESTIONS_DATABASE.length}+`;

    // Cargar config guardada de Firebase si existe
    const savedApiKey = localStorage.getItem('ws_fb_apiKey');
    if (savedApiKey) {
      roomSync.initFirebase({
        ...DEFAULT_FIREBASE_CONFIG,
        apiKey: savedApiKey
      });
    }
  }

  // Detectar cuando el teléfono se desbloquea o la pestaña vuelve a estar visible
  setupPhoneVisibilityResume() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('📱 Teléfono desbloqueado / Pestaña activa: Sincronizando estado...');
        this.resumeActiveGame();
      }
    });

    window.addEventListener('focus', () => {
      this.resumeActiveGame();
    });
  }

  // Comprobar si hay una sesión guardada previa en localStorage
  checkSavedSession() {
    try {
      const saved = localStorage.getItem('ws_player_session');
      if (saved) {
        const session = JSON.parse(saved);
        if (session && session.pin && session.name) {
          const banner = document.getElementById('banner-reconnect');
          const nameEl = document.getElementById('reconnect-player-name');
          const pinEl = document.getElementById('reconnect-room-pin');
          if (banner && nameEl && pinEl) {
            nameEl.innerText = session.name;
            pinEl.innerText = session.pin;
            banner.classList.remove('hidden');
          }
        }
      }
    } catch (e) {
      console.warn('Error leyendo sesión previa:', e);
    }
  }

  dismissReconnect() {
    const banner = document.getElementById('banner-reconnect');
    if (banner) banner.classList.add('hidden');
    localStorage.removeItem('ws_player_session');
  }

  reconnectActiveSession() {
    sounds.playClick();
    try {
      const saved = JSON.parse(localStorage.getItem('ws_player_session') || '{}');
      if (saved && saved.pin && saved.name) {
        this.roomPin = saved.pin;
        this.myPlayerName = saved.name;
        this.myAvatar = saved.avatar || '🐑';
        this.myTeam = saved.team || 'A';
        this.myScore = saved.score || 0;
        this.myStreak = saved.streak || 0;
        this.isHost = false;
        roomSync.currentPin = saved.pin;

        // Ocultar banner
        const banner = document.getElementById('banner-reconnect');
        if (banner) banner.classList.add('hidden');

        // Escuchar sala en línea
        roomSync.listenToOnlineRoom(this.roomPin);

        // Volver a emitir presencia para recuperar estado
        roomSync.broadcast('PLAYER_RECONNECTED', {
          playerId: this.myPlayerId,
          name: this.myPlayerName,
          avatar: this.myAvatar,
          team: this.myTeam,
          score: this.myScore,
          streak: this.myStreak
        });

        this.switchView('view-player-lobby');
        document.getElementById('player-my-name').innerText = this.myPlayerName;
        document.getElementById('player-my-avatar').innerText = this.myAvatar;
        document.getElementById('player-my-team-badge').innerText = this.myTeam === 'A' ? 'Equipo Hombres 🦁' : 'Equipo Mujeres 👑';
      }
    } catch (e) {
      console.error('Error reconectando:', e);
    }
  }

  resumeActiveGame() {
    if (this.roomPin) {
      // Re-consultar el estado de la sala desde localStorage o Firestore
      const roomKey = `ws_room_${this.roomPin}`;
      try {
        const raw = localStorage.getItem(roomKey);
        if (raw) {
          const roomData = JSON.parse(raw);
          if (roomData && roomData.status) {
            this.handleRoomStateUpdate(roomData);
          }
        }
      } catch (e) {}
    }
  }

  // Comprobar si hay un PIN en la URL (ej. ?pin=1234)
  checkUrlForPin() {
    const params = new URLSearchParams(window.location.search);
    const pin = params.get('pin');
    if (pin) {
      this.startPlayerJoin();
      const pinInput = document.getElementById('player-input-pin');
      if (pinInput) pinInput.value = pin;
    }
  }

  // Alternar sonido general
  toggleSound() {
    const isMuted = sounds.toggleMute();
    const icon = document.getElementById('sound-icon');
    if (icon) icon.innerText = isMuted ? '🔇' : '🔊';
  }

  // Cambio de pantalla / vista
  switchView(viewId) {
    const views = [
      'view-home',
      'view-host-setup',
      'view-host-lobby',
      'view-host-game',
      'view-host-leaderboard',
      'view-host-podium',
      'view-player-join',
      'view-player-lobby',
      'view-player-game'
    ];
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(viewId);
    if (target) target.classList.remove('hidden');
    this.currentView = viewId;
  }

  showHome() {
    sounds.playClick();
    this.switchView('view-home');
  }

  // ==============================================================
  // FLUJO DEL ANFITRIÓN (HOST)
  // ==============================================================

  startHostSetup() {
    sounds.playClick();
    this.isHost = true;
    this.switchView('view-host-setup');
  }

  updateModeSelection(val) {
    sounds.playClick();
    this.gameMode = val;
    const optTeams = document.getElementById('mode-opt-teams');
    const optIndiv = document.getElementById('mode-opt-indiv');
    if (val === 'TEAMS') {
      optTeams.classList.add('border-indigo-600', 'bg-indigo-950/40');
      optIndiv.classList.remove('border-indigo-600', 'bg-indigo-950/40');
      optIndiv.classList.add('border-slate-800', 'bg-slate-900');
    } else {
      optIndiv.classList.add('border-indigo-600', 'bg-indigo-950/40');
      optTeams.classList.remove('border-indigo-600', 'bg-indigo-950/40');
      optTeams.classList.add('border-slate-800', 'bg-slate-900');
    }
  }

  selectDifficulty(diff) {
    sounds.playClick();
    this.selectedDifficulty = diff;
    const diffs = ['ALL', 'EASY', 'MEDIUM', 'HARD'];
    diffs.forEach(d => {
      const btn = document.getElementById(`diff-btn-${d}`);
      if (btn) {
        if (d === diff) {
          btn.className = 'p-3 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-xs text-center';
        } else {
          btn.className = 'p-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-bold text-xs text-center hover:border-slate-700';
        }
      }
    });
  }

  createRoom() {
    sounds.playClick();
    this.roomPin = roomSync.generatePin();
    roomSync.currentPin = this.roomPin;

    this.questionCount = parseInt(document.getElementById('setup-question-count')?.value || '10');
    this.timeLimit = parseInt(document.getElementById('setup-time-limit')?.value || '20');
    this.autoCloseOnAllAnswered = document.getElementById('setup-auto-close')?.checked ?? true;
    this.leaderboardMode = document.getElementById('setup-leaderboard-mode')?.value || 'MANUAL';

    // Seleccionar y ordenar preguntas aleatorias con curva de dificultad
    this.prepareQuestions();

    this.players = {};
    this.currentQIndex = 0;
    this.roomStatus = 'LOBBY';

    // Mostrar Lobby
    this.switchView('view-host-lobby');
    const pinDisplay = document.getElementById('lobby-pin-display');
    if (pinDisplay) pinDisplay.innerText = this.roomPin;

    // Configurar vistas de equipo vs individual
    const teamsCont = document.getElementById('lobby-teams-container');
    const indivCont = document.getElementById('lobby-indiv-container');
    if (this.gameMode === 'TEAMS') {
      teamsCont.classList.remove('hidden');
      indivCont.classList.add('hidden');
    } else {
      teamsCont.classList.add('hidden');
      indivCont.classList.remove('hidden');
    }

    // Generar Código QR para teléfonos
    this.generateLobbyQRCode();

    // Emitir estado inicial de la sala
    roomSync.broadcast('ROOM_CREATED', {
      pin: this.roomPin,
      status: 'LOBBY',
      mode: this.gameMode,
      timeLimit: this.timeLimit,
      totalQuestions: this.activeQuestions.length,
      players: this.players,
      leaderboardMode: this.leaderboardMode
    });

    // Iniciar escucha en línea
    roomSync.listenToOnlineRoom(this.roomPin);
  }

  // Generación aleatoria cuidando la progresión de fácil a difícil
  prepareQuestions() {
    const all = [...QUESTIONS_DATABASE];
    if (this.selectedDifficulty === 'ALL') {
      // Barajar aleatoriamente cada categoría por separado
      const easyPool = shuffleArray(all.filter(q => q.level === 'EASY'));
      const medPool = shuffleArray(all.filter(q => q.level === 'MEDIUM'));
      const hardPool = shuffleArray(all.filter(q => q.level === 'HARD'));

      // Distribuir según el total pedido (ej. 10 preguntas -> 4 fáciles, 3 medias, 3 difíciles)
      let countEasy = Math.max(1, Math.round(this.questionCount * 0.4));
      let countMed = Math.max(1, Math.round(this.questionCount * 0.35));
      let countHard = this.questionCount - countEasy - countMed;
      if (countHard <= 0) countHard = 1;

      const selectedEasy = easyPool.slice(0, countEasy);
      const selectedMed = medPool.slice(0, countMed);
      const selectedHard = hardPool.slice(0, countHard);

      // Ensamblar en orden progresivo: Fácil -> Medio -> Difícil
      this.activeQuestions = [...selectedEasy, ...selectedMed, ...selectedHard];
    } else {
      // Filtrar por nivel específico y barajar completamente
      const filtered = shuffleArray(all.filter(q => q.level === this.selectedDifficulty));
      this.activeQuestions = filtered.slice(0, this.questionCount);
    }

    // Si por alguna razón faltan, rellenar de la base general barajada
    if (this.activeQuestions.length < this.questionCount) {
      const remaining = shuffleArray(all.filter(q => !this.activeQuestions.some(aq => aq.id === q.id)));
      this.activeQuestions = [...this.activeQuestions, ...remaining].slice(0, this.questionCount);
    }
  }

  generateLobbyQRCode() {
    const container = document.getElementById('lobby-qr-container');
    if (!container) return;
    container.innerHTML = '';

    const currentUrl = window.location.origin + window.location.pathname + `?pin=${this.roomPin}`;
    if (window.QRCode) {
      new window.QRCode(container, {
        text: currentUrl,
        width: 110,
        height: 110,
        colorDark: '#0B0F19',
        colorLight: '#FFFFFF',
        correctLevel: window.QRCode.CorrectLevel.M
      });
    }
  }

  copyRoomLink() {
    sounds.playClick();
    const currentUrl = window.location.origin + window.location.pathname + `?pin=${this.roomPin}`;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert(`¡Enlace copiado al portapapeles!\n${currentUrl}`);
    }).catch(() => {
      alert(`PIN de la sala: ${this.roomPin}`);
    });
  }

  updateLobbyPlayersList() {
    const pCountEl = document.getElementById('lobby-player-count');
    const playerIds = Object.keys(this.players);
    if (pCountEl) pCountEl.innerText = playerIds.length;

    if (this.gameMode === 'TEAMS') {
      const teamAPlayersEl = document.getElementById('team-a-players');
      const teamBPlayersEl = document.getElementById('team-b-players');
      const teamACountEl = document.getElementById('team-a-count');
      const teamBCountEl = document.getElementById('team-b-count');

      const teamA = playerIds.filter(id => this.players[id].team === 'A');
      const teamB = playerIds.filter(id => this.players[id].team === 'B');

      if (teamACountEl) teamACountEl.innerText = `${teamA.length} miembros`;
      if (teamBCountEl) teamBCountEl.innerText = `${teamB.length} miembros`;

      if (teamAPlayersEl) {
        teamAPlayersEl.innerHTML = teamA.map(id => `
          <div class="bg-blue-900/90 text-blue-100 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-blue-500/50 shadow-sm animate-pulse-fast">
            <span>${this.players[id].avatar}</span>
            <span>${this.players[id].name}</span>
          </div>
        `).join('') || '<span class="text-xs text-blue-400 italic">Esperando muchachos...</span>';
      }

      if (teamBPlayersEl) {
        teamBPlayersEl.innerHTML = teamB.map(id => `
          <div class="bg-pink-900/90 text-pink-100 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-pink-500/50 shadow-sm animate-pulse-fast">
            <span>${this.players[id].avatar}</span>
            <span>${this.players[id].name}</span>
          </div>
        `).join('') || '<span class="text-xs text-pink-400 italic">Esperando chicas...</span>';
      }
    } else {
      const indivListEl = document.getElementById('indiv-players-list');
      if (indivListEl) {
        indivListEl.innerHTML = playerIds.map(id => `
          <div class="bg-slate-800 text-slate-100 px-3.5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border border-slate-700 shadow-md">
            <span>${this.players[id].avatar}</span>
            <span>${this.players[id].name}</span>
          </div>
        `).join('') || '<span class="text-xs text-slate-400 italic">Esperando a que se unan jugadores...</span>';
      }
    }
  }

  startGameCountdown() {
    if (Object.keys(this.players).length === 0) {
      if (!confirm('No hay jugadores conectados aún. ¿Deseas iniciar de prueba igualmente?')) {
        return;
      }
    }

    sounds.playClick();
    this.currentQIndex = 0;
    this.startQuestion(this.currentQIndex);
  }

  startQuestion(index) {
    if (index >= this.activeQuestions.length) {
      this.showFinalPodium();
      return;
    }

    this.currentQIndex = index;
    const q = this.activeQuestions[index];
    this.receivedAnswers = {};
    this.timeLeft = this.timeLimit;
    this.qStartTime = Date.now();
    this.roomStatus = 'QUESTION';

    // Actualizar vista Anfitrión
    this.switchView('view-host-game');

    // UI Elements
    document.getElementById('game-q-counter').innerText = `Pregunta ${index + 1} de ${this.activeQuestions.length}`;
    document.getElementById('game-q-category').innerText = q.category || 'Trivia Bíblica';
    document.getElementById('game-q-text').innerText = q.question;
    document.getElementById('host-answers-count').innerText = '0';
    document.getElementById('host-total-players-count').innerText = Object.keys(this.players).length;
    document.getElementById('host-timer-circle').innerText = this.timeLeft;

    // Nivel Badge
    const badgeEl = document.getElementById('game-q-badge');
    const lvlInfo = QUESTION_LEVELS[q.level] || QUESTION_LEVELS.EASY;
    badgeEl.innerText = `${lvlInfo.badge} ${lvlInfo.name}`;

    // Reset Opciones UI
    for (let i = 0; i < 4; i++) {
      const optCard = document.getElementById(`host-opt-${i}`);
      const optText = document.getElementById(`host-opt-text-${i}`);
      if (q.options[i]) {
        optCard.classList.remove('hidden', 'opacity-30', 'ring-4', 'ring-white', 'scale-105');
        optText.innerText = q.options[i];
      } else {
        optCard.classList.add('hidden');
      }
    }

    // Ocultar explicación y controles de siguiente
    document.getElementById('host-explanation-box').classList.add('hidden');
    document.getElementById('host-game-controls').classList.add('hidden');

    // Sincronizar estado con los teléfonos
    roomSync.broadcast('QUESTION_STARTED', {
      status: 'QUESTION',
      questionIndex: index,
      totalQuestions: this.activeQuestions.length,
      timeLimit: this.timeLimit,
      question: q.question,
      options: q.options,
      level: q.level
    });

    // Iniciar audio de suspenso y temporizador
    sounds.startTensionMusic();
    this.runTimer();
  }

  runTimer() {
    if (this.questionTimer) clearInterval(this.questionTimer);

    const timerCircle = document.getElementById('host-timer-circle');
    const timerBar = document.getElementById('host-timer-bar');

    this.questionTimer = setInterval(() => {
      this.timeLeft--;
      if (timerCircle) timerCircle.innerText = this.timeLeft;

      if (timerBar) {
        const percent = Math.max(0, (this.timeLeft / this.timeLimit) * 100);
        timerBar.style.width = `${percent}%`;
      }

      sounds.playTick();

      const totalPlayers = Object.keys(this.players).length;
      const totalAnswers = Object.keys(this.receivedAnswers).length;

      // CIERRE AUTOMÁTICO AL VOTAR TODOS O AGOTARSE EL TIEMPO
      const allAnswered = this.autoCloseOnAllAnswered && totalPlayers > 0 && totalAnswers >= totalPlayers;

      if (this.timeLeft <= 0 || allAnswered) {
        this.timeUpReveal();
      }
    }, 1000);
  }

  timeUpReveal() {
    clearInterval(this.questionTimer);
    sounds.stopTensionMusic();
    sounds.playWrong();
    this.roomStatus = 'TIMES_UP';

    const q = this.activeQuestions[this.currentQIndex];
    const isLastQuestion = (this.currentQIndex + 1 >= this.activeQuestions.length);

    // Resaltar opción correcta y opacar las incorrectas
    for (let i = 0; i < 4; i++) {
      const optCard = document.getElementById(`host-opt-${i}`);
      if (i === q.correctAnswer) {
        optCard.classList.add('ring-4', 'ring-white', 'scale-105');
      } else {
        optCard.classList.add('opacity-30');
      }
    }

    // Mostrar explicación con versículo bíblico
    const expBox = document.getElementById('host-explanation-box');
    const expVerse = document.getElementById('host-explanation-verse');
    const expText = document.getElementById('host-explanation-text');

    expVerse.innerText = q.verse || 'Referencia Bíblica';
    expText.innerText = q.explanation || '¡Excelente oportunidad para aprender más de la Palabra de Dios!';
    expBox.classList.remove('hidden');

    // Configurar botones de control del anfitrión
    const controls = document.getElementById('host-game-controls');
    const btnNextDirect = document.getElementById('btn-direct-next-q');
    const btnOptLb = document.getElementById('btn-show-optional-lb');

    controls.classList.remove('hidden');

    if (isLastQuestion) {
      btnNextDirect.innerHTML = '<span>👑 Ver Gran Podio Final</span>';
      if (btnOptLb) btnOptLb.classList.add('hidden');
    } else {
      btnNextDirect.innerHTML = '<span>Siguiente Pregunta</span> <span>➡️</span>';

      // Mostrar u ocultar botón de posiciones según configuración del anfitrión
      if (this.leaderboardMode === 'END_ONLY') {
        if (btnOptLb) btnOptLb.classList.add('hidden');
      } else {
        if (btnOptLb) btnOptLb.classList.remove('hidden');
      }
    }

    // Notificar a los teléfonos
    roomSync.broadcast('QUESTION_ENDED', {
      status: 'TIMES_UP',
      correctAnswer: q.correctAnswer,
      verse: q.verse,
      explanation: q.explanation
    });

    // Si el anfitrión configuró mostrar posiciones automáticamente después de cada pregunta
    if (this.leaderboardMode === 'EVERY_ROUND' && !isLastQuestion) {
      setTimeout(() => {
        if (this.roomStatus === 'TIMES_UP') {
          this.showLeaderboard();
        }
      }, 3500);
    }
  }

  showLeaderboard() {
    sounds.playClick();
    this.roomStatus = 'LEADERBOARD';
    this.switchView('view-host-leaderboard');

    // Si el modo es Equipos, actualizar marcador grupal
    const teamBanner = document.getElementById('leaderboard-teams-banner');
    if (this.gameMode === 'TEAMS') {
      teamBanner.classList.remove('hidden');
      let scoreTeamA = 0;
      let scoreTeamB = 0;

      Object.values(this.players).forEach(p => {
        if (p.team === 'A') scoreTeamA += p.score || 0;
        if (p.team === 'B') scoreTeamB += p.score || 0;
      });

      document.getElementById('lb-score-team-a').innerText = scoreTeamA.toLocaleString();
      document.getElementById('lb-score-team-b').innerText = scoreTeamB.toLocaleString();

      const total = scoreTeamA + scoreTeamB;
      const pctA = total > 0 ? (scoreTeamA / total) * 100 : 50;
      const pctB = total > 0 ? (scoreTeamB / total) * 100 : 50;

      document.getElementById('lb-team-a-bar').style.width = `${pctA}%`;
      document.getElementById('lb-team-b-bar').style.width = `${pctB}%`;
    } else {
      teamBanner.classList.add('hidden');
    }

    // Ordenar jugadores por puntaje
    const sorted = Object.values(this.players).sort((a, b) => (b.score || 0) - (a.score || 0));
    const lbList = document.getElementById('leaderboard-players-list');
    if (lbList) {
      lbList.innerHTML = sorted.map((p, idx) => {
        const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}°`;
        const streakBadge = (p.streak && p.streak >= 2) ? `<span class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">🔥 Racha ${p.streak}</span>` : '';
        const teamBadge = this.gameMode === 'TEAMS' ? (p.team === 'A' ? '🦁' : '👑') : '';

        return `
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div class="flex items-center gap-3">
              <span class="font-black text-xl w-8 text-center text-amber-400">${medal}</span>
              <span class="text-2xl">${p.avatar}</span>
              <div>
                <div class="font-bold text-white flex items-center gap-2">
                  <span>${p.name}</span> ${teamBadge}
                </div>
                ${streakBadge}
              </div>
            </div>
            <div class="font-extrabold text-xl text-cyan-400">
              ${(p.score || 0).toLocaleString()} <span class="text-xs text-slate-400">pts</span>
            </div>
          </div>
        `;
      }).join('') || '<div class="text-center text-slate-400 py-6">Sin puntajes aún</div>';
    }

    // Notificar a teléfonos para mostrar resultados en pantalla del jugador
    roomSync.broadcast('LEADERBOARD_SHOWN', {
      status: 'LEADERBOARD',
      players: this.players
    });
  }

  nextQuestionOrPodium() {
    sounds.playClick();
    if (this.currentQIndex + 1 < this.activeQuestions.length) {
      this.startQuestion(this.currentQIndex + 1);
    } else {
      this.showFinalPodium();
    }
  }

  showFinalPodium() {
    sounds.playFanfare();
    this.roomStatus = 'PODIUM';
    this.switchView('view-host-podium');

    // Confeti a toda pantalla
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        window.confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } });
        window.confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } });
      }, 700);
    }

    // Determinar ganador de equipo si aplica
    if (this.gameMode === 'TEAMS') {
      let scoreA = 0;
      let scoreB = 0;
      Object.values(this.players).forEach(p => {
        if (p.team === 'A') scoreA += p.score || 0;
        if (p.team === 'B') scoreB += p.score || 0;
      });

      const winText = document.getElementById('podium-winning-team-text');
      if (winText) {
        if (scoreA > scoreB) {
          winText.innerText = `¡El Equipo Ganador es: 🦁 HOMBRES (${scoreA.toLocaleString()} pts vs ${scoreB.toLocaleString()} pts)!`;
          winText.className = 'text-blue-300 font-black text-xl md:text-2xl mb-8';
        } else if (scoreB > scoreA) {
          winText.innerText = `¡El Equipo Ganador es: 👑 MUJERES (${scoreB.toLocaleString()} pts vs ${scoreA.toLocaleString()} pts)!`;
          winText.className = 'text-pink-300 font-black text-xl md:text-2xl mb-8';
        } else {
          winText.innerText = `¡EMPATE GLORIOSO ENTRE AMBOS EQUIPOS! (${scoreA.toLocaleString()} pts)`;
          winText.className = 'text-amber-300 font-black text-xl md:text-2xl mb-8';
        }
      }
    } else {
      const winText = document.getElementById('podium-winning-team-text');
      if (winText) winText.innerText = '¡Felicitaciones a los mejores sabios de las Escrituras!';
    }

    // Top 3 Individual
    const sorted = Object.values(this.players).sort((a, b) => (b.score || 0) - (a.score || 0));

    const p1 = sorted[0] || { name: '---', score: 0, avatar: '👑' };
    document.getElementById('podium-1st-name').innerText = `${p1.avatar} ${p1.name}`;
    document.getElementById('podium-1st-score').innerText = `${p1.score || 0} pts`;

    const p2 = sorted[1] || { name: '---', score: 0, avatar: '🥈' };
    document.getElementById('podium-2nd-name').innerText = `${p2.avatar} ${p2.name}`;
    document.getElementById('podium-2nd-score').innerText = `${p2.score || 0} pts`;

    const p3 = sorted[2] || { name: '---', score: 0, avatar: '🥉' };
    document.getElementById('podium-3rd-name').innerText = `${p3.avatar} ${p3.name}`;
    document.getElementById('podium-3rd-score').innerText = `${p3.score || 0} pts`;

    roomSync.broadcast('GAME_FINISHED', {
      status: 'PODIUM',
      podium: sorted.slice(0, 3)
    });
  }

  // ==============================================================
  // FLUJO DEL JUGADOR (MÓVIL / SMARTPHONE)
  // ==============================================================

  startPlayerJoin() {
    sounds.playClick();
    this.isHost = false;
    this.switchView('view-player-join');
  }

  renderAvatarSelector() {
    const cont = document.getElementById('avatar-selector');
    if (!cont) return;
    cont.innerHTML = this.availableAvatars.map((av, idx) => `
      <button type="button" onclick="app.selectAvatar('${av}')" class="w-10 h-10 rounded-xl text-xl flex items-center justify-center transition border ${this.myAvatar === av ? 'border-amber-400 bg-amber-500/20 scale-110' : 'border-slate-700 bg-slate-800'}" id="av-opt-${idx}">
        ${av}
      </button>
    `).join('');
  }

  selectAvatar(av) {
    sounds.playClick();
    this.myAvatar = av;
    this.renderAvatarSelector();
  }

  selectPlayerTeam(team) {
    sounds.playClick();
    this.myTeam = team;
    const btnA = document.getElementById('btn-player-team-a');
    const btnB = document.getElementById('btn-player-team-b');
    if (team === 'A') {
      btnA.className = 'p-3 rounded-2xl border-2 border-blue-500 bg-blue-600/30 text-blue-200 font-bold text-sm flex items-center justify-center gap-1.5';
      btnB.className = 'p-3 rounded-2xl border-2 border-slate-700 bg-slate-800 text-slate-400 font-bold text-sm flex items-center justify-center gap-1.5';
    } else {
      btnB.className = 'p-3 rounded-2xl border-2 border-pink-500 bg-pink-600/30 text-pink-200 font-bold text-sm flex items-center justify-center gap-1.5';
      btnA.className = 'p-3 rounded-2xl border-2 border-slate-700 bg-slate-800 text-slate-400 font-bold text-sm flex items-center justify-center gap-1.5';
    }
  }

  joinRoomAsPlayer() {
    const pin = document.getElementById('player-input-pin')?.value.trim();
    const name = document.getElementById('player-input-name')?.value.trim();
    if (!pin || !name) {
      alert('Por favor escribe el PIN y tu Nombre.');
      return;
    }

    sounds.playClick();
    this.roomPin = pin;
    this.myPlayerName = name;
    roomSync.currentPin = pin;

    // Guardar sesión en localStorage para que resista bloqueos de pantalla
    this.savePlayerSession();

    // Mostrar pantalla de espera en celular
    this.switchView('view-player-lobby');
    document.getElementById('player-my-name').innerText = name;
    document.getElementById('player-my-avatar').innerText = this.myAvatar;
    document.getElementById('player-my-team-badge').innerText = this.myTeam === 'A' ? 'Equipo Hombres 🦁' : 'Equipo Mujeres 👑';

    // Notificar al Anfitrión
    roomSync.broadcast('PLAYER_JOINED', {
      playerId: this.myPlayerId,
      name: this.myPlayerName,
      avatar: this.myAvatar,
      team: this.myTeam,
      score: this.myScore || 0,
      streak: this.myStreak || 0
    });

    // Conectar escucha Firestore
    roomSync.listenToOnlineRoom(this.roomPin);
  }

  savePlayerSession() {
    try {
      localStorage.setItem('ws_player_session', JSON.stringify({
        pin: this.roomPin,
        name: this.myPlayerName,
        avatar: this.myAvatar,
        team: this.myTeam,
        playerId: this.myPlayerId,
        score: this.myScore,
        streak: this.myStreak,
        updatedAt: Date.now()
      }));
    } catch (e) {}
  }

  submitPlayerAnswer(answerIndex) {
    if (this.hasAnsweredCurrent) return;
    this.hasAnsweredCurrent = true;
    sounds.playClick();

    const timeTaken = Math.max(0.5, (Date.now() - this.qStartTime) / 1000);

    // Ocultar botones y mostrar estado de espera
    document.getElementById('player-buttons-grid').classList.add('hidden');
    const waitingState = document.getElementById('player-waiting-state');
    waitingState.classList.remove('hidden');
    document.getElementById('player-state-title').innerText = '¡Respuesta Enviada!';
    document.getElementById('player-state-desc').innerText = 'Esperando a los demás o que termine el tiempo...';

    // Enviar respuesta al Anfitrión
    roomSync.broadcast('SUBMIT_ANSWER', {
      playerId: this.myPlayerId,
      answerIndex,
      timeTaken
    });
  }

  // ==============================================================
  // SINCRONIZACIÓN DE MENSAJES Y SALAS
  // ==============================================================

  setupRoomSyncListeners() {
    roomSync.subscribe((data) => {
      if (!data || !data.action) return;
      const { action, payload } = data;

      // Acciones que procesa el Anfitrión (Host)
      if (this.isHost) {
        if ((action === 'PLAYER_JOINED' || action === 'PLAYER_RECONNECTED') && payload) {
          // Si el jugador ya existía, preservar su puntaje; si es nuevo, agregarlo
          const existingScore = this.players[payload.playerId]?.score || payload.score || 0;
          const existingStreak = this.players[payload.playerId]?.streak || payload.streak || 0;

          this.players[payload.playerId] = {
            name: payload.name,
            avatar: payload.avatar,
            team: payload.team,
            score: existingScore,
            streak: existingStreak
          };

          this.updateLobbyPlayersList();

          // Actualizar contador en pantalla del anfitrión si el juego está andando
          const totalCountEl = document.getElementById('host-total-players-count');
          if (totalCountEl) totalCountEl.innerText = Object.keys(this.players).length;

          // Si el juego ya está andando, responderle al jugador con el estado actual
          if (this.roomStatus === 'QUESTION') {
            const q = this.activeQuestions[this.currentQIndex];
            roomSync.broadcast('SYNC_ACTIVE_STATE', {
              targetPlayerId: payload.playerId,
              status: 'QUESTION',
              questionIndex: this.currentQIndex,
              totalQuestions: this.activeQuestions.length,
              timeLimit: this.timeLimit,
              question: q?.question,
              options: q?.options,
              level: q?.level,
              alreadyAnswered: !!this.receivedAnswers[payload.playerId]
            });
          }
        }

        if (action === 'SUBMIT_ANSWER' && payload) {
          if (!this.receivedAnswers[payload.playerId]) {
            const q = this.activeQuestions[this.currentQIndex];
            const isCorrect = q && payload.answerIndex === q.correctAnswer;
            let pointsEarned = 0;

            if (isCorrect) {
              const ratio = Math.max(0, 1 - (payload.timeTaken / this.timeLimit));
              pointsEarned = Math.round(600 + (ratio * 400));
            }

            this.receivedAnswers[payload.playerId] = {
              answerIndex: payload.answerIndex,
              isCorrect,
              pointsEarned
            };

            // Actualizar puntaje del jugador
            if (this.players[payload.playerId]) {
              const p = this.players[payload.playerId];
              if (isCorrect) {
                p.score = (p.score || 0) + pointsEarned;
                p.streak = (p.streak || 0) + 1;
              } else {
                p.streak = 0;
              }
            }

            // Actualizar contador de respuestas recibidas en la pantalla grande
            const answersCountEl = document.getElementById('host-answers-count');
            if (answersCountEl) answersCountEl.innerText = Object.keys(this.receivedAnswers).length;

            // Enviar confirmación al jugador
            roomSync.broadcast('ANSWER_EVALUATED', {
              playerId: payload.playerId,
              isCorrect,
              pointsEarned,
              newScore: this.players[payload.playerId]?.score || 0,
              streak: this.players[payload.playerId]?.streak || 0
            });

            // CIERRE AUTOMÁTICO AL VOTAR TODOS
            const totalPlayers = Object.keys(this.players).length;
            const totalAnswers = Object.keys(this.receivedAnswers).length;
            if (this.autoCloseOnAllAnswered && totalPlayers > 0 && totalAnswers >= totalPlayers) {
              console.log('⚡ ¡Todos los jugadores respondieron! Cerrando tiempo automáticamente...');
              this.timeUpReveal();
            }
          }
        }
      }

      // Acciones que procesa el Jugador (Player)
      if (!this.isHost) {
        if (action === 'QUESTION_STARTED' || (action === 'SYNC_ACTIVE_STATE' && payload?.targetPlayerId === this.myPlayerId && payload.status === 'QUESTION')) {
          this.qStartTime = Date.now();
          this.switchView('view-player-game');

          document.getElementById('player-game-name').innerText = this.myPlayerName;
          document.getElementById('player-game-avatar').innerText = this.myAvatar;
          document.getElementById('player-game-score').innerText = this.myScore;

          if (payload?.alreadyAnswered) {
            this.hasAnsweredCurrent = true;
            document.getElementById('player-buttons-grid').classList.add('hidden');
            document.getElementById('player-waiting-state').classList.remove('hidden');
            document.getElementById('player-state-title').innerText = '¡Ya Respondiste!';
            document.getElementById('player-state-desc').innerText = 'Esperando los resultados en la pantalla principal...';
          } else {
            this.hasAnsweredCurrent = false;
            document.getElementById('player-buttons-grid').classList.remove('hidden');
            document.getElementById('player-waiting-state').classList.add('hidden');
            document.getElementById('player-feedback-panel').classList.add('hidden');
          }
        }

        if (action === 'ANSWER_EVALUATED' && payload && payload.playerId === this.myPlayerId) {
          this.myScore = payload.newScore;
          this.myStreak = payload.streak;
          this.savePlayerSession();

          document.getElementById('player-game-score').innerText = this.myScore;

          const feedback = document.getElementById('player-feedback-panel');
          const title = document.getElementById('player-feedback-title');
          const points = document.getElementById('player-feedback-points');

          feedback.classList.remove('hidden');
          if (payload.isCorrect) {
            sounds.playCorrect();
            feedback.className = 'mt-3 p-4 rounded-2xl text-center border-2 border-emerald-500 bg-emerald-950/80 text-emerald-200';
            title.innerText = '¡CORRECTO! 🎉';
            points.innerText = `+${payload.pointsEarned} puntos`;
          } else {
            sounds.playWrong();
            feedback.className = 'mt-3 p-4 rounded-2xl text-center border-2 border-red-500 bg-red-950/80 text-red-200';
            title.innerText = '¡CASI! 😅';
            points.innerText = '0 puntos en esta ronda';
          }
        }

        if (action === 'QUESTION_ENDED') {
          if (!this.hasAnsweredCurrent) {
            document.getElementById('player-buttons-grid').classList.add('hidden');
            const waitingState = document.getElementById('player-waiting-state');
            waitingState.classList.remove('hidden');
            document.getElementById('player-state-title').innerText = '¡Tiempo Agotado!';
            document.getElementById('player-state-desc').innerText = 'Mira la pantalla principal para ver la respuesta correcta y la cita bíblica.';
          }
        }

        if (action === 'GAME_FINISHED') {
          sounds.playFanfare();
          if (window.confetti) window.confetti();
        }
      }
    });
  }

  // ==============================================================
  // MODALES: BANCO DE PREGUNTAS Y FIREBASE
  // ==============================================================

  showQuestionsModal() {
    sounds.playClick();
    document.getElementById('modal-questions').classList.remove('hidden');
    this.filterQuestionsList('ALL');
  }

  closeQuestionsModal() {
    sounds.playClick();
    document.getElementById('modal-questions').classList.add('hidden');
  }

  filterQuestionsList(filter) {
    const listEl = document.getElementById('modal-questions-scroll');
    const totalEl = document.getElementById('modal-q-total');
    if (!listEl) return;

    ['ALL', 'EASY', 'MEDIUM', 'HARD'].forEach(f => {
      const btn = document.getElementById(`qfilter-${f}`);
      if (btn) {
        btn.className = f === filter
          ? 'px-3 py-1.5 rounded-lg bg-cyan-600 text-white font-bold'
          : 'px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700';
      }
    });

    const items = filter === 'ALL'
      ? QUESTIONS_DATABASE
      : QUESTIONS_DATABASE.filter(q => q.level === filter);

    if (totalEl) totalEl.innerText = items.length;

    listEl.innerHTML = items.map((q, idx) => {
      const lvl = QUESTION_LEVELS[q.level] || QUESTION_LEVELS.EASY;
      return `
        <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-xs">
          <div class="flex items-center justify-between mb-2">
            <span class="bg-slate-700 text-cyan-300 font-bold px-2 py-0.5 rounded">#${idx + 1} - ${q.category}</span>
            <span class="text-amber-300 font-semibold">${lvl.badge} ${lvl.name}</span>
          </div>
          <p class="font-bold text-sm text-white mb-2">${q.question}</p>
          <div class="grid grid-cols-2 gap-1.5 mb-2">
            ${q.options.map((opt, oIdx) => `
              <div class="p-1.5 rounded-lg ${oIdx === q.correctAnswer ? 'bg-emerald-900/60 border border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 text-slate-400'}">
                ${oIdx === q.correctAnswer ? '✓ ' : ''}${opt}
              </div>
            `).join('')}
          </div>
          <div class="text-[11px] text-amber-200/90 bg-amber-950/40 border border-amber-800/40 p-2 rounded-lg">
            📖 <strong>${q.verse}:</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('');
  }

  showSettingsModal() {
    sounds.playClick();
    document.getElementById('modal-settings').classList.remove('hidden');
    const apiKey = localStorage.getItem('ws_fb_apiKey') || DEFAULT_FIREBASE_CONFIG.apiKey;
    const appId = localStorage.getItem('ws_fb_appId') || DEFAULT_FIREBASE_CONFIG.appId;
    document.getElementById('cfg-api-key').value = apiKey;
    document.getElementById('cfg-app-id').value = appId;
  }

  closeSettingsModal() {
    sounds.playClick();
    document.getElementById('modal-settings').classList.add('hidden');
  }

  saveFirebaseSettings() {
    sounds.playClick();
    const apiKey = document.getElementById('cfg-api-key')?.value.trim();
    const appId = document.getElementById('cfg-app-id')?.value.trim();

    if (apiKey) localStorage.setItem('ws_fb_apiKey', apiKey);
    if (appId) localStorage.setItem('ws_fb_appId', appId);

    roomSync.initFirebase({
      ...DEFAULT_FIREBASE_CONFIG,
      apiKey,
      appId
    });

    alert('¡Configuración guardada exitosamente!');
    this.closeSettingsModal();
  }
}

// Inicialización global
export const app = new WiseSheepApp();
window.app = app;
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
