// WISE SHEEP - Firebase Realtime Synchronization & Room Management
// Proyecto Firebase: wise-sheep

export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: localStorage.getItem('ws_fb_apiKey') || '',
  authDomain: 'wise-sheep.firebaseapp.com',
  projectId: 'wise-sheep',
  storageBucket: 'wise-sheep.appspot.com',
  messagingSenderId: localStorage.getItem('ws_fb_senderId') || '',
  appId: localStorage.getItem('ws_fb_appId') || ''
};

export class RoomManager {
  constructor() {
    this.channel = null;
    this.currentPin = null;
    this.listeners = [];
    this.isHost = false;
    this.playerId = localStorage.getItem('ws_player_id') || ('player_' + Math.random().toString(36).substring(2, 9));
    localStorage.setItem('ws_player_id', this.playerId);
    
    // BroadcastChannel local para sincronizar pestañas en la misma máquina al instante
    if (typeof BroadcastChannel !== 'undefined') {
      this.channel = new BroadcastChannel('wise_sheep_rooms');
      this.channel.onmessage = (event) => this.handleLocalMessage(event.data);
    }
  }

  // Genera un código PIN aleatorio de 4 a 5 dígitos
  generatePin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  // Escuchar eventos de la sala
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

  // Emitir evento a través de red local / BroadcastChannel y guardar en localStorage
  broadcast(action, payload) {
    const data = {
      pin: this.currentPin,
      action,
      payload,
      timestamp: Date.now()
    };

    // Actualizar copia en localStorage para persistencia
    const roomKey = `ws_room_${this.currentPin}`;
    const existing = JSON.parse(localStorage.getItem(roomKey) || '{}');
    const updated = { ...existing, ...payload, lastAction: action, updatedAt: Date.now() };
    localStorage.setItem(roomKey, JSON.stringify(updated));

    if (this.channel) {
      this.channel.postMessage(data);
    }
    this.notify(data);

    // Si Firebase está configurado, sincronizar con Firestore
    if (window.firebaseFirestore && this.currentPin) {
      try {
        const db = window.firebaseFirestore;
        const { doc, setDoc } = window.firebaseFirestoreModule;
        setDoc(doc(db, 'rooms', this.currentPin), updated, { merge: true });
      } catch (e) {
        console.warn('Error sincronizando con Firestore:', e);
      }
    }
  }

  // Inicializar Firebase si el usuario tiene las credenciales configuradas
  async initFirebase(config) {
    if (!config || !config.apiKey) return false;
    try {
      if (window.firebaseApp) return true;
      const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js');
      const { getFirestore, doc, onSnapshot, setDoc } = await import('https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js');
      
      window.firebaseApp = initializeApp(config);
      window.firebaseFirestore = getFirestore(window.firebaseApp);
      window.firebaseFirestoreModule = { doc, onSnapshot, setDoc };
      return true;
    } catch (err) {
      console.warn('Firebase no inicializado aún:', err.message);
      return false;
    }
  }

  // Conectar escucha en Firestore para salas en línea remotas
  listenToOnlineRoom(pin) {
    this.currentPin = pin;
    if (window.firebaseFirestore && window.firebaseFirestoreModule) {
      const { doc, onSnapshot } = window.firebaseFirestoreModule;
      return onSnapshot(doc(window.firebaseFirestore, 'rooms', pin), (docSnap) => {
        if (docSnap.exists()) {
          const roomData = docSnap.data();
          this.notify({
            pin,
            action: roomData.lastAction || 'UPDATE',
            payload: roomData,
            timestamp: roomData.updatedAt || Date.now()
          });
        }
      });
    }
    return null;
  }
}

export const roomSync = new RoomManager();
