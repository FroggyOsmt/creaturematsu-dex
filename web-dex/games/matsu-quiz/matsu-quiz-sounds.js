(() => {
  const soundPreferenceKey = "creaturematsu-matsu-quiz-sounds-enabled";
  const soundDefinitions = {
    click: { src: "audio/sfx/click-tin.wav", volume: 0.12, poolSize: 3 },
    fullScore: { src: "audio/sfx/score-pum.wav", volume: 0.17, poolSize: 2 },
    correct: { src: "audio/sfx/correct-bim.wav", volume: 0.15, poolSize: 2 },
    incorrect: { src: "audio/sfx/incorrect-eeh.wav", volume: 0.13, poolSize: 2 },
    hintLight: { src: "audio/sfx/hint-light.wav", volume: 0.13, poolSize: 2 },
    rankStamp: { src: "audio/sfx/rank-tap.wav", volume: 0.15, poolSize: 2 },
    doctorSticker: { src: "audio/sfx/sticker-plap.wav", volume: 0.14, poolSize: 2 },
    capture: { src: "audio/sfx/capture-snap.wav", volume: 0.16, poolSize: 2 }
  };

  const audioContainer = document.createElement("div");
  audioContainer.hidden = true;
  audioContainer.setAttribute("aria-hidden", "true");
  document.body.append(audioContainer);

  const soundPools = Object.fromEntries(
    Object.entries(soundDefinitions).map(([name, definition]) => {
      const pool = Array.from({ length: definition.poolSize }, () => {
        const audio = document.createElement("audio");
        audio.src = definition.src;
        audio.preload = "auto";
        audio.volume = definition.volume;
        audioContainer.append(audio);
        return audio;
      });
      return [name, pool];
    })
  );

  let soundsEnabled = true;
  try {
    soundsEnabled = window.localStorage.getItem(soundPreferenceKey) !== "false";
  } catch (error) {
    soundsEnabled = true;
  }

  const playSound = name => {
    if (!soundsEnabled) return;
    const pool = soundPools[name];
    if (!pool) return;

    const audio = pool.find(candidate => candidate.paused || candidate.ended) || pool[0];
    try {
      audio.currentTime = 0;
    } catch (error) {
      // The sound can still play if its metadata has not finished loading.
    }
    audio.play().catch(() => {});
  };

  const stopSounds = () => {
    Object.values(soundPools).flat().forEach(audio => {
      audio.pause();
      try {
        audio.currentTime = 0;
      } catch (error) {
        // Ignore sounds that have not loaded metadata yet.
      }
    });
  };

  const hintButton = document.getElementById("quizHintButton");
  const scoreMeter = document.getElementById("quizScoreMeter");
  const scoreView = document.getElementById("quizScoreView");
  const captureButton = document.getElementById("quizScoreCapture");
  let fullScoreTimer = 0;
  let rankStampTimer = 0;
  let doctorStickerTimer = 0;

  document.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || button.disabled || button === captureButton) return;
    playSound("click");
  }, { capture: true });

  document.addEventListener("matsuquiz:answer-result", event => {
    window.setTimeout(() => {
      playSound(event.detail?.correct ? "correct" : "incorrect");
    }, 260);
  });

  if (hintButton) {
    let lightWasTurningOn = hintButton.classList.contains("is-turning-on");
    new MutationObserver(() => {
      const isTurningOn = hintButton.classList.contains("is-turning-on");
      if (isTurningOn && !lightWasTurningOn) playSound("hintLight");
      lightWasTurningOn = isTurningOn;
    }).observe(hintButton, { attributes: true, attributeFilter: ["class"] });
  }

  if (scoreMeter) {
    let meterWasComplete = scoreMeter.classList.contains("is-complete");
    new MutationObserver(() => {
      const isComplete = scoreMeter.classList.contains("is-complete");
      window.clearTimeout(fullScoreTimer);
      if (isComplete && !meterWasComplete) {
        fullScoreTimer = window.setTimeout(() => playSound("fullScore"), 540);
      }
      meterWasComplete = isComplete;
    }).observe(scoreMeter, { attributes: true, attributeFilter: ["class"] });
  }

  if (scoreView) {
    let resultWasPresenting = scoreView.classList.contains("is-presenting-result");
    new MutationObserver(() => {
      const isPresenting = scoreView.classList.contains("is-presenting-result");
      window.clearTimeout(rankStampTimer);
      window.clearTimeout(doctorStickerTimer);

      if (isPresenting && !resultWasPresenting) {
        rankStampTimer = window.setTimeout(() => playSound("rankStamp"), 850);
        doctorStickerTimer = window.setTimeout(() => playSound("doctorSticker"), 2040);
      }
      resultWasPresenting = isPresenting;
    }).observe(scoreView, { attributes: true, attributeFilter: ["class"] });
  }

  captureButton?.addEventListener("click", () => {
    window.setTimeout(() => playSound("capture"), 70);
  });

  document.addEventListener("matsuquiz:sound-preference", event => {
    soundsEnabled = event.detail?.enabled !== false;
    if (soundsEnabled) playSound("click");
    else stopSounds();
  });

  window.addEventListener("pagehide", () => {
    window.clearTimeout(fullScoreTimer);
    window.clearTimeout(rankStampTimer);
    window.clearTimeout(doctorStickerTimer);
    stopSounds();
  });

  window.MATSU_QUIZ_SOUNDS = {
    play: playSound,
    isEnabled: () => soundsEnabled
  };
})();
