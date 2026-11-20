// WISE SHEEP Web Audio Synthesizer Engine
// Genera sonidos dinámicos sin necesidad de archivos externos pesados

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopTensionMusic();
    }
    return this.isMuted;
  }

  // Sonido de clic / selección de botón
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Sonido de cuenta regresiva (tick)
  playTick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // Sonido de Respuesta Correcta (Arpegio celestial brillante)
  playCorrect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (idx * 0.08));

      gain.gain.setValueAtTime(0, this.ctx.currentTime + (idx * 0.08));
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + (idx * 0.08) + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (idx * 0.08) + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + (idx * 0.08));
      osc.stop(this.ctx.currentTime + (idx * 0.08) + 0.4);
    });
  }

  // Sonido de Respuesta Incorrecta / Tiempo agotado
  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [311.13, 277.18, 233.08]; // Eb4, Db4, Bb3
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (idx * 0.12));

      gain.gain.setValueAtTime(0, this.ctx.currentTime + (idx * 0.12));
      gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + (idx * 0.12) + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (idx * 0.12) + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + (idx * 0.12));
      osc.stop(this.ctx.currentTime + (idx * 0.12) + 0.35);
    });
  }

  // Fanfarria de Victoria / Podio
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, d: 0.15, t: 0.00 }, // C5
      { f: 523.25, d: 0.15, t: 0.18 }, // C5
      { f: 523.25, d: 0.15, t: 0.36 }, // C5
      { f: 659.25, d: 0.25, t: 0.54 }, // E5
      { f: 783.99, d: 0.25, t: 0.82 }, // G5
      { f: 1046.50, d: 0.60, t: 1.10 } // C6
    ];

    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, this.ctx.currentTime + note.t);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + note.t);
      gain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + note.t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + note.t + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + note.t);
      osc.stop(this.ctx.currentTime + note.t + note.d);
    });
  }

  // Música rítmica de suspenso durante la pregunta (estilo Kahoot)
  startTensionMusic() {
    if (this.isMuted) return;
    this.init();
    this.stopTensionMusic();

    let step = 0;
    const bassline = [130.81, 146.83, 164.81, 174.61]; // C3, D3, E3, F3

    this.bgInterval = setInterval(() => {
      if (this.isMuted || !this.ctx) return;
      const freq = bassline[step % bassline.length];
      step++;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    }, 450);
  }

  stopTensionMusic() {
    if (this.bgInterval) {
      clearInterval(this.bgInterval);
      this.bgInterval = null;
    }
  }
}

export const sounds = new SoundEngine();
