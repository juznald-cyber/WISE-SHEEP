// WISE SHEEP - Firebase Realtime Synchronization & Room Management
// Proyecto Firebase: wise-sheep

export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDETtxtniKFllnQy602q_PsrezWt0cpcps",
  authDomain: "wise-sheep.firebaseapp.com",
  projectId: "wise-sheep",
  storageBucket: "wise-sheep.firebasestorage.app",
  messagingSenderId: "1020836902632",
  appId: "1:1020836902632:web:96f335a9d998685958bb5d",
  measurementId: "G-S893RM5RS6"
};

export class RoomManager {
  constructor() {
    this.channel = null;
    this.currentPin = null;
    this.listeners = [];
    this.isHost = false;
    this.playerId = localStorage.getItem('ws_player_id') || ('player_' + Math.random().toString(36).substring(2, 9));
    localStorage.setItem('ws_player_id', this.playerId);

    this.unsubRoom = null;
    this.unsubPlayers = null;
    this.unsubAnswers = null;
    this.unsubVotes = null;

    // BroadcastChannel local para pruebas en la misma máquina
    if (typeof BroadcastChannel !== 'undefined') {
      this.channel = new BroadcastChannel('wise_sheep_rooms');
      this.channel.onmessage = (event) => this.handleLocalMessage(event.data);
    }

    // Inicializar Firebase automáticamente
    this.initFirebase(DEFAULT_FIREBASE_CONFIG);
  }

  generatePin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify(data) {
    this.listeners.forEach(cb => cb(data));
  }

  handleLocalMessage(msg) {
    if (!msg || msg.pin !== this.currentPin) return;
    this.notify(msg);
  }

  async initFirebase(config) {
    if (!config || !config.apiKey) return false;
    try {
      if (window.firebaseApp && window.firebaseFirestore) return true;
      const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js');
      const { 
        getFirestore, 
        doc, 
        collection, 
        setDoc, 
        updateDoc, 
        onSnapshot, 
        getDocs,
        deleteDoc 
      } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js');

      window.firebaseApp = initializeApp(config);
      window.firebaseFirestore = getFirestore(window.firebaseApp);
      window.firebaseFirestoreModule = { 
        doc, 
        collection, 
        setDoc, 
        updateDoc, 
        onSnapshot, 
        getDocs,
        deleteDoc 
      };
      console.log('🔥 Firebase conectado exitosamente a Firestore (wise-sheep)');
      return true;
    } catch (err) {
      console.warn('Firebase no pudo inicializar aún:', err.message);
      return false;
    }
  }

  // ==============================================================
  // MÉTODOS DEL ANFITRIÓN (HOST)
  // ==============================================================

  async createOrUpdateRoom(pin, roomData) {
    this.currentPin = pin;
    const data = {
      ...roomData,
      pin,
      updatedAt: Date.now()
    };

    localStorage.setItem(`ws_room_${pin}`, JSON.stringify(data));
    if (this.channel) {
      this.channel.postMessage({ pin, action: 'ROOM_UPDATE', payload: data });
    }

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      try {
        const db = window.firebaseFirestore;
        const { doc, setDoc } = window.firebaseFirestoreModule;
        await setDoc(doc(db, 'rooms', pin), data, { merge: true });
      } catch (err) {
        console.error('Error guardando sala en Firestore:', err);
      }
    }
  }

  listenToPlayers(pin, onPlayersUpdate) {
    this.currentPin = pin;
    if (this.unsubPlayers) this.unsubPlayers();

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      const db = window.firebaseFirestore;
      const { collection, onSnapshot } = window.firebaseFirestoreModule;
      this.unsubPlayers = onSnapshot(collection(db, 'rooms', pin, 'players'), (snapshot) => {
        const players = {};
        snapshot.forEach(docSnap => {
          players[docSnap.id] = docSnap.data();
        });
        onPlayersUpdate(players);
      }, (err) => {
        console.warn('Error escuchando jugadores:', err);
      });
    }
  }

  listenToAnswers(pin, onAnswerReceived) {
    this.currentPin = pin;
    if (this.unsubAnswers) this.unsubAnswers();

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      const db = window.firebaseFirestore;
      const { collection, onSnapshot } = window.firebaseFirestoreModule;
      this.unsubAnswers = onSnapshot(collection(db, 'rooms', pin, 'answers'), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added' || change.type === 'modified') {
            const answerData = change.doc.data();
            onAnswerReceived(change.doc.id, answerData);
          }
        });
      }, (err) => {
        console.warn('Error escuchando respuestas:', err);
      });
    }
  }

  // El anfitrión escucha las votaciones en vivo
  listenToVotes(pin, onVoteReceived) {
    this.currentPin = pin;
    if (this.unsubVotes) this.unsubVotes();

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      const db = window.firebaseFirestore;
      const { collection, onSnapshot } = window.firebaseFirestoreModule;
      this.unsubVotes = onSnapshot(collection(db, 'rooms', pin, 'votes'), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added' || change.type === 'modified') {
            const voteData = change.doc.data();
            onVoteReceived(change.doc.id, voteData);
          }
        });
      }, (err) => {
        console.warn('Error escuchando votos:', err);
      });
    }
  }

  // ==============================================================
  // MÉTODOS DEL JUGADOR (PLAYER)
  // ==============================================================

  listenToRoomState(pin, onStateChange) {
    this.currentPin = pin;
    if (this.unsubRoom) this.unsubRoom();

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      const db = window.firebaseFirestore;
      const { doc, onSnapshot } = window.firebaseFirestoreModule;
      this.unsubRoom = onSnapshot(doc(db, 'rooms', pin), (docSnap) => {
        if (docSnap.exists()) {
          const roomData = docSnap.data();
          onStateChange(roomData);
        }
      }, (err) => {
        console.warn('Error escuchando estado de sala:', err);
      });
    }
  }

  async registerPlayer(pin, playerId, playerData) {
    this.currentPin = pin;
    const data = {
      ...playerData,
      playerId,
      updatedAt: Date.now()
    };

    if (this.channel) {
      this.channel.postMessage({ pin, action: 'PLAYER_JOINED', payload: data });
    }

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      try {
        const db = window.firebaseFirestore;
        const { doc, setDoc } = window.firebaseFirestoreModule;
        await setDoc(doc(db, 'rooms', pin, 'players', playerId), data, { merge: true });
        console.log(`Jugador ${playerData.name} registrado en Firestore rooms/${pin}/players/${playerId}`);
      } catch (err) {
        console.error('Error registrando jugador en Firestore:', err);
      }
    }
  }

  async submitAnswer(pin, playerId, answerData) {
    this.currentPin = pin;
    const data = {
      ...answerData,
      playerId,
      timestamp: Date.now()
    };

    if (this.channel) {
      this.channel.postMessage({ pin, action: 'SUBMIT_ANSWER', payload: data });
    }

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      try {
        const db = window.firebaseFirestore;
        const { doc, setDoc } = window.firebaseFirestoreModule;
        await setDoc(doc(db, 'rooms', pin, 'answers', playerId), data);
        console.log(`Respuesta enviada a Firestore para jugador ${playerId}:`, data);
        return true;
      } catch (err) {
        console.error('Error enviando respuesta a Firestore:', err);
        return false;
      }
    }
    return true;
  }

  // Enviar voto de la dinámica / encuesta
  async submitVote(pin, playerId, voteData) {
    this.currentPin = pin;
    const data = {
      ...voteData,
      playerId,
      timestamp: Date.now()
    };

    if (this.channel) {
      this.channel.postMessage({ pin, action: 'SUBMIT_VOTE', payload: data });
    }

    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      try {
        const db = window.firebaseFirestore;
        const { doc, setDoc } = window.firebaseFirestoreModule;
        await setDoc(doc(db, 'rooms', pin, 'votes', playerId), data);
        console.log(`Voto registrado en Firestore para jugador ${playerId}:`, data);
        return true;
      } catch (err) {
        console.error('Error enviando voto a Firestore:', err);
        return false;
      }
    }
    return true;
  }
}

export const roomSync = new RoomManager();
