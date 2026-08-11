// CREATUREMATSU DEX - AUDIO SYSTEM
// Intenta autoaudio al abrir.
// Si el navegador bloquea, el primer click/tap activa la BGM.
// Click normal de botones/cards reproduce sonido corto.

let cmatsuAudioStarted = false;
let cmatsuBGM = null;
let audioCtx = null;

const CMATSU_BGM_STATE_KEY = "cmatsu-bgm-position";
const cmatsuAudioScriptURL =
  document.currentScript?.src || "";

const cmatsuBGMURL = cmatsuAudioScriptURL
  ? new URL("../audio/bgm.mp3", cmatsuAudioScriptURL).href
  : new URL("audio/bgm.mp3", document.baseURI).href;

let cmatsuResumeTime = readSavedBGMTime();

function readSavedBGMTime() {
  try {
    const rawState =
      sessionStorage.getItem(CMATSU_BGM_STATE_KEY);

    if (!rawState) return null;

    const state = JSON.parse(rawState);
    const savedTime = Number(state.currentTime);
    const savedAt = Number(state.savedAt);

    if (!Number.isFinite(savedTime)) return null;

    const elapsed = Number.isFinite(savedAt)
      ? Math.max(0, (Date.now() - savedAt) / 1000)
      : 0;

    return savedTime + elapsed;
  } catch (error) {
    console.log("BGM position could not be restored:", error);
    return null;
  }
}

function saveBGMTime() {
  if (
    !cmatsuBGM ||
    !Number.isFinite(cmatsuBGM.currentTime)
  ) {
    return;
  }

  try {
    sessionStorage.setItem(
      CMATSU_BGM_STATE_KEY,
      JSON.stringify({
        currentTime: cmatsuBGM.currentTime,
        savedAt: Date.now()
      })
    );
  } catch (error) {
    console.log("BGM position could not be saved:", error);
  }
}

function restoreBGMTime() {
  if (
    !cmatsuBGM ||
    !Number.isFinite(cmatsuResumeTime)
  ) {
    return;
  }

  const targetTime = cmatsuResumeTime;

  const applyTime = () => {
    const duration = cmatsuBGM.duration;

    cmatsuBGM.currentTime =
      Number.isFinite(duration) && duration > 0
        ? targetTime % duration
        : targetTime;

    cmatsuResumeTime = null;
  };

  if (cmatsuBGM.readyState >= 1) {
    applyTime();
    return;
  }

  try {
    cmatsuBGM.currentTime = targetTime;
  } catch (error) {
    console.log("BGM is waiting for metadata:", error);
  }

  cmatsuBGM.addEventListener(
    "loadedmetadata",
    applyTime,
    {
      once: true
    }
  );
}

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  return audioCtx;
}

function createBGM() {
  if (cmatsuBGM) return;

  cmatsuBGM = new Audio(cmatsuBGMURL);
  cmatsuBGM.loop = true;
  cmatsuBGM.volume = 0.12;
  cmatsuBGM.preload = "auto";

  restoreBGMTime();
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

window.addEventListener(
  "pagehide",
  saveBGMTime
);
