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
    this.roomStatus = 'IDLE'; // 'LOBBY' | 'QUESTION' | 'TIMES_UP' | 'LEADERBOARD' | 'PODIUM' | 'VOTING' | 'VOTING_RESULTS'
    this.players = {}; // { [id]: { name, avatar, team, score, streak } }
    this.activeQuestions = [];
    this.currentQIndex = 0;
    this.questionTimer = null;
    this.timeLeft = 20;
    this.qStartTime = 0;
    this.receivedAnswers = {}; // { [playerId]: { answerIndex, isCorrect, pointsEarned } }

    // Estado de Votaciones / Premios Grupales (Soporte Múltiples Preguntas)
    this.votingTimer = null;
    this.votingTimeLeft = 30;
    this.pollQueue = ['¿Quién es el compañero más espiritual del grupo?'];
    this.currentPollIndex = 0;
    this.currentPollQuestion = '';
    this.pollCandidates = []; // array of { id, name, avatar, team }
    this.receivedVotes = {}; // { [voterId]: candidateId }
    this.pollBonusPoints = 0;
    this.pollTimeLimit = 30;
    this.previousStateBeforeVoting = 'LOBBY';

    // Cuestionarios Personales con Clasificación Propia
    this.customQuestionnaires = [];
    this.selectedCustomQuizId = null;
    this.activeEditingQuizId = null;

    // Búsqueda y Filtros del Banco de Preguntas
    this.currentQuestionFilter = 'ALL';
    this.questionSearchQuery = '';

    // Estado del Jugador (Player)
    this.myPlayerId = roomSync.playerId;
    this.myPlayerName = '';
    this.myAvatar = '🐑';
    this.myTeam = 'A'; // 'A': Hombres, 'B': Mujeres
    this.myScore = 0;
    this.myStreak = 0;
    this.maxStreak = 0;
    this.hasAnsweredCurrent = false;
    this.hasVotedCurrent = false;

    // Avatares disponibles
    this.availableAvatars = ['🐑', '🕊️', '👑', '🐟', '🔥', '🛡️', '🦁', '⛵'];
  }

  init() {
    console.log('Iniciando WISE SHEEP App con 525+ preguntas...');
    this.renderAvatarSelector();
    this.setupPhoneVisibilityResume();
    this.loadCustomQuestionnaires();
    this.populateCustomQuizSelect();
    this.checkSavedSession();
    this.checkUrlForPin();

    const qCountHeader = document.getElementById('header-q-count');
    if (qCountHeader) qCountHeader.innerText = `${QUESTIONS_DATABASE.length}+`;

    const savedApiKey = localStorage.getItem('ws_fb_apiKey');
    if (savedApiKey) {
      roomSync.initFirebase({
        ...DEFAULT_FIREBASE_CONFIG,
        apiKey: savedApiKey
      });
    }
  }

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
        this.maxStreak = saved.maxStreak || 0;
        this.isHost = false;
        roomSync.currentPin = saved.pin;

        const banner = document.getElementById('banner-reconnect');
        if (banner) banner.classList.add('hidden');

        this.startListeningAsPlayer(this.roomPin);

        roomSync.registerPlayer(this.roomPin, this.myPlayerId, {
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
    if (this.roomPin && !this.isHost) {
      this.startListeningAsPlayer(this.roomPin);
    }
  }

  checkUrlForPin() {
    const params = new URLSearchParams(window.location.search);
    const pin = params.get('pin');
    if (pin) {
      this.startPlayerJoin();
      const pinInput = document.getElementById('player-input-pin');
      if (pinInput) pinInput.value = pin;
    }
  }

  toggleSound() {
    const isMuted = sounds.toggleMute();
    const icon = document.getElementById('sound-icon');
    if (icon) icon.innerText = isMuted ? '🔇' : '🔊';
  }

  switchView(viewId) {
    const views = [
      'view-home',
      'view-host-setup',
      'view-host-lobby',
      'view-host-game',
      'view-host-leaderboard',
      'view-host-podium',
      'view-host-voting',
      'view-player-join',
      'view-player-lobby',
      'view-player-game',
      'view-player-voting',
      'view-player-podium'
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
    this.myScore = 0;
    this.myStreak = 0;
    this.maxStreak = 0;
    this.switchView('view-home');
  }

  // ==============================================================
  // FLUJO DEL ANFITRIÓN (HOST)
  // ==============================================================

  startHostSetup() {
    sounds.playClick();
    this.isHost = true;
    this.switchView('view-host-setup');
    this.populateCustomQuizSelect();
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
          btn.className = 'p-3 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-xs text-center transition';
        } else {
          btn.className = 'p-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-bold text-xs text-center hover:border-slate-700 transition';
        }
      }
    });

    const customBtn = document.getElementById('diff-btn-CUSTOM');
    const customContainer = document.getElementById('setup-custom-quiz-container');
    const customBadge = document.getElementById('diff-custom-badge');

    if (diff === 'CUSTOM') {
      if (customBtn) customBtn.className = 'w-full p-3 rounded-2xl border-2 border-purple-400 bg-purple-950/60 text-white font-bold text-xs text-left shadow-lg glow-blue transition flex items-center justify-between';
      if (customContainer) customContainer.classList.remove('hidden');
      if (customBadge) {
        customBadge.innerText = '✓ ACTIVO';
        customBadge.className = 'text-xs bg-purple-600 text-white px-3 py-1 rounded-xl font-black border border-purple-300';
      }
      this.populateCustomQuizSelect();
    } else {
      if (customBtn) customBtn.className = 'w-full p-3 rounded-2xl border border-purple-500/40 bg-purple-950/20 text-purple-200 font-bold text-xs text-left hover:border-purple-400 transition flex items-center justify-between';
      if (customContainer) customContainer.classList.add('hidden');
      if (customBadge) {
        customBadge.innerText = 'Seleccionar';
        customBadge.className = 'text-xs bg-purple-900/80 px-3 py-1 rounded-xl border border-purple-500/50 font-bold';
      }
    }
  }

  handleQuestionCountChange(val) {
    const customBox = document.getElementById('setup-custom-count-box');
    if (val === 'CUSTOM') {
      if (customBox) customBox.classList.remove('hidden');
      const input = document.getElementById('setup-custom-question-count');
      if (input && input.value) {
        this.questionCount = Math.max(1, parseInt(input.value) || 10);
      } else {
        this.questionCount = 10;
      }
    } else {
      if (customBox) customBox.classList.add('hidden');
      this.questionCount = parseInt(val) || 10;
    }
  }

  createRoom() {
    sounds.playClick();
    this.roomPin = roomSync.generatePin();
    roomSync.currentPin = this.roomPin;

    const countSelect = document.getElementById('setup-question-count')?.value || '10';
    if (countSelect === 'CUSTOM') {
      const customInput = document.getElementById('setup-custom-question-count')?.value;
      this.questionCount = Math.max(1, parseInt(customInput) || 10);
    } else {
      this.questionCount = parseInt(countSelect) || 10;
    }

    this.timeLimit = parseInt(document.getElementById('setup-time-limit')?.value || '20');
    this.autoCloseOnAllAnswered = document.getElementById('setup-auto-close')?.checked ?? true;
    this.leaderboardMode = document.getElementById('setup-leaderboard-mode')?.value || 'MANUAL';

    // Preparar preguntas aleatorias
    this.prepareQuestions();
    this.players = {};
    this.currentQIndex = 0;
    this.roomStatus = 'LOBBY';

    // Mostrar botón de Votación en el header para el host
    document.getElementById('header-btn-poll')?.classList.remove('hidden');

    this.switchView('view-host-lobby');
    const pinDisplay = document.getElementById('lobby-pin-display');
    if (pinDisplay) pinDisplay.innerText = this.roomPin;

    const teamsCont = document.getElementById('lobby-teams-container');
    const indivCont = document.getElementById('lobby-indiv-container');
    if (this.gameMode === 'TEAMS') {
      teamsCont.classList.remove('hidden');
      indivCont.classList.add('hidden');
    } else {
      teamsCont.classList.add('hidden');
      indivCont.classList.remove('hidden');
    }

    this.generateLobbyQRCode();

    // 1. Guardar estado inicial en Firestore
    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'LOBBY',
      mode: this.gameMode,
      timeLimit: this.timeLimit,
      totalQuestions: this.activeQuestions.length,
      currentQuestionIndex: 0,
      leaderboardMode: this.leaderboardMode,
      leaderboard: []
    });

    // 2. Escuchar jugadores
    roomSync.listenToPlayers(this.roomPin, (playersData) => {
      this.players = playersData || {};
      this.updateLobbyPlayersList();
      const totalCountEl = document.getElementById('host-total-players-count');
      if (totalCountEl) totalCountEl.innerText = Object.keys(this.players).length;
    });

    // 3. Escuchar respuestas de trivia
    roomSync.listenToAnswers(this.roomPin, (playerId, answerData) => {
      this.handleHostAnswerReceived(playerId, answerData);
    });

    // 4. Escuchar votos de dinámicas/premios
    roomSync.listenToVotes(this.roomPin, (playerId, voteData) => {
      this.handleHostVoteReceived(playerId, voteData);
    });
  }

  prepareQuestions() {
    let pool = [];

    if (this.selectedDifficulty === 'CUSTOM') {
      const quiz = this.customQuestionnaires.find(q => q.id === this.selectedCustomQuizId);
      if (quiz && quiz.questions && quiz.questions.length > 0) {
        pool = [...quiz.questions];
      } else if (this.customQuestionnaires.length > 0 && this.customQuestionnaires[0].questions.length > 0) {
        pool = [...this.customQuestionnaires[0].questions];
      } else {
        alert('No se encontraron preguntas en tu cuestionario personal. Usaremos preguntas bíblicas generales.');
        pool = [...QUESTIONS_DATABASE];
      }
      this.activeQuestions = shuffleArray(pool).slice(0, this.questionCount);
      return;
    }

    const all = [...QUESTIONS_DATABASE];
    if (this.selectedDifficulty === 'ALL') {
      const easyPool = shuffleArray(all.filter(q => q.level === 'EASY'));
      const medPool = shuffleArray(all.filter(q => q.level === 'MEDIUM'));
      const hardPool = shuffleArray(all.filter(q => q.level === 'HARD'));

      let countEasy = Math.max(1, Math.round(this.questionCount * 0.35));
      let countMed = Math.max(1, Math.round(this.questionCount * 0.35));
      let countHard = Math.max(1, this.questionCount - countEasy - countMed);

      const selectedEasy = easyPool.slice(0, countEasy);
      const selectedMed = medPool.slice(0, countMed);
      const selectedHard = hardPool.slice(0, countHard);

      // Barajar juntos para aleatoriedad completa en cada partida
      this.activeQuestions = shuffleArray([...selectedEasy, ...selectedMed, ...selectedHard]).slice(0, this.questionCount);
    } else {
      const filtered = shuffleArray(all.filter(q => q.level === this.selectedDifficulty));
      this.activeQuestions = filtered.slice(0, this.questionCount);
    }

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

    // 1. REINICIAR PUNTOS Y RACHA DE TODOS LOS JUGADORES (CORRECCIÓN CRÍTICA DE ACUMULACIÓN)
    Object.keys(this.players).forEach(id => {
      if (this.players[id]) {
        this.players[id].score = 0;
        this.players[id].streak = 0;
        roomSync.registerPlayer(this.roomPin, id, this.players[id]);
      }
    });

    // 2. Barajar y asegurar preguntas completamente aleatorias en cada nueva partida
    this.prepareQuestions();

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

    this.switchView('view-host-game');

    document.getElementById('game-q-counter').innerText = `Pregunta ${index + 1} de ${this.activeQuestions.length}`;
    document.getElementById('game-q-category').innerText = q.category || q.customCategory || 'Trivia Bíblica';
    document.getElementById('game-q-text').innerText = q.question;
    document.getElementById('host-answers-count').innerText = '0';
    document.getElementById('host-total-players-count').innerText = Object.keys(this.players).length;
    document.getElementById('host-timer-circle').innerText = this.timeLeft;

    const badgeEl = document.getElementById('game-q-badge');
    if (q.level === 'CUSTOM') {
      badgeEl.innerText = `⭐ ${q.customCategory || 'Personal'}`;
      badgeEl.className = 'bg-purple-900/80 text-purple-200 border border-purple-500/50 px-3 py-1 rounded-xl text-xs font-bold';
    } else {
      const lvlInfo = QUESTION_LEVELS[q.level] || QUESTION_LEVELS.EASY;
      badgeEl.innerText = `${lvlInfo.badge} ${lvlInfo.name}`;
      badgeEl.className = 'bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-xl text-xs font-bold';
    }

    for (let i = 0; i < 4; i++) {
      const optCard = document.getElementById(`host-opt-${i}`);
      const optText = document.getElementById(`host-opt-text-${i}`);
      if (optCard && optText) {
        if (i < q.options.length) {
          optCard.classList.remove('hidden');
          optText.innerText = q.options[i];
          optCard.className = this.getOptionColorClass(i, false);
        } else {
          optCard.classList.add('hidden');
        }
      }
    }

    document.getElementById('host-explanation-box').classList.add('hidden');
    document.getElementById('host-game-controls').classList.add('hidden');

    // Notificar a Firestore / jugadores
    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'QUESTION',
      currentQuestionIndex: index,
      totalQuestions: this.activeQuestions.length,
      question: q.question,
      options: q.options,
      qStartTime: this.qStartTime,
      timeLimit: this.timeLimit,
      category: q.category || q.customCategory || 'Trivia'
    });

    sounds.startTensionMusic();
    this.runQuestionTimer();
  }

  getOptionColorClass(idx, isHighlighted = false) {
    const baseColors = [
      'bg-red-600 border border-red-400/40',
      'bg-blue-600 border border-blue-400/40',
      'bg-amber-500 border border-amber-300/40',
      'bg-emerald-600 border border-emerald-400/40'
    ];
    let cls = 'btn-3d p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 text-left shadow-lg ' + (baseColors[idx] || 'bg-slate-700');
    if (isHighlighted) {
      cls += ' ring-4 ring-white scale-[1.02] shadow-2xl';
    }
    return cls;
  }

  runQuestionTimer() {
    if (this.questionTimer) clearInterval(this.questionTimer);

    const timerBar = document.getElementById('host-timer-bar');
    const timerCircle = document.getElementById('host-timer-circle');

    this.questionTimer = setInterval(() => {
      this.timeLeft--;
      if (timerCircle) timerCircle.innerText = this.timeLeft;

      if (timerBar) {
        const pct = Math.max(0, (this.timeLeft / this.timeLimit) * 100);
        timerBar.style.width = `${pct}%`;
      }

      sounds.playTick();

      const totalPlayers = Object.keys(this.players).length;
      const totalAnswers = Object.keys(this.receivedAnswers).length;

      if (this.timeLeft <= 0 || (this.autoCloseOnAllAnswered && totalPlayers > 0 && totalAnswers >= totalPlayers)) {
        this.closeQuestionAndReveal();
      }
    }, 1000);
  }

  handleHostAnswerReceived(playerId, answerData) {
    if (!this.isHost || this.roomStatus !== 'QUESTION') return;
    if (!answerData || answerData.questionIndex !== this.currentQIndex) return;

    const q = this.activeQuestions[this.currentQIndex];
    if (!q) return;

    const isCorrect = answerData.answerIndex === q.correctAnswer;
    let pointsEarned = 0;

    if (isCorrect) {
      const timeTaken = answerData.timeTaken || 1;
      const speedBonus = Math.max(0, Math.round((1 - (timeTaken / this.timeLimit)) * 500));
      pointsEarned = 500 + speedBonus;
    }

    this.receivedAnswers[playerId] = {
      answerIndex: answerData.answerIndex,
      isCorrect,
      pointsEarned
    };

    if (this.players[playerId]) {
      const p = this.players[playerId];
      if (isCorrect) {
        p.score = (p.score || 0) + pointsEarned;
        p.streak = (p.streak || 0) + 1;
      } else {
        p.streak = 0;
      }
      roomSync.registerPlayer(this.roomPin, playerId, p);
    }

    const hostAnswersCountEl = document.getElementById('host-answers-count');
    if (hostAnswersCountEl) hostAnswersCountEl.innerText = Object.keys(this.receivedAnswers).length;

    const totalPlayers = Object.keys(this.players).length;
    const totalAnswers = Object.keys(this.receivedAnswers).length;

    if (this.autoCloseOnAllAnswered && totalPlayers > 0 && totalAnswers >= totalPlayers) {
      console.log('⚡ ¡Todos los jugadores respondieron! Cerrando pregunta...');
      this.closeQuestionAndReveal();
    }
  }

  closeQuestionAndReveal() {
    clearInterval(this.questionTimer);
    sounds.stopTensionMusic();
    sounds.playFanfare();
    this.roomStatus = 'TIMES_UP';

    const q = this.activeQuestions[this.currentQIndex];
    if (!q) return;

    for (let i = 0; i < q.options.length; i++) {
      const optCard = document.getElementById(`host-opt-${i}`);
      if (optCard) {
        if (i === q.correctAnswer) {
          optCard.className = 'btn-3d p-4 sm:p-5 rounded-2xl flex items-center gap-4 text-left bg-emerald-600 border-4 border-white shadow-2xl ring-4 ring-emerald-400 scale-[1.02]';
        } else {
          optCard.className = 'p-4 sm:p-5 rounded-2xl flex items-center gap-4 text-left bg-slate-800/40 border border-slate-700/40 opacity-40 grayscale';
        }
      }
    }

    const explBox = document.getElementById('host-explanation-box');
    const explVerse = document.getElementById('host-explanation-verse');
    const explText = document.getElementById('host-explanation-text');
    if (explBox && explVerse && explText) {
      explVerse.innerText = q.verse || 'Cita Bíblica';
      explText.innerText = q.explanation || 'Respuesta verificada en las Escrituras.';
      explBox.classList.remove('hidden');
    }

    const controls = document.getElementById('host-game-controls');
    if (controls) controls.classList.remove('hidden');

    const nextBtn = document.getElementById('btn-direct-next-q');
    const isLastQuestion = (this.currentQIndex + 1 >= this.activeQuestions.length);
    if (nextBtn) {
      nextBtn.innerHTML = isLastQuestion
        ? '<span>Ver Podio Final</span> <span>🏆</span>'
        : '<span>Siguiente Pregunta</span> <span>➡️</span>';
    }

    const sorted = Object.entries(this.players).map(([id, p]) => ({
      id,
      name: p.name,
      avatar: p.avatar,
      team: p.team,
      score: p.score || 0,
      streak: p.streak || 0
    })).sort((a, b) => b.score - a.score);

    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'TIMES_UP',
      correctAnswer: q.correctAnswer,
      verse: q.verse,
      explanation: q.explanation,
      leaderboard: sorted
    });

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

    const teamBanner = document.getElementById('leaderboard-teams-banner');
    let scoreTeamA = 0;
    let scoreTeamB = 0;

    Object.values(this.players).forEach(p => {
      if (p.team === 'A') scoreTeamA += p.score || 0;
      if (p.team === 'B') scoreTeamB += p.score || 0;
    });

    if (this.gameMode === 'TEAMS') {
      teamBanner.classList.remove('hidden');
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

    const sorted = Object.entries(this.players).map(([id, p]) => ({
      id,
      name: p.name,
      avatar: p.avatar,
      team: p.team,
      score: p.score || 0,
      streak: p.streak || 0
    })).sort((a, b) => b.score - a.score);

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

    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'LEADERBOARD',
      leaderboard: sorted,
      scoreTeamA,
      scoreTeamB
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

    if (window.confetti) {
      window.confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 } });
      setTimeout(() => {
        window.confetti({ particleCount: 110, angle: 60, spread: 55, origin: { x: 0 } });
        window.confetti({ particleCount: 110, angle: 120, spread: 55, origin: { x: 1 } });
      }, 700);
    }

    let scoreA = 0;
    let scoreB = 0;
    Object.values(this.players).forEach(p => {
      if (p.team === 'A') scoreA += p.score || 0;
      if (p.team === 'B') scoreB += p.score || 0;
    });

    let winningTeam = 'TIE';
    if (scoreA > scoreB) winningTeam = 'A';
    else if (scoreB > scoreA) winningTeam = 'B';

    if (this.gameMode === 'TEAMS') {
      const winText = document.getElementById('podium-winning-team-text');
      if (winText) {
        if (winningTeam === 'A') {
          winText.innerText = `¡El Equipo Ganador es: 🦁 HOMBRES (${scoreA.toLocaleString()} pts vs ${scoreB.toLocaleString()} pts)!`;
          winText.className = 'text-blue-300 font-black text-xl md:text-2xl mb-8';
        } else if (winningTeam === 'B') {
          winText.innerText = `¡El Equipo Ganador es: 👑 MUJERES (${scoreB.toLocaleString()} pts vs ${scoreA.toLocaleString()} pts)!`;
          winText.className = 'text-pink-300 font-black text-xl md:text-2xl mb-8';
        } else {
          winText.innerText = `¡EMPATE GLORIOSO ENTRE AMBOS EQUIPOS! (${scoreA.toLocaleString()} pts)`;
          winText.className = 'text-amber-300 font-black text-xl md:text-2xl mb-8';
        }
      }
    } else {
      const winText = document.getElementById('podium-winning-team-text');
      if (winText) winText.innerText = '¡Felicitaciones a los más sabios de las Escrituras!';
    }

    const sorted = Object.entries(this.players).map(([id, p]) => ({
      id,
      name: p.name,
      avatar: p.avatar,
      team: p.team,
      score: p.score || 0,
      streak: p.streak || 0
    })).sort((a, b) => b.score - a.score);

    const p1 = sorted[0] || { name: '---', score: 0, avatar: '👑' };
    document.getElementById('podium-1st-name').innerText = `${p1.avatar} ${p1.name}`;
    document.getElementById('podium-1st-score').innerText = `${p1.score || 0} pts`;

    const p2 = sorted[1] || { name: '---', score: 0, avatar: '🥈' };
    document.getElementById('podium-2nd-name').innerText = `${p2.avatar} ${p2.name}`;
    document.getElementById('podium-2nd-score').innerText = `${p2.score || 0} pts`;

    const p3 = sorted[2] || { name: '---', score: 0, avatar: '🥉' };
    document.getElementById('podium-3rd-name').innerText = `${p3.avatar} ${p3.name}`;
    document.getElementById('podium-3rd-score').innerText = `${p3.score || 0} pts`;

    // Limpiar sesión local del jugador para que no arrastre puntos a futuras partidas
    try {
      localStorage.removeItem('ws_player_session');
    } catch (e) {}

    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'PODIUM',
      podium: sorted.slice(0, 3),
      leaderboard: sorted,
      winningTeam,
      scoreTeamA: scoreA,
      scoreTeamB: scoreB
    });
  }

  // ==============================================================
  // MODALIDAD: VOTACIÓN / PREMIOS GRUPALES CON MÚLTIPLES PREGUNTAS
  // ==============================================================

  renderPollQueueList() {
    const listEl = document.getElementById('poll-queue-list');
    const countEl = document.getElementById('poll-queue-count');
    const launchBtnText = document.getElementById('btn-launch-poll-text');
    if (countEl) countEl.innerText = this.pollQueue.length;
    if (launchBtnText) {
      launchBtnText.innerText = this.pollQueue.length > 1
        ? `¡LANZAR SESIÓN DE VOTACIÓN (${this.pollQueue.length} PREGUNTAS)!`
        : '¡LANZAR VOTACIÓN EN LA SALA!';
    }
    if (!listEl) return;

    if (this.pollQueue.length === 0) {
      listEl.innerHTML = '<span class="text-slate-400 italic text-[11px]">No hay preguntas en la lista. Agrega una arriba.</span>';
      return;
    }

    listEl.innerHTML = this.pollQueue.map((q, idx) => `
      <div class="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 flex items-center justify-between text-xs text-white">
        <span class="truncate pr-2"><strong class="text-amber-400">#${idx + 1}.</strong> ${q}</span>
        <button onclick="app.removePollFromQueue(${idx})" class="text-slate-400 hover:text-red-400 font-bold px-1.5 py-0.5" title="Eliminar">✕</button>
      </div>
    `).join('');
  }

  addPresetToPollQueue() {
    const sel = document.getElementById('poll-preset-select');
    if (!sel || !sel.value) return;
    this.pollQueue.push(sel.value);
    sounds.playClick();
    this.renderPollQueueList();
  }

  addCustomToPollQueue() {
    const input = document.getElementById('poll-custom-question-input');
    const val = input?.value.trim();
    if (!val) {
      alert('Por favor escribe tu pregunta personalizada.');
      return;
    }
    this.pollQueue.push(val);
    input.value = '';
    sounds.playClick();
    this.renderPollQueueList();
  }

  removePollFromQueue(idx) {
    sounds.playClick();
    this.pollQueue.splice(idx, 1);
    this.renderPollQueueList();
  }

  clearPollQueue() {
    sounds.playClick();
    this.pollQueue = [];
    this.renderPollQueueList();
  }

  openLaunchPollModal() {
    sounds.playClick();
    document.getElementById('modal-launch-poll')?.classList.remove('hidden');
    if (this.pollQueue.length === 0) {
      this.pollQueue = ['¿Quién es el compañero más espiritual del grupo?'];
    }
    this.renderPollQueueList();
  }

  closeLaunchPollModal() {
    sounds.playClick();
    document.getElementById('modal-launch-poll')?.classList.add('hidden');
  }

  handleCandidateModeChange(mode) {
    const customBox = document.getElementById('poll-custom-candidates-box');
    if (mode === 'CUSTOM_LIST') {
      customBox?.classList.remove('hidden');
    } else {
      customBox?.classList.add('hidden');
    }
  }

  launchPollFromModal() {
    const customVal = document.getElementById('poll-custom-question-input')?.value.trim();
    if (customVal && this.pollQueue.length === 0) {
      this.pollQueue.push(customVal);
    }

    if (this.pollQueue.length === 0) {
      alert('Por favor agrega al menos una pregunta a la lista de votación.');
      return;
    }

    const candidateMode = document.querySelector('input[name="poll-candidates-mode"]:checked')?.value || 'ALL_PLAYERS';
    let candidates = [];

    if (candidateMode === 'ALL_PLAYERS') {
      const playerIds = Object.keys(this.players);
      if (playerIds.length === 0) {
        candidates = [
          { id: 'c1', name: 'Hermano Juan', avatar: '🐑', team: 'A' },
          { id: 'c2', name: 'Hermana María', avatar: '👑', team: 'B' },
          { id: 'c3', name: 'Hermano Pedro', avatar: '🦁', team: 'A' },
          { id: 'c4', name: 'Hermana Sara', avatar: '🕊️', team: 'B' }
        ];
      } else {
        candidates = playerIds.map(id => ({
          id,
          name: this.players[id].name,
          avatar: this.players[id].avatar,
          team: this.players[id].team
        }));
      }
    } else {
      const customRaw = document.getElementById('poll-custom-candidates-input')?.value.trim();
      if (!customRaw) {
        alert('Por favor escribe al menos 2 candidatos separados por comas.');
        return;
      }
      const names = customRaw.split(',').map(s => s.trim()).filter(Boolean);
      if (names.length < 2) {
        alert('Por favor escribe al menos 2 candidatos.');
        return;
      }
      const defaultAvatars = ['🐑', '👑', '🦁', '🕊️', '🔥', '🛡️', '🐟', '⛵'];
      candidates = names.map((name, idx) => ({
        id: `custom_${idx}_` + Math.random().toString(36).substring(2, 6),
        name,
        avatar: defaultAvatars[idx % defaultAvatars.length],
        team: 'A'
      }));
    }

    this.pollCandidates = candidates;
    this.pollTimeLimit = parseInt(document.getElementById('poll-time-limit')?.value || '30');
    this.pollBonusPoints = parseInt(document.getElementById('poll-bonus-points')?.value || '0');

    this.currentPollIndex = 0;
    this.closeLaunchPollModal();
    this.startVotingRound(this.pollQueue[0], candidates, this.pollTimeLimit, this.pollBonusPoints);
  }

  startVotingRound(questionText, candidates, timeLimit, bonusPoints) {
    sounds.playFanfare();
    this.previousStateBeforeVoting = (this.roomStatus === 'VOTING' || this.roomStatus === 'VOTING_RESULTS')
      ? this.previousStateBeforeVoting
      : this.roomStatus;

    this.roomStatus = 'VOTING';
    this.currentPollQuestion = questionText;
    this.pollCandidates = candidates;
    this.pollBonusPoints = bonusPoints;
    this.receivedVotes = {};
    this.votingTimeLeft = timeLimit;

    // Cambiar vista del Host
    this.switchView('view-host-voting');

    const counterEl = document.getElementById('voting-q-counter');
    if (counterEl) {
      counterEl.innerText = `Pregunta ${this.currentPollIndex + 1} de ${this.pollQueue.length}`;
    }

    document.getElementById('voting-q-text').innerText = questionText;
    document.getElementById('voting-votes-count').innerText = '0';
    document.getElementById('voting-total-count').innerText = Object.keys(this.players).length;
    document.getElementById('voting-timer-circle').innerText = this.votingTimeLeft;
    document.getElementById('voting-status-desc').innerText = 'Esperando que todos los participantes elijan en su celular...';

    // Ocultar card de ganador previo y botones
    document.getElementById('voting-winner-card').classList.add('hidden');
    document.getElementById('btn-voting-reveal').classList.remove('hidden');
    document.getElementById('btn-voting-next-q').classList.add('hidden');
    document.getElementById('btn-voting-continue').classList.add('hidden');

    this.renderHostVotingCandidates();

    // Actualizar en Firestore para sincronizar celulares
    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'VOTING',
      pollQuestion: questionText,
      pollIndex: this.currentPollIndex,
      pollTotal: this.pollQueue.length,
      candidates,
      timeLimit,
      bonusPoints,
      pollStartTime: Date.now()
    });

    sounds.startTensionMusic();
    this.runVotingTimer(timeLimit);
  }

  nextVotingQuestion() {
    sounds.playClick();
    this.currentPollIndex++;
    if (this.currentPollIndex < this.pollQueue.length) {
      const nextQ = this.pollQueue[this.currentPollIndex];
      this.startVotingRound(nextQ, this.pollCandidates, this.pollTimeLimit, this.pollBonusPoints);
    } else {
      this.returnToGameAfterVoting();
    }
  }

  renderHostVotingCandidates() {
    const grid = document.getElementById('voting-candidates-grid');
    if (!grid) return;

    const voteCounts = {};
    this.pollCandidates.forEach(c => voteCounts[c.id] = 0);
    Object.values(this.receivedVotes).forEach(candId => {
      if (voteCounts[candId] !== undefined) voteCounts[candId]++;
    });

    const totalVotes = Object.keys(this.receivedVotes).length;

    grid.innerHTML = this.pollCandidates.map(c => {
      const count = voteCounts[c.id] || 0;
      const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

      return `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden" id="host-cand-card-${c.id}">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">${c.avatar}</span>
            <div class="truncate">
              <div class="font-extrabold text-base text-white truncate">${c.name}</div>
              <div class="text-[11px] text-slate-400 font-semibold">${count} voto(s)</div>
            </div>
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full transition-all duration-300" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  runVotingTimer(limit) {
    if (this.votingTimer) clearInterval(this.votingTimer);

    const circle = document.getElementById('voting-timer-circle');

    this.votingTimer = setInterval(() => {
      this.votingTimeLeft--;
      if (circle) circle.innerText = this.votingTimeLeft;
      sounds.playTick();

      const totalPlayers = Object.keys(this.players).length;
      const totalVotes = Object.keys(this.receivedVotes).length;

      if (this.votingTimeLeft <= 0 || (totalPlayers > 0 && totalVotes >= totalPlayers)) {
        this.closeVotingAndReveal();
      }
    }, 1000);
  }

  handleHostVoteReceived(playerId, voteData) {
    if (!this.isHost || this.roomStatus !== 'VOTING') return;
    if (!voteData || !voteData.candidateId) return;

    this.receivedVotes[playerId] = voteData.candidateId;

    const countEl = document.getElementById('voting-votes-count');
    if (countEl) countEl.innerText = Object.keys(this.receivedVotes).length;

    this.renderHostVotingCandidates();

    const totalPlayers = Object.keys(this.players).length;
    const totalVotes = Object.keys(this.receivedVotes).length;
    if (totalPlayers > 0 && totalVotes >= totalPlayers) {
      console.log('⚡ ¡Todos han votado en la dinámica!');
      this.closeVotingAndReveal();
    }
  }

  closeVotingAndReveal() {
    clearInterval(this.votingTimer);
    sounds.stopTensionMusic();
    sounds.playFanfare();
    this.roomStatus = 'VOTING_RESULTS';

    if (window.confetti) {
      window.confetti({ particleCount: 130, spread: 80, origin: { y: 0.5 } });
    }

    const voteCounts = {};
    this.pollCandidates.forEach(c => voteCounts[c.id] = 0);
    Object.values(this.receivedVotes).forEach(candId => {
      if (voteCounts[candId] !== undefined) voteCounts[candId]++;
    });

    let maxVotes = -1;
    let winner = this.pollCandidates[0];

    this.pollCandidates.forEach(c => {
      const count = voteCounts[c.id] || 0;
      if (count > maxVotes) {
        maxVotes = count;
        winner = c;
      }
    });

    if (this.pollBonusPoints > 0 && this.players[winner.id]) {
      this.players[winner.id].score = (this.players[winner.id].score || 0) + this.pollBonusPoints;
      roomSync.registerPlayer(this.roomPin, winner.id, this.players[winner.id]);
    }

    const winnerCard = document.getElementById('voting-winner-card');
    const winnerName = document.getElementById('voting-winner-name');
    const winnerVotes = document.getElementById('voting-winner-votes');

    winnerName.innerText = `${winner.avatar} ${winner.name}`;
    winnerVotes.innerText = `¡Con ${maxVotes} votos a favor! ${this.pollBonusPoints > 0 ? `(+ ${this.pollBonusPoints} pts acumulados)` : ''}`;
    winnerCard.classList.remove('hidden');

    document.getElementById('voting-status-desc').innerText = '¡Votación finalizada con éxito!';
    document.getElementById('btn-voting-reveal').classList.add('hidden');

    const nextBtn = document.getElementById('btn-voting-next-q');
    const continueBtn = document.getElementById('btn-voting-continue');

    if (this.currentPollIndex + 1 < this.pollQueue.length) {
      if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.innerHTML = `<span>Siguiente Votación (${this.currentPollIndex + 2} de ${this.pollQueue.length})</span> <span>➡️</span>`;
      }
      if (continueBtn) continueBtn.classList.add('hidden');
    } else {
      if (nextBtn) nextBtn.classList.add('hidden');
      if (continueBtn) {
        continueBtn.classList.remove('hidden');
        continueBtn.innerHTML = '<span>➡️</span> Finalizar y Continuar Trivia';
      }
    }

    roomSync.createOrUpdateRoom(this.roomPin, {
      status: 'VOTING_RESULTS',
      winner,
      maxVotes,
      pollIndex: this.currentPollIndex,
      pollTotal: this.pollQueue.length,
      pollQuestion: this.currentPollQuestion
    });
  }

  returnToGameAfterVoting() {
    sounds.playClick();
    if (this.previousStateBeforeVoting === 'QUESTION') {
      this.startQuestion(this.currentQIndex);
    } else if (this.previousStateBeforeVoting === 'LEADERBOARD') {
      this.showLeaderboard();
    } else {
      this.switchView('view-host-lobby');
      roomSync.createOrUpdateRoom(this.roomPin, { status: 'LOBBY' });
    }
  }

  // ==============================================================
  // CUESTIONARIOS PERSONALES CON CLASIFICACIÓN PROPIA
  // ==============================================================

  loadCustomQuestionnaires() {
    try {
      const raw = localStorage.getItem('ws_custom_questionnaires');
      if (raw) {
        this.customQuestionnaires = JSON.parse(raw);
      } else {
        this.customQuestionnaires = [
          {
            id: 'quiz_jovenes_demo',
            title: 'Cuestionario Jóvenes Valientes',
            classification: 'Jóvenes',
            description: 'Preguntas preparadas especialmente para la juventud',
            createdAt: Date.now(),
            questions: [
              {
                id: 'cq_1',
                level: 'CUSTOM',
                category: 'Jóvenes',
                customCategory: 'Jóvenes',
                question: '¿Con qué arma venció el joven David a Goliat en el valle de Ela?',
                options: ['Una espada de bronce', 'Una honda y una piedra lisa', 'Un arco con flechas de fuego', 'Una lanza con punta de hierro'],
                correctAnswer: 1,
                verse: '1 Samuel 17:50',
                explanation: 'Así venció David al filisteo con honda y piedra en el nombre de Jehová de los ejércitos.'
              },
              {
                id: 'cq_2',
                level: 'CUSTOM',
                category: 'Jóvenes',
                customCategory: 'Jóvenes',
                question: '¿Qué joven profeta respondió a Dios en la noche: "Habla, porque tu siervo oye"?',
                options: ['Samuel', 'Jeremías', 'Daniel', 'Josías'],
                correctAnswer: 0,
                verse: '1 Samuel 3:10',
                explanation: 'Samuel escuchó el llamado de Dios en el santuario de Silo.'
              },
              {
                id: 'cq_3',
                level: 'CUSTOM',
                category: 'Jóvenes',
                customCategory: 'Jóvenes',
                question: '¿A qué joven apóstol le escribió Pablo: "Ninguno tenga en poco tu juventud, sino sé ejemplo"?',
                options: ['Tito', 'Timoteo', 'Lucas', 'Onésimo'],
                correctAnswer: 1,
                verse: '1 Timoteo 4:12',
                explanation: 'Pablo aconsejó a Timoteo a ser ejemplo en palabra, conducta, amor, fe y pureza.'
              }
            ]
          }
        ];
        this.saveCustomQuestionnaires();
      }

      if (this.customQuestionnaires.length > 0) {
        this.selectedCustomQuizId = this.customQuestionnaires[0].id;
      }
    } catch (e) {
      console.warn('Error cargando cuestionarios personales:', e);
      this.customQuestionnaires = [];
    }
  }

  saveCustomQuestionnaires() {
    try {
      localStorage.setItem('ws_custom_questionnaires', JSON.stringify(this.customQuestionnaires));
    } catch (e) {
      console.error('Error guardando cuestionarios personales:', e);
    }
  }

  openCustomQuizModal() {
    sounds.playClick();
    document.getElementById('modal-custom-quiz')?.classList.remove('hidden');
    this.switchCustomQuizTab('LIST');
    this.renderCustomQuizList();
  }

  closeCustomQuizModal() {
    sounds.playClick();
    document.getElementById('modal-custom-quiz')?.classList.add('hidden');
    this.populateCustomQuizSelect();
  }

  switchCustomQuizTab(tab) {
    sounds.playClick();
    ['LIST', 'CREATE', 'ADD_Q'].forEach(t => {
      const btn = document.getElementById(`cqtab-${t}`);
      const view = document.getElementById(`cq-view-${t === 'LIST' ? 'list' : t === 'CREATE' ? 'create' : 'add-q'}`);
      if (btn) {
        if (t === tab) {
          btn.className = 'px-3.5 py-1.5 rounded-xl bg-purple-600 text-white font-bold transition';
        } else {
          btn.className = 'px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition';
        }
      }
      if (view) {
        if (t === tab) view.classList.remove('hidden');
        else view.classList.add('hidden');
      }
    });

    if (tab === 'LIST') this.renderCustomQuizList();
  }

  renderCustomQuizList() {
    const container = document.getElementById('cq-list-container');
    if (!container) return;

    if (this.customQuestionnaires.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
          <span class="text-4xl block mb-2">⭐</span>
          <h4 class="font-bold text-white text-base">Aún no has creado ningún cuestionario personal</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Crea cuestionarios temáticos con tu propia clasificación (ej. Jóvenes, Retiro, Campamento, etc.).</p>
          <button onclick="app.switchCustomQuizTab('CREATE')" class="btn-3d mt-4 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl">
            ➕ Crear mi primer cuestionario
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = this.customQuestionnaires.map((quiz, idx) => `
      <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-purple-900/80 text-purple-200 border border-purple-500/50 px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
              ⭐ ${quiz.classification || 'Personal'}
            </span>
            <span class="text-xs text-slate-400 font-medium">${(quiz.questions || []).length} preguntas</span>
          </div>
          <h4 class="font-black text-white text-base">${quiz.title}</h4>
          ${quiz.description ? `<p class="text-xs text-slate-300 mt-0.5">${quiz.description}</p>` : ''}
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button onclick="app.editCustomQuiz('${quiz.id}')" class="btn-3d px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-bold flex items-center gap-1" title="Ver y agregar preguntas">
            <span>✏️</span> Preguntas (${(quiz.questions || []).length})
          </button>
          <button onclick="app.selectCustomQuizForGame('${quiz.id}')" class="btn-3d px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white rounded-xl text-xs font-black glow-gold flex items-center gap-1" title="Jugar con este cuestionario">
            <span>▶️</span> Jugar
          </button>
          <button onclick="app.deleteCustomQuiz('${quiz.id}')" class="p-1.5 text-slate-400 hover:text-red-400 rounded-lg text-sm" title="Eliminar cuestionario">
            🗑️
          </button>
        </div>
      </div>
    `).join('');
  }

  saveNewCustomQuiz() {
    const title = document.getElementById('cq-input-title')?.value.trim();
    const classification = document.getElementById('cq-input-classification')?.value.trim();
    const desc = document.getElementById('cq-input-desc')?.value.trim();

    if (!title || !classification) {
      alert('Por favor escribe el título y tu clasificación personal.');
      return;
    }

    const newQuiz = {
      id: 'quiz_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      title,
      classification,
      description: desc,
      createdAt: Date.now(),
      questions: []
    };

    this.customQuestionnaires.unshift(newQuiz);
    this.saveCustomQuestionnaires();
    this.populateCustomQuizSelect();

    document.getElementById('cq-input-title').value = '';
    document.getElementById('cq-input-classification').value = '';
    document.getElementById('cq-input-desc').value = '';

    this.editCustomQuiz(newQuiz.id);
  }

  editCustomQuiz(id) {
    const quiz = this.customQuestionnaires.find(q => q.id === id);
    if (!quiz) return;

    this.activeEditingQuizId = id;
    const addQTab = document.getElementById('cqtab-ADD_Q');
    if (addQTab) addQTab.classList.remove('hidden');

    document.getElementById('cq-active-title').innerText = quiz.title;
    document.getElementById('cq-active-classification').innerText = `⭐ Clasificación Propia: ${quiz.classification}`;

    this.switchCustomQuizTab('ADD_Q');
    this.renderActiveQuizQuestions();
  }

  saveQuestionToActiveQuiz() {
    const quiz = this.customQuestionnaires.find(q => q.id === this.activeEditingQuizId);
    if (!quiz) return;

    const qText = document.getElementById('cq-q-text')?.value.trim();
    const opt0 = document.getElementById('cq-opt-0')?.value.trim();
    const opt1 = document.getElementById('cq-opt-1')?.value.trim();
    const opt2 = document.getElementById('cq-opt-2')?.value.trim();
    const opt3 = document.getElementById('cq-opt-3')?.value.trim();
    const correctVal = document.querySelector('input[name="cq-correct-opt"]:checked')?.value || '0';
    const verse = document.getElementById('cq-q-verse')?.value.trim() || 'Cuestionario Personal';
    const explanation = document.getElementById('cq-q-explanation')?.value.trim() || 'Pregunta personalizada del anfitrión.';

    if (!qText || !opt0 || !opt1) {
      alert('Por favor escribe la pregunta y al menos dos opciones.');
      return;
    }

    const options = [opt0, opt1];
    if (opt2) options.push(opt2);
    if (opt3) options.push(opt3);

    const newQ = {
      id: `cq_${Date.now()}_` + Math.random().toString(36).substring(2, 6),
      level: 'CUSTOM',
      category: quiz.classification || 'Personal',
      customCategory: quiz.classification || 'Personal',
      type: options.length === 2 ? 'TRUE_FALSE' : 'MULTIPLE_CHOICE',
      question: qText,
      options,
      correctAnswer: Math.min(options.length - 1, parseInt(correctVal) || 0),
      verse,
      explanation
    };

    if (!quiz.questions) quiz.questions = [];
    quiz.questions.push(newQ);
    this.saveCustomQuestionnaires();

    document.getElementById('cq-q-text').value = '';
    document.getElementById('cq-opt-0').value = '';
    document.getElementById('cq-opt-1').value = '';
    document.getElementById('cq-opt-2').value = '';
    document.getElementById('cq-opt-3').value = '';
    document.getElementById('cq-q-verse').value = '';
    document.getElementById('cq-q-explanation').value = '';

    sounds.playCorrect();
    this.renderActiveQuizQuestions();
    this.populateCustomQuizSelect();
  }

  renderActiveQuizQuestions() {
    const list = document.getElementById('cq-active-questions-list');
    const quiz = this.customQuestionnaires.find(q => q.id === this.activeEditingQuizId);
    if (!list || !quiz) return;

    if (!quiz.questions || quiz.questions.length === 0) {
      list.innerHTML = '<span class="text-slate-400 italic text-[11px]">Aún no hay preguntas agregadas a este cuestionario.</span>';
      return;
    }

    list.innerHTML = quiz.questions.map((q, idx) => `
      <div class="bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-xs space-y-1 relative">
        <div class="flex items-center justify-between">
          <span class="font-bold text-amber-300">#${idx + 1}. ${q.question}</span>
          <button onclick="app.deleteQuestionFromQuiz('${q.id}')" class="text-slate-400 hover:text-red-400 p-1 text-sm leading-none" title="Eliminar pregunta">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-1 text-[11px] pt-1">
          ${q.options.map((opt, oIdx) => `
            <span class="${oIdx === q.correctAnswer ? 'text-emerald-300 font-bold' : 'text-slate-400'}">
              ${oIdx === q.correctAnswer ? '✓ ' : '• '}${opt}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  deleteQuestionFromQuiz(qId) {
    const quiz = this.customQuestionnaires.find(q => q.id === this.activeEditingQuizId);
    if (!quiz) return;
    quiz.questions = quiz.questions.filter(q => q.id !== qId);
    this.saveCustomQuestionnaires();
    this.renderActiveQuizQuestions();
    this.populateCustomQuizSelect();
  }

  deleteCustomQuiz(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar este cuestionario personal?')) return;
    this.customQuestionnaires = this.customQuestionnaires.filter(q => q.id !== id);
    this.saveCustomQuestionnaires();
    this.renderCustomQuizList();
    this.populateCustomQuizSelect();
  }

  populateCustomQuizSelect() {
    const select = document.getElementById('setup-custom-quiz-select');
    const info = document.getElementById('setup-custom-quiz-info');
    if (!select) return;

    if (this.customQuestionnaires.length === 0) {
      select.innerHTML = '<option value="">(No has creado cuestionarios aún)</option>';
      if (info) info.innerText = 'Crea uno con el botón "➕ Crear / Gestionar"';
      return;
    }

    select.innerHTML = this.customQuestionnaires.map(q => `
      <option value="${q.id}" ${q.id === this.selectedCustomQuizId ? 'selected' : ''}>
        ⭐ [${q.classification}] ${q.title} (${(q.questions || []).length} preguntas)
      </option>
    `).join('');

    const current = this.customQuestionnaires.find(q => q.id === this.selectedCustomQuizId) || this.customQuestionnaires[0];
    if (current && info) {
      this.selectedCustomQuizId = current.id;
      info.innerText = `Clasificación propia: "${current.classification}" • ${(current.questions || []).length} preguntas disponibles`;
    }
  }

  handleCustomQuizSelect(quizId) {
    this.selectedCustomQuizId = quizId;
    const current = this.customQuestionnaires.find(q => q.id === quizId);
    const info = document.getElementById('setup-custom-quiz-info');
    if (current && info) {
      info.innerText = `Clasificación propia: "${current.classification}" • ${(current.questions || []).length} preguntas disponibles`;
    }
  }

  selectCustomQuizForGame(quizId) {
    this.selectedCustomQuizId = quizId;
    this.closeCustomQuizModal();
    this.startHostSetup();
    this.selectDifficulty('CUSTOM');
    this.handleCustomQuizSelect(quizId);
  }

  // ==============================================================
  // FLUJO DEL JUGADOR (MÓVIL / SMARTPHONE)
  // ==============================================================

  startPlayerJoin() {
    sounds.playClick();
    this.isHost = false;
    this.myScore = 0;
    this.myStreak = 0;
    this.maxStreak = 0;
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
    this.myScore = 0;
    this.myStreak = 0;
    this.maxStreak = 0;
    roomSync.currentPin = pin;

    this.savePlayerSession();

    this.switchView('view-player-lobby');
    document.getElementById('player-my-name').innerText = name;
    document.getElementById('player-my-avatar').innerText = this.myAvatar;
    document.getElementById('player-my-team-badge').innerText = this.myTeam === 'A' ? 'Equipo Hombres 🦁' : 'Equipo Mujeres 👑';

    roomSync.registerPlayer(this.roomPin, this.myPlayerId, {
      name: this.myPlayerName,
      avatar: this.myAvatar,
      team: this.myTeam,
      score: 0,
      streak: 0
    });

    this.startListeningAsPlayer(this.roomPin);
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
        maxStreak: this.maxStreak,
        updatedAt: Date.now()
      }));
    } catch (e) {}
  }

  startListeningAsPlayer(pin) {
    roomSync.listenToRoomState(pin, (roomData) => {
      this.handlePlayerRoomUpdate(roomData);
    });
  }

  handlePlayerRoomUpdate(roomData) {
    if (this.isHost || !roomData || !roomData.status) return;
    console.log('📱 Actualización recibida en celular:', roomData.status);

    // 1. Estado: PREGUNTA DE TRIVIA ACTIVA
    if (roomData.status === 'QUESTION') {
      const qIndex = roomData.currentQuestionIndex ?? 0;

      // Al iniciar la primera pregunta de una nueva partida, forzar puntaje en 0
      if (qIndex === 0 && this.currentQIndex !== 0) {
        this.myScore = 0;
        this.myStreak = 0;
        this.maxStreak = 0;
        const scoreEl = document.getElementById('player-game-score');
        if (scoreEl) scoreEl.innerText = '0';
        this.savePlayerSession();
      }

      if (this.currentQIndex !== qIndex || this.currentView !== 'view-player-game') {
        this.currentQIndex = qIndex;
        this.hasAnsweredCurrent = false;
        this.qStartTime = roomData.qStartTime || Date.now();

        this.switchView('view-player-game');

        document.getElementById('player-game-name').innerText = this.myPlayerName;
        document.getElementById('player-game-avatar').innerText = this.myAvatar;
        document.getElementById('player-game-score').innerText = this.myScore;

        document.getElementById('player-buttons-grid').classList.remove('hidden');
        document.getElementById('player-waiting-state').classList.add('hidden');
        document.getElementById('player-feedback-panel').classList.add('hidden');

        if (roomData.options && roomData.options.length === 2) {
          document.getElementById('btn-answer-2')?.classList.add('hidden');
          document.getElementById('btn-answer-3')?.classList.add('hidden');
          document.getElementById('player-btn-label-0').innerText = 'Verdadero';
          document.getElementById('player-btn-label-1').innerText = 'Falso';
        } else {
          document.getElementById('btn-answer-2')?.classList.remove('hidden');
          document.getElementById('btn-answer-3')?.classList.remove('hidden');
          document.getElementById('player-btn-label-0').innerText = 'Rojo';
          document.getElementById('player-btn-label-1').innerText = 'Azul';
          document.getElementById('player-btn-label-2').innerText = 'Amarillo';
          document.getElementById('player-btn-label-3').innerText = 'Verde';
        }
      }
    }

    // 2. Estado: TIEMPO AGOTADO / REVELACIÓN DE TRIVIA
    if (roomData.status === 'TIMES_UP') {
      if (roomData.leaderboard && Array.isArray(roomData.leaderboard)) {
        const myEntry = roomData.leaderboard.find(p => p.id === this.myPlayerId);
        if (myEntry) {
          const prevScore = this.myScore;
          this.myScore = myEntry.score;
          this.myStreak = myEntry.streak;
          if (this.myStreak > this.maxStreak) this.maxStreak = this.myStreak;

          document.getElementById('player-game-score').innerText = this.myScore;
          this.savePlayerSession();

          if (this.hasAnsweredCurrent) {
            const feedback = document.getElementById('player-feedback-panel');
            const title = document.getElementById('player-feedback-title');
            const points = document.getElementById('player-feedback-points');

            feedback.classList.remove('hidden');
            const gained = this.myScore - prevScore;

            if (gained > 0) {
              sounds.playCorrect();
              feedback.className = 'mt-3 p-4 rounded-2xl text-center border-2 border-emerald-500 bg-emerald-950/80 text-emerald-200';
              title.innerText = '¡CORRECTO! 🎉';
              points.innerText = `+${gained} puntos`;
            } else {
              sounds.playWrong();
              feedback.className = 'mt-3 p-4 rounded-2xl text-center border-2 border-red-500 bg-red-950/80 text-red-200';
              title.innerText = '¡CASI! 😅';
              points.innerText = '0 puntos en esta ronda';
            }
          }
        }
      }

      if (!this.hasAnsweredCurrent) {
        document.getElementById('player-buttons-grid').classList.add('hidden');
        const waitingState = document.getElementById('player-waiting-state');
        waitingState.classList.remove('hidden');
        document.getElementById('player-state-title').innerText = '¡Tiempo Agotado!';
        document.getElementById('player-state-desc').innerText = 'Mira la pantalla principal para ver la respuesta correcta y la cita bíblica.';
      }
    }

    // 3. Estado: VOTACIÓN GRUPAL / PREMIO ACTIVO
    if (roomData.status === 'VOTING') {
      this.switchView('view-player-voting');
      document.getElementById('player-voting-question').innerText = roomData.pollQuestion || '¿Quién es el compañero más espiritual?';

      this.hasVotedCurrent = false;
      document.getElementById('player-vote-done-box').classList.add('hidden');
      const listEl = document.getElementById('player-candidates-list');
      listEl.classList.remove('hidden');

      const candidates = roomData.candidates || [];
      listEl.innerHTML = candidates.map(c => `
        <button onclick="app.submitPlayerVote('${c.id}', '${c.name.replace(/'/g, "\\'")}')" class="btn-3d w-full p-3.5 bg-slate-900 hover:bg-slate-800 active:bg-amber-600 border border-slate-700 active:border-amber-400 rounded-2xl flex items-center gap-3 text-left shadow-md transition">
          <span class="text-3xl">${c.avatar}</span>
          <div class="truncate">
            <div class="font-extrabold text-base text-white truncate">${c.name}</div>
            <div class="text-[11px] text-slate-400 font-medium">Toca para votar por este compañero</div>
          </div>
        </button>
      `).join('');
    }

    // 4. Estado: RESULTADOS DE LA VOTACIÓN
    if (roomData.status === 'VOTING_RESULTS') {
      sounds.playFanfare();
      if (window.confetti) window.confetti();

      const doneBox = document.getElementById('player-vote-done-box');
      const choiceText = document.getElementById('player-vote-choice-text');
      const listEl = document.getElementById('player-candidates-list');

      listEl.classList.add('hidden');
      doneBox.classList.remove('hidden');

      const winner = roomData.winner;
      if (winner) {
        choiceText.innerHTML = `👑 ¡El más votado por el grupo fue:<br><strong class="text-lg text-white">${winner.avatar} ${winner.name}</strong> (${roomData.maxVotes} votos)!`;
      }
    }

    // 5. Estado: GRAN PODIO FINAL
    if (roomData.status === 'PODIUM') {
      this.showPlayerPodium(roomData);
    }
  }

  async submitPlayerVote(candidateId, candidateName) {
    if (this.hasVotedCurrent) return;
    this.hasVotedCurrent = true;
    sounds.playClick();

    document.getElementById('player-candidates-list').classList.add('hidden');
    const doneBox = document.getElementById('player-vote-done-box');
    doneBox.classList.remove('hidden');
    document.getElementById('player-vote-choice-text').innerText = `Tu voto fue registrado por: ${candidateName}`;

    await roomSync.submitVote(this.roomPin, this.myPlayerId, {
      candidateId,
      candidateName,
      timestamp: Date.now()
    });
  }

  showPlayerPodium(roomData) {
    sounds.playFanfare();
    if (window.confetti) {
      window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    }

    this.switchView('view-player-podium');

    const leaderboard = roomData.leaderboard || [];
    const myIndex = leaderboard.findIndex(p => p.id === this.myPlayerId);
    const myRank = myIndex !== -1 ? (myIndex + 1) : '-';

    const rankEl = document.getElementById('player-final-rank');
    const scoreEl = document.getElementById('player-final-score');
    const iconEl = document.getElementById('player-final-icon');
    const streakEl = document.getElementById('player-final-streak');

    scoreEl.innerText = `${(this.myScore || 0).toLocaleString()} puntos totales`;
    streakEl.innerText = `Mejor racha de aciertos: ${this.maxStreak || this.myStreak || 0} seguidas`;

    if (myRank === 1) {
      iconEl.innerText = '👑';
      rankEl.innerText = '¡Quedaste en el 1er Lugar! 🥇 CAMPEÓN';
      rankEl.className = 'text-2xl md:text-3xl font-black text-amber-400';
    } else if (myRank === 2) {
      iconEl.innerText = '🥈';
      rankEl.innerText = '¡Quedaste en el 2do Lugar! 🥈';
      rankEl.className = 'text-2xl md:text-3xl font-black text-slate-200';
    } else if (myRank === 3) {
      iconEl.innerText = '🥉';
      rankEl.innerText = '¡Quedaste en el 3er Lugar! 🥉';
      rankEl.className = 'text-2xl md:text-3xl font-black text-amber-600';
    } else if (myRank > 3) {
      iconEl.innerText = '🌟';
      rankEl.innerText = `¡Quedaste en el puesto ${myRank}°! ⭐`;
      rankEl.className = 'text-xl md:text-2xl font-black text-cyan-300';
    } else {
      iconEl.innerText = '🐑';
      rankEl.innerText = '¡Gran esfuerzo en la trivia!';
    }

    const teamBanner = document.getElementById('player-final-team-banner');
    if (roomData.mode === 'TEAMS') {
      teamBanner.classList.remove('hidden');
      const winningTeam = roomData.winningTeam;
      if (winningTeam === this.myTeam) {
        teamBanner.className = 'p-3.5 rounded-2xl text-xs font-bold mb-5 border border-emerald-500 bg-emerald-950/80 text-emerald-200';
        teamBanner.innerHTML = `🎉 ¡Tu equipo (${this.myTeam === 'A' ? '🦁 Hombres' : '👑 Mujeres'}) fue el GANADOR DE LA PARTIDA!`;
      } else if (winningTeam === 'TIE') {
        teamBanner.className = 'p-3.5 rounded-2xl text-xs font-bold mb-5 border border-amber-500 bg-amber-950/80 text-amber-200';
        teamBanner.innerHTML = '🤝 ¡Hubo un empate histórico entre Hombres y Mujeres!';
      } else {
        teamBanner.className = 'p-3.5 rounded-2xl text-xs font-bold mb-5 border border-slate-700 bg-slate-800 text-slate-300';
        teamBanner.innerHTML = `👏 ¡Gran batalla de equipos! El equipo ganador fue ${winningTeam === 'A' ? '🦁 Hombres' : '👑 Mujeres'}.`;
      }
    } else {
      teamBanner.classList.add('hidden');
    }

    // Limpiar sesión guardada para que en el próximo juego empiece desde cero
    try {
      localStorage.removeItem('ws_player_session');
    } catch (e) {}
  }

  async submitPlayerAnswer(answerIndex) {
    if (this.hasAnsweredCurrent) return;
    this.hasAnsweredCurrent = true;
    sounds.playClick();

    const timeTaken = Math.max(0.4, (Date.now() - this.qStartTime) / 1000);

    document.getElementById('player-buttons-grid').classList.add('hidden');
    const waitingState = document.getElementById('player-waiting-state');
    waitingState.classList.remove('hidden');
    document.getElementById('player-state-title').innerText = '¡Respuesta Enviada!';
    document.getElementById('player-state-desc').innerText = 'Esperando a los demás o que termine el tiempo...';

    await roomSync.submitAnswer(this.roomPin, this.myPlayerId, {
      questionIndex: this.currentQIndex,
      answerIndex,
      timeTaken
    });
  }

  // ==============================================================
  // MODALES: BANCO DE PREGUNTAS Y FIREBASE
  // ==============================================================

  showQuestionsModal() {
    sounds.playClick();
    document.getElementById('modal-questions')?.classList.remove('hidden');
    this.questionSearchQuery = '';
    const searchInput = document.getElementById('qsearch-input');
    if (searchInput) searchInput.value = '';
    this.filterQuestionsList('ALL');
  }

  closeQuestionsModal() {
    sounds.playClick();
    document.getElementById('modal-questions')?.classList.add('hidden');
  }

  searchQuestionsList(query) {
    this.questionSearchQuery = (query || '').toLowerCase().trim();
    this.renderQuestionsScroll();
  }

  filterQuestionsList(filter) {
    this.currentQuestionFilter = filter;

    ['ALL', 'EASY', 'MEDIUM', 'HARD', 'CUSTOM'].forEach(f => {
      const btn = document.getElementById(`qfilter-${f}`);
      if (btn) {
        if (f === filter) {
          btn.className = f === 'CUSTOM'
            ? 'px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold transition shrink-0'
            : 'px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold transition shrink-0';
        } else {
          btn.className = f === 'CUSTOM'
            ? 'px-3 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-200 font-bold hover:bg-purple-900 transition shrink-0'
            : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition shrink-0';
        }
      }
    });

    this.renderQuestionsScroll();
  }

  renderQuestionsScroll() {
    const listEl = document.getElementById('modal-questions-scroll');
    const totalEl = document.getElementById('modal-q-total');
    if (!listEl) return;

    let baseItems = [];
    if (this.currentQuestionFilter === 'CUSTOM') {
      this.customQuestionnaires.forEach(quiz => {
        (quiz.questions || []).forEach(q => {
          baseItems.push({
            ...q,
            customQuizTitle: quiz.title,
            customCategory: quiz.classification || 'Personal'
          });
        });
      });
    } else if (this.currentQuestionFilter === 'ALL') {
      baseItems = QUESTIONS_DATABASE;
    } else {
      baseItems = QUESTIONS_DATABASE.filter(q => q.level === this.currentQuestionFilter);
    }

    let items = baseItems;
    if (this.questionSearchQuery) {
      items = items.filter(q =>
        q.question.toLowerCase().includes(this.questionSearchQuery) ||
        (q.category && q.category.toLowerCase().includes(this.questionSearchQuery)) ||
        (q.verse && q.verse.toLowerCase().includes(this.questionSearchQuery)) ||
        (q.explanation && q.explanation.toLowerCase().includes(this.questionSearchQuery)) ||
        (q.customCategory && q.customCategory.toLowerCase().includes(this.questionSearchQuery))
      );
    }

    if (totalEl) totalEl.innerText = items.length;

    if (items.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <span class="text-3xl block mb-2">🔍</span>
          <p class="font-bold">No se encontraron preguntas que coincidan con la búsqueda.</p>
          ${this.currentQuestionFilter === 'CUSTOM' ? '<button onclick="app.openCustomQuizModal()" class="mt-3 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold">➕ Crear preguntas en Cuestionarios Personales</button>' : ''}
        </div>
      `;
      return;
    }

    listEl.innerHTML = items.map((q, idx) => {
      const isCustom = q.level === 'CUSTOM';
      const lvl = isCustom
        ? { name: `⭐ ${q.customCategory || 'Personal'}`, badge: '⭐' }
        : (QUESTION_LEVELS[q.level] || QUESTION_LEVELS.EASY);

      return `
        <div class="bg-slate-800/80 border ${isCustom ? 'border-purple-500/40' : 'border-slate-700/80'} rounded-2xl p-4 text-xs shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="${isCustom ? 'bg-purple-900/80 text-purple-200' : 'bg-slate-700 text-cyan-300'} font-bold px-2 py-0.5 rounded">
              #${idx + 1} - ${q.category || q.customCategory}
            </span>
            <span class="${isCustom ? 'text-purple-300 font-bold' : 'text-amber-300 font-semibold'}">
              ${lvl.badge} ${lvl.name}
            </span>
          </div>
          <p class="font-bold text-sm text-white mb-2 leading-snug">${q.question}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
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
    document.getElementById('modal-settings')?.classList.remove('hidden');
    const apiKey = localStorage.getItem('ws_fb_apiKey') || DEFAULT_FIREBASE_CONFIG.apiKey;
    const appId = localStorage.getItem('ws_fb_appId') || DEFAULT_FIREBASE_CONFIG.appId;
    document.getElementById('cfg-api-key').value = apiKey;
    document.getElementById('cfg-app-id').value = appId;
  }

  closeSettingsModal() {
    sounds.playClick();
    document.getElementById('modal-settings')?.classList.add('hidden');
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
