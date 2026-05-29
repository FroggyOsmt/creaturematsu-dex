// CREATUREMATSU DEX - AUDIO SYSTEM
// Intenta autoaudio al abrir.
// Si el navegador bloquea, el primer click/tap activa la BGM.
// Click normal de botones/cards reproduce sonido corto.

let cmatsuAudioStarted = false;
let cmatsuBGM = null;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  return audioCtx;
}

function createBGM() {
  if (cmatsuBGM) return;

  cmatsuBGM = new Audio("audio/bgm.mp3");
  cmatsuBGM.loop = true;
  cmatsuBGM.volume = 0.12;
  cmatsuBGM.preload = "auto";
}

function initCreatureMatsuAudio() {
  createBGM();

  if (cmatsuAudioStarted && !cmatsuBGM.paused) return;

  cmatsuBGM.play()
    .then(() => {
      cmatsuAudioStarted = true;
      console.log("BGM started.");
    })
    .catch((error) => {
      cmatsuAudioStarted = false;
      console.log("BGM autoplay blocked, waiting for first click:", error);
    });
}

function playButtonClickSound() {
  const ctx = getAudioContext();

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = 500;

  gain.gain.setValueAtTime(0.032, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}

document.addEventListener("DOMContentLoaded", () => {
  createBGM();

  // Intenta autoaudio al abrir
  initCreatureMatsuAudio();

  // Si autoplay fue bloqueado, el primer click/tap intenta iniciar BGM
  window.addEventListener("pointerdown", () => {
    initCreatureMatsuAudio();
  }, {
    once: true,
    capture: true
  });

  // También sirve con teclado
  window.addEventListener("keydown", () => {
    initCreatureMatsuAudio();
  }, {
    once: true,
    capture: true
  });

  // Sonido corto de botones/cards
  document.addEventListener("click", (event) => {
    const el = event.target.closest("button, .card, .left-social-btn");

    if (!el) return;

    playButtonClickSound();
  });
});