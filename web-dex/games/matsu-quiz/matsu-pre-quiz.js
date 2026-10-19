(() => {
  const quizCard = document.getElementById("quizCard");
  const introView = document.getElementById("quizIntro");
  const startButton = document.getElementById("quizStartButton");
  const retryCountdown = document.getElementById("quizRetryCountdown");
  const introResumeActions = document.getElementById("quizIntroResumeActions");
  const introCapture = document.getElementById("quizIntroCapture");
  const introHome = document.getElementById("quizIntroHome");
  const quizHeader = document.getElementById("quizHeader");
  const questionView = document.getElementById("quizQuestionView");
  const callButton = document.getElementById("quizNextButton");
  const answerResultView = document.getElementById("quizResult");
  const answerResultNext = document.getElementById("quizResultNext");
  const scoreView = document.getElementById("quizScoreView");
  const scoreMeter = document.getElementById("quizScoreMeter");
  const scoreFill = document.getElementById("quizScoreFill");
  const scoreCelebration = document.getElementById("quizScoreCelebration");
  const scorePercentage = document.getElementById("quizScorePercentage");
  const scoreResult = document.getElementById("quizScoreResult");
  const scoreRank = document.getElementById("quizScoreRank");
  const scoreRankSeal = document.getElementById("quizScoreRankSeal");
  const scoreMessage = document.getElementById("quizScoreMessage");
  const scoreDoctorSticker = document.getElementById("quizScoreDoctorSticker");
  const scoreTryAgain = document.getElementById("quizScoreTryAgain");
  const scoreCapture = document.getElementById("quizScoreCapture");
  const scoreTestAdjust = document.getElementById("quizScoreTestAdjust");
  const scoreTestMinus = document.getElementById("quizScoreTestMinus");
  const scoreTestPlus = document.getElementById("quizScoreTestPlus");
  const capturePreviewModal = document.getElementById("quizCapturePreviewModal");
  const capturePreviewImage = document.getElementById("quizCapturePreviewImage");
  const capturePreviewStatus = document.getElementById("quizCapturePreviewStatus");
  const captureBack = document.getElementById("quizCaptureBack");
  const captureSave = document.getElementById("quizCaptureSave");
  if (
    !quizCard ||
    !introView ||
    !startButton ||
    !retryCountdown ||
    !introResumeActions ||
    !introCapture ||
    !introHome ||
    !quizHeader ||
    !questionView ||
    !callButton ||
    !answerResultView ||
    !answerResultNext ||
    !scoreView ||
    !scoreMeter ||
    !scoreFill ||
    !scoreCelebration ||
    !scorePercentage ||
    !scoreResult ||
    !scoreRank ||
    !scoreRankSeal ||
    !scoreMessage ||
    !scoreDoctorSticker ||
    !scoreTryAgain ||
    !scoreCapture ||
    !scoreTestAdjust ||
    !scoreTestMinus ||
    !scoreTestPlus ||
    !capturePreviewModal ||
    !capturePreviewImage ||
    !capturePreviewStatus ||
    !captureBack ||
    !captureSave
  ) return;

  let score = 0;
  let displayedScore = 0;
  let scoreAnimationFrame = 0;
  let scoreAnimationId = 0;
  let celebrationTimer = 0;
  let resultTimer = 0;
  let capturePreviewUrl = "";
  let capturePreviewFileName = "";
  let captureCloseTimer = 0;
  let captureRequestId = 0;
  let captureReturnFocus = scoreCapture;
  let rankSealRotation = 0;
  let retryLockTimer = 0;
  const retryLockDuration = 24 * 60 * 60 * 1000;
  const retryLockKey = "creaturematsu-matsu-quiz-retry-until";
  const savedResultKey = "creaturematsu-matsu-quiz-last-result";
  const captureRankSeal = new Image();
  const captureDoctorSticker = new Image();
  const captureSealSources = window.MATSU_QUIZ_RANK_SEALS || {};
  const scoreFireworkBursts = [...scoreCelebration.querySelectorAll(".quiz-score-firework")];
  const scoreStarDirections = Array.from({ length: 8 }, (_, index) => {
    const angle = -Math.PI / 2 + index * Math.PI / 4;
    return { x: Math.cos(angle), y: Math.sin(angle) };
  });
  const scoreBurstSettings = [
    { radius: 76, duration: 920, delay: 540 },
    { radius: 76, duration: 980, delay: 650 },
    { radius: 58, duration: 860, delay: 760 }
  ];

  const scoreResults = [
    {
      minimum: 100,
      rank: "EXPERT",
      seal: "rank-seal-images/expert.png",
      sticker: "rank-seal-images/expert-dr.png",
      message: "Seriously??? You're an expert already?! You really know everything about these creatures! Congratulations!!"
    },
    {
      minimum: 80,
      rank: "PRO",
      seal: "rank-seal-images/pro.png",
      sticker: "rank-seal-images/pro-dr.png",
      message: "Almost!!! You know a lot already! Still, there might be a creature or two you've never really noticed before."
    },
    {
      minimum: 50,
      rank: "AMATEUR",
      seal: "rank-seal-images/amateur.png",
      sticker: "rank-seal-images/amateur-dr.png",
      message: "Little by little! You still have a bit more to learn, but you did a good job!"
    },
    {
      minimum: 30,
      rank: "BEGINNER",
      seal: "rank-seal-images/beginner.png",
      sticker: "rank-seal-images/beginner-dr.png",
      message: "You're starting to learn about the creatures! Keep going and get to know them a little better."
    },
    {
      minimum: 10,
      rank: "NOOB",
      seal: "rank-seal-images/noob.png",
      sticker: "rank-seal-images/noob-dr.png",
      message: "You don't know much about these little creatures yet, huh? Go back and read the whole book again!"
    },
    {
      minimum: 0,
      rank: "VOID",
      seal: "rank-seal-images/void.png",
      sticker: "rank-seal-images/void-dr.png",
      message: "Okay... try again, and read the whole book one more time. Take your time!"
    }
  ];

  const getScoreResult = nextScore =>
    scoreResults.find(result => nextScore >= result.minimum) || scoreResults.at(-1);

  const updateScoreResult = (nextScore, savedRotation = null) => {
    const result = getScoreResult(nextScore);
    if (Number.isFinite(savedRotation)) {
      rankSealRotation = savedRotation;
    } else {
      const rotationDirection = Math.random() < 0.5 ? -1 : 1;
      rankSealRotation = rotationDirection * (2.5 + Math.random() * 4.5);
    }
    scoreRankSeal.src = result.seal;
    scoreRankSeal.alt = result.rank;
    scoreRankSeal.style.setProperty("--rank-seal-rotation", `${rankSealRotation.toFixed(2)}deg`);
    scoreDoctorSticker.src = result.sticker;
    const safeSealSource = result.rank === "AMATEUR"
      ? result.seal
      : captureSealSources[result.rank.toLowerCase()];
    if (safeSealSource) {
      captureRankSeal.src = safeSealSource;
    } else {
      captureRankSeal.removeAttribute("src");
    }
    captureDoctorSticker.src = result.sticker;
    scoreMessage.textContent = `“${result.message}”`;
    scoreResult.setAttribute("aria-label", `${result.rank}. Dr. Leezar. ${result.message}`);
  };

  const scheduleScoreResult = nextScore => {
    window.clearTimeout(resultTimer);
    scoreView.classList.remove("is-presenting-result");
    updateScoreResult(nextScore);

    resultTimer = window.setTimeout(() => {
      scoreView.classList.add("is-presenting-result");
      quizCard.scrollTop = 0;
      window.requestAnimationFrame(() => {
        quizCard.scrollTop = 0;
      });
      window.setTimeout(() => {
        quizCard.scrollTop = 0;
      }, 350);
      window.setTimeout(() => {
        quizCard.scrollTop = 0;
      }, 1400);
    }, 2300);
  };

  const stopScoreCelebration = () => {
    window.clearTimeout(celebrationTimer);
    scoreView.classList.remove("is-celebrating");
    scoreMeter.classList.remove("is-complete");
  };

  const createScoreStarFireworks = () => {
    scoreFireworkBursts.forEach((burst, burstIndex) => {
      const settings = scoreBurstSettings[burstIndex];
      const angleOffset = (Math.random() * 12 - 6) * Math.PI / 180;
      burst.replaceChildren();

      scoreStarDirections.forEach(({ x, y }, starIndex) => {
        const rotatedX = x * Math.cos(angleOffset) - y * Math.sin(angleOffset);
        const rotatedY = x * Math.sin(angleOffset) + y * Math.cos(angleOffset);
        const star = document.createElement("span");
        const maximumSize = burstIndex === 2 ? 12 : 15;
        const randomSize = 6 + Math.round(Math.random() * (maximumSize - 6));

        star.className = "quiz-score-firework-star";
        star.style.setProperty("--score-star-x", `${(rotatedX * settings.radius).toFixed(1)}px`);
        star.style.setProperty("--score-star-y", `${(rotatedY * settings.radius).toFixed(1)}px`);
        star.style.setProperty("--score-star-x-near", `${(rotatedX * settings.radius * 0.28).toFixed(1)}px`);
        star.style.setProperty("--score-star-y-near", `${(rotatedY * settings.radius * 0.28).toFixed(1)}px`);
        star.style.setProperty("--score-star-size", `${randomSize}px`);
        star.style.setProperty("--score-star-rotation", `${Math.round(Math.random() * 100 - 50)}deg`);
        star.style.setProperty("--score-star-duration", `${settings.duration}ms`);
        star.style.setProperty("--score-star-delay", `${settings.delay + starIndex * 8}ms`);
        burst.append(star);
      });
    });
  };

  const celebrateFullScore = () => {
    stopScoreCelebration();
    createScoreStarFireworks();
    void scoreCelebration.offsetWidth;
    scoreView.classList.add("is-celebrating");
    scoreMeter.classList.add("is-complete");

    celebrationTimer = window.setTimeout(() => {
      scoreView.classList.remove("is-celebrating");
      scoreMeter.classList.remove("is-complete");
    }, 2100);
  };

  const setScoreColor = nextScore => {
    let colorModifier = "quiz-score-fill--red";

    if (nextScore >= 80) {
      colorModifier = "quiz-score-fill--green";
    } else if (nextScore >= 50) {
      colorModifier = "quiz-score-fill--yellow";
    } else if (nextScore >= 30) {
      colorModifier = "quiz-score-fill--orange";
    }

    scoreFill.classList.remove(
      "quiz-score-fill--red",
      "quiz-score-fill--orange",
      "quiz-score-fill--yellow",
      "quiz-score-fill--green"
    );
    scoreFill.classList.add(colorModifier);
  };

  const setScore = nextScore => {
    const targetScore = Math.max(0, Math.min(100, nextScore));
    const reachedFullScore = targetScore === 100 && score < 100;
    const startingScore = displayedScore;
    const duration = 620;
    const startedAt = performance.now();
    const animationId = ++scoreAnimationId;

    score = targetScore;
    setScoreColor(targetScore);
    scoreFill.style.clipPath = `inset(${100 - targetScore}% 0 0 0)`;

    if (reachedFullScore) {
      celebrateFullScore();
    } else if (targetScore < 100) {
      stopScoreCelebration();
    }

    if (scoreView.classList.contains("is-testing-score")) {
      window.clearTimeout(resultTimer);
      scoreView.classList.remove("is-presenting-result");
    } else {
      scheduleScoreResult(targetScore);
    }

    window.cancelAnimationFrame(scoreAnimationFrame);

    const updateScore = now => {
      if (animationId !== scoreAnimationId) return;

      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      displayedScore = Math.round(
        startingScore + (targetScore - startingScore) * easedProgress
      );

      scorePercentage.textContent = `${displayedScore}%`;
      scoreMeter.setAttribute("aria-valuenow", String(displayedScore));

      if (progress < 1) {
        scoreAnimationFrame = window.requestAnimationFrame(updateScore);
      }
    };

    scoreAnimationFrame = window.requestAnimationFrame(updateScore);
  };

  const resetScoreState = () => {
    window.clearTimeout(resultTimer);
    scoreAnimationId += 1;
    window.cancelAnimationFrame(scoreAnimationFrame);
    stopScoreCelebration();
    scoreView.classList.remove("is-presenting-result");
    score = 0;
    displayedScore = 0;
    setScoreColor(0);
    scoreFill.style.clipPath = "inset(100% 0 0 0)";
    scorePercentage.textContent = "0%";
    scoreMeter.setAttribute("aria-valuenow", "0");
    updateScoreResult(0);
  };

  const releaseCapturePreview = () => {
    if (capturePreviewUrl.startsWith("blob:")) URL.revokeObjectURL(capturePreviewUrl);
    capturePreviewUrl = "";
    capturePreviewFileName = "";
    capturePreviewImage.removeAttribute("src");
  };

  const closeCapturePreview = (restoreFocus = true) => {
    if (capturePreviewModal.hidden) return;

    captureRequestId += 1;
    window.clearTimeout(captureCloseTimer);
    capturePreviewModal.classList.remove("is-visible");
    capturePreviewModal.setAttribute("aria-hidden", "true");

    captureCloseTimer = window.setTimeout(() => {
      capturePreviewModal.hidden = true;
      capturePreviewModal.classList.remove("is-loading");
      capturePreviewModal.removeAttribute("aria-busy");
      capturePreviewStatus.hidden = false;
      capturePreviewStatus.textContent = "CREATING PREVIEW...";
      captureSave.disabled = true;
      releaseCapturePreview();
      if (restoreFocus) captureReturnFocus?.focus();
    }, 260);
  };

  const readStoredNumber = key => {
    try {
      const value = Number(window.localStorage.getItem(key));
      return Number.isFinite(value) ? value : 0;
    } catch (error) {
      return 0;
    }
  };

  const readSavedResult = () => {
    try {
      const result = JSON.parse(window.localStorage.getItem(savedResultKey) || "null");
      const savedScore = Number(result?.score);
      const savedRotation = Number(result?.rankSealRotation);
      if (!Number.isFinite(savedScore) || savedScore < 0 || savedScore > 100) return null;
      return {
        score: savedScore,
        rankSealRotation: Number.isFinite(savedRotation) ? savedRotation : null
      };
    } catch (error) {
      return null;
    }
  };

  const saveCurrentResult = () => {
    try {
      window.localStorage.setItem(savedResultKey, JSON.stringify({
        score,
        rankSealRotation,
        savedAt: Date.now()
      }));
    } catch (error) {
      // The result still works for the current visit if storage is unavailable.
    }
  };

  const setRetryLock = () => {
    const retryAt = Date.now() + retryLockDuration;
    try {
      window.localStorage.setItem(retryLockKey, String(retryAt));
    } catch (error) {
      // Browsers can block localStorage; keep the current-page lock in memory.
    }
    return retryAt;
  };

  const formatRetryCountdown = remaining => {
    const totalSeconds = Math.max(0, Math.ceil(remaining / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    const twoDigits = value => String(value).padStart(2, "0");

    return `RESET IN ${twoDigits(hours)}H ${twoDigits(minutes)}M ${twoDigits(seconds)}S`;
  };

  const refreshRetryLockControls = (retryAt = readStoredNumber(retryLockKey)) => {
    window.clearTimeout(retryLockTimer);
    const remaining = retryAt - Date.now();
    const isLocked = remaining > 0;
    const hasSavedResult = Boolean(readSavedResult());
    const countdown = isLocked ? formatRetryCountdown(remaining) : "";

    startButton.disabled = isLocked;
    startButton.classList.toggle("has-retry-actions", isLocked && hasSavedResult);
    retryCountdown.textContent = countdown;
    retryCountdown.hidden = !(isLocked && hasSavedResult);
    startButton.setAttribute(
      "aria-label",
      isLocked ? `Start quiz disabled. ${countdown}` : "Start quiz"
    );
    introResumeActions.hidden = !(isLocked && hasSavedResult);

    if (isLocked) {
      retryLockTimer = window.setTimeout(
        () => refreshRetryLockControls(),
        Math.min(1000, remaining + 50)
      );
    } else if (retryAt) {
      try {
        window.localStorage.removeItem(retryLockKey);
      } catch (error) {
        // Expired state is harmless if storage cannot be changed.
      }
    }
  };

  const restoreSavedResultForCapture = () => {
    const savedResult = readSavedResult();
    if (!savedResult) return false;

    score = savedResult.score;
    displayedScore = savedResult.score;
    setScoreColor(score);
    scoreFill.style.clipPath = `inset(${100 - score}% 0 0 0)`;
    scorePercentage.textContent = `${score}%`;
    scoreMeter.setAttribute("aria-valuenow", String(score));
    updateScoreResult(score, savedResult.rankSealRotation);
    return true;
  };

  const hideScoreTestControls = () => {
    scoreTestAdjust.hidden = true;
    scoreView.classList.remove("is-testing-score");
  };

  const syncScoreTestButtons = () => {
    scoreTestMinus.disabled = score <= 0;
    scoreTestPlus.disabled = score >= 100;
  };

  const hideIntro = () => {
    introView.classList.remove("is-leaving", "is-returning");
    introView.hidden = true;
    introView.setAttribute("aria-hidden", "true");
    startButton.classList.remove("is-leaving", "is-returning");
    startButton.hidden = true;
    startButton.disabled = true;
  };

  const hideAnswerResult = () => {
    answerResultView.classList.remove("is-visible");
    answerResultView.hidden = true;
    answerResultView.setAttribute("aria-hidden", "true");
    answerResultNext.classList.remove("is-visible");
    answerResultNext.hidden = true;
  };

  const showQuizView = () => {
    closeCapturePreview(false);
    window.clearTimeout(resultTimer);
    stopScoreCelebration();
    scoreView.classList.remove("is-visible", "is-presenting-result", "is-testing-score");
    hideScoreTestControls();
    scoreView.hidden = true;
    scoreView.setAttribute("aria-hidden", "true");
    hideIntro();
    hideAnswerResult();
    window.MATSU_QUIZ_QUESTIONS?.load(0);

    document.querySelectorAll(".quiz-answer").forEach(answer => {
      answer.classList.remove("is-selected", "is-celebrating");
      answer.setAttribute("aria-pressed", "false");
    });

    quizHeader.hidden = false;
    questionView.hidden = false;
    questionView.classList.remove("is-leaving", "is-starting");
    callButton.hidden = false;
    callButton.disabled = true;
    callButton.classList.remove("is-leaving", "is-starting");
    quizCard.setAttribute("aria-labelledby", "quizQuestion");
    quizCard.scrollTop = 0;
    void questionView.offsetWidth;
    quizHeader.classList.add("is-starting");
    questionView.classList.add("is-starting");
    callButton.classList.add("is-starting");
    window.setTimeout(() => {
      quizHeader.classList.remove("is-starting");
      questionView.classList.remove("is-starting");
      callButton.classList.remove("is-starting");
    }, 700);
  };

  const normalizeTestScore = value =>
    Math.max(0, Math.min(100, Number(value) || 0));

  const showDialogueTestView = (value = 0) => {
    const targetScore = normalizeTestScore(value);

    closeCapturePreview(false);
    hideScoreTestControls();
    hideIntro();
    hideAnswerResult();
    quizHeader.hidden = true;
    questionView.hidden = true;
    questionView.classList.remove("is-leaving", "is-starting");
    callButton.hidden = true;
    callButton.classList.remove("is-leaving", "is-starting");

    scoreView.classList.remove("is-visible", "is-presenting-result", "is-testing-score");
    scoreView.hidden = false;
    scoreView.setAttribute("aria-hidden", "false");
    resetScoreState();
    scoreTryAgain.disabled = false;
    scoreCapture.disabled = false;
    quizCard.setAttribute("aria-labelledby", "quizScoreTitle");
    quizCard.scrollTop = 0;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scoreView.classList.add("is-visible");
        setScore(targetScore);
      });
    });

    return targetScore;
  };

  const showScoreBarTestView = (value = 0) => {
    const targetScore = normalizeTestScore(value);

    closeCapturePreview(false);
    hideIntro();
    hideAnswerResult();
    quizHeader.hidden = true;
    questionView.hidden = true;
    questionView.classList.remove("is-leaving", "is-starting");
    callButton.hidden = true;
    callButton.classList.remove("is-leaving", "is-starting");

    scoreView.classList.remove("is-visible", "is-presenting-result");
    scoreView.classList.add("is-testing-score");
    scoreView.hidden = false;
    scoreView.setAttribute("aria-hidden", "false");
    resetScoreState();
    scoreTestAdjust.hidden = false;
    quizCard.setAttribute("aria-labelledby", "quizScoreTitle");
    quizCard.scrollTop = 0;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scoreView.classList.add("is-visible");
        setScore(targetScore);
        syncScoreTestButtons();
      });
    });

    return targetScore;
  };

  window.MATSU_QUIZ_TEST = Object.freeze({
    bar: showScoreBarTestView,
    dialogue: showDialogueTestView
  });
  console.info(
    "[Matsu Quiz] DevTools tests: MATSU_QUIZ_TEST.bar(50) | MATSU_QUIZ_TEST.dialogue(50)"
  );

  const showQuestionScoreResult = nextScore => {
    const targetScore = Math.max(0, Math.min(100, Number(nextScore) || 0));

    closeCapturePreview(false);
    hideScoreTestControls();
    hideIntro();
    quizHeader.hidden = true;
    questionView.hidden = true;
    questionView.classList.remove("is-leaving", "is-starting");
    callButton.hidden = true;
    callButton.classList.remove("is-leaving", "is-starting");
    answerResultView.classList.remove("is-visible");
    answerResultNext.classList.remove("is-visible");
    window.setTimeout(() => {
      answerResultView.hidden = true;
      answerResultView.setAttribute("aria-hidden", "true");
      answerResultNext.hidden = true;
      answerResultNext.disabled = false;
      scoreView.classList.remove("is-visible", "is-presenting-result", "is-testing-score");
      scoreView.hidden = false;
      scoreView.setAttribute("aria-hidden", "false");
      resetScoreState();
      scoreTryAgain.disabled = false;
      scoreCapture.disabled = false;
      quizCard.setAttribute("aria-labelledby", "quizScoreTitle");
      quizCard.scrollTop = 0;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          scoreView.classList.add("is-visible");
          setScore(targetScore);
        });
      });
    }, 360);
  };

  scoreTryAgain.addEventListener("click", () => {
    saveCurrentResult();
    const retryAt = setRetryLock();
    closeCapturePreview(false);
    scoreTryAgain.blur();
    scoreTryAgain.disabled = true;
    scoreCapture.disabled = true;
    scoreView.classList.remove("is-visible");
    hideScoreTestControls();
    window.clearTimeout(resultTimer);
    stopScoreCelebration();

    window.setTimeout(() => {
      scoreView.classList.remove("is-presenting-result");
      scoreView.hidden = true;
      scoreView.setAttribute("aria-hidden", "true");
      resetScoreState();
    }, 520);

    window.setTimeout(() => {
      introView.classList.remove("is-leaving");
      introView.classList.add("is-returning");
      introView.hidden = false;
      introView.setAttribute("aria-hidden", "false");
      startButton.classList.remove("is-leaving");
      startButton.classList.add("is-returning");
      startButton.hidden = false;
      refreshRetryLockControls(retryAt);
      scoreTryAgain.disabled = false;
      scoreCapture.disabled = false;
      quizCard.setAttribute("aria-labelledby", "quizIntroTitle");
      quizCard.scrollTop = 0;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          introView.classList.remove("is-returning");
          startButton.classList.remove("is-returning");
        });
      });
    }, 1150);
  });

  const roundedRectangle = (context, x, y, width, height, radius) => {
    const corner = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + corner, y);
    context.arcTo(x + width, y, x + width, y + height, corner);
    context.arcTo(x + width, y + height, x, y + height, corner);
    context.arcTo(x, y + height, x, y, corner);
    context.arcTo(x, y, x + width, y, corner);
    context.closePath();
  };

  const getWrappedLines = (context, text, maxWidth) => {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";

    words.forEach(word => {
      const nextLine = line ? `${line} ${word}` : word;
      if (line && context.measureText(nextLine).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = nextLine;
      }
    });
    if (line) lines.push(line);

    return lines;
  };

  const drawFittedWrappedText = (
    context,
    text,
    centerX,
    areaY,
    maxWidth,
    maxHeight
  ) => {
    const fontSize = 15;
    const lineHeight = 15;
    context.font = `italic ${fontSize}px "CreatureFont", sans-serif`;
    const lines = getWrappedLines(context, text, maxWidth);

    const totalHeight = lines.length * lineHeight;
    const firstLineY = areaY + (maxHeight - totalHeight) / 2 + lineHeight / 2;

    context.save();
    context.textBaseline = "middle";
    lines.forEach((textLine, index) => {
      context.fillText(textLine, centerX, firstLineY + index * lineHeight);
    });
    context.restore();

    return { fontSize, lineHeight, lines };
  };

  const drawResultCapture = canvas => {
    const context = canvas.getContext("2d");
    const scale = 2;
    const width = 490;
    const height = 490;
    const result = getScoreResult(score);
    const fillColor = score >= 80
      ? "#43c875"
      : score >= 50
        ? "#f3d65b"
        : score >= 30
          ? "#f29a50"
          : "#ef625e";

    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);
    context.clearRect(0, 0, width, height);

    const cardGradient = context.createLinearGradient(0, 0, width, height);
    cardGradient.addColorStop(0, "#fff6dc");
    cardGradient.addColorStop(1, "#ffe6b5");
    context.fillStyle = cardGradient;
    context.strokeStyle = "#3c201d";
    context.lineWidth = 4;
    roundedRectangle(context, 4, 4, 482, 482, 28);
    context.fill();
    context.stroke();

    context.save();
    roundedRectangle(context, 6, 6, 478, 478, 25);
    context.clip();
    context.globalAlpha = 0.85;
    context.fillStyle = "#efb775";
    context.beginPath();
    context.arc(51, 0, 53, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#f8877d";
    context.beginPath();
    context.arc(5, -18, 53, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#71c7a3";
    context.beginPath();
    context.arc(430, 465, 53, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#9b80cf";
    context.beginPath();
    context.arc(482, 480, 53, 0, Math.PI * 2);
    context.fill();
    context.restore();

    context.save();
    context.strokeStyle = "rgba(111, 51, 44, 0.24)";
    context.lineWidth = 2;
    context.setLineDash([6, 5]);
    roundedRectangle(context, 16, 16, 458, 458, 20);
    context.stroke();
    context.restore();

    context.textAlign = "center";
    context.textBaseline = "alphabetic";
    context.font = '700 38px "CreatureFont", sans-serif';
    context.fillStyle = "#ffffff";
    context.fillText("The Result", 245, 77);
    context.fillStyle = "#4b211e";
    context.fillText("The Result", 245, 74);

    const meterX = 66;
    const meterY = 127;
    const meterWidth = 84;
    const meterHeight = 250;

    // Build the captured meter from nested filled shapes instead of centered
    // strokes. This keeps the four-pixel outer rim even on every side and
    // makes the lower shadow exactly as wide as the finished meter.
    context.fillStyle = "#4b211e";
    roundedRectangle(context, meterX, meterY + 8, meterWidth, meterHeight, 22);
    context.fill();

    context.fillStyle = "#4b211e";
    roundedRectangle(context, meterX, meterY, meterWidth, meterHeight, 22);
    context.fill();

    const chamberX = meterX + 4;
    const chamberY = meterY + 4;
    const chamberWidth = meterWidth - 8;
    const chamberHeight = meterHeight - 8;

    context.fillStyle = "#ffffff";
    roundedRectangle(context, chamberX, chamberY, chamberWidth, chamberHeight, 18);
    context.fill();

    const liquidX = chamberX + 5;
    const liquidY = chamberY + 5;
    const liquidWidth = chamberWidth - 10;
    const liquidHeight = chamberHeight - 10;

    // The grey chamber and its liquid share one clipping path, so neither can
    // bleed into the white inner rim and create faint grey border fragments.
    context.save();
    roundedRectangle(context, liquidX, liquidY, liquidWidth, liquidHeight, 13);
    context.clip();
    context.fillStyle = "#d5d7db";
    context.fillRect(liquidX, liquidY, liquidWidth, liquidHeight);
    context.fillStyle = fillColor;
    const filledHeight = liquidHeight * score / 100;
    context.fillRect(
      liquidX,
      liquidY + liquidHeight - filledHeight,
      liquidWidth,
      filledHeight
    );

    context.strokeStyle = "rgba(75, 33, 30, 0.36)";
    context.lineWidth = 2;
    for (let segment = 1; segment < 10; segment += 1) {
      const segmentY = liquidY + segment * liquidHeight / 10;
      context.beginPath();
      context.moveTo(liquidX, segmentY);
      context.lineTo(liquidX + liquidWidth, segmentY);
      context.stroke();
    }
    context.restore();

    context.font = '700 25px "CreatureFont", sans-serif';
    context.fillStyle = "#ffffff";
    context.fillText(`${score}%`, meterX + meterWidth / 2, 419);
    context.fillStyle = "#4b211e";
    context.fillText(`${score}%`, meterX + meterWidth / 2, 417);

    const resultCenterX = 321;
    const sealMaxWidth = 250;
    const sealMaxHeight = 66;
    if (captureRankSeal.naturalWidth && captureRankSeal.naturalHeight) {
      const sealScale = Math.min(
        sealMaxWidth / captureRankSeal.naturalWidth,
        sealMaxHeight / captureRankSeal.naturalHeight
      );
      const sealWidth = captureRankSeal.naturalWidth * sealScale;
      const sealHeight = captureRankSeal.naturalHeight * sealScale;
      context.save();
      context.translate(resultCenterX, 164);
      context.rotate(rankSealRotation * Math.PI / 180);
      context.drawImage(
        captureRankSeal,
        -sealWidth / 2,
        -sealHeight / 2,
        sealWidth,
        sealHeight
      );
      context.restore();
    } else {
      context.fillStyle = "#4b211e";
      context.font = '700 34px "CreatureFont", sans-serif';
      context.fillText(result.rank, resultCenterX, 176);
    }

    const dialogueX = 196;
    const dialogueY = 233;
    const dialogueWidth = 250;
    const dialogueHeight = 112;
    const dialogueHeaderHeight = 32;
    const dialogueDividerY = dialogueY + dialogueHeaderHeight;

    context.save();
    roundedRectangle(context, dialogueX, dialogueY, dialogueWidth, dialogueHeight, 15);
    context.clip();

    context.fillStyle = "rgba(255, 250, 240, 0.72)";
    context.fillRect(dialogueX, dialogueY, dialogueWidth, dialogueHeight);
    context.fillStyle = "rgba(243, 198, 140, 0.55)";
    context.fillRect(dialogueX, dialogueY, dialogueWidth, dialogueHeaderHeight);

    context.strokeStyle = "rgb(223 194 159)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(dialogueX, dialogueDividerY);
    context.lineTo(dialogueX + dialogueWidth, dialogueDividerY);
    context.stroke();

    context.fillStyle = "#6f332c";
    context.font = '700 20px "CreatureFont", sans-serif';
    context.textBaseline = "middle";
    context.fillText(
      "Dr. Leezar",
      resultCenterX,
      dialogueY + dialogueHeaderHeight / 2
    );
    context.fillStyle = "#4b211e";
    drawFittedWrappedText(
      context,
      `“${result.message}”`,
      resultCenterX,
      dialogueDividerY + 3,
      224,
      dialogueHeight - dialogueHeaderHeight - 6
    );
    context.restore();

    context.strokeStyle = "rgb(223 194 159)";
    context.lineWidth = 2;
    roundedRectangle(context, dialogueX, dialogueY, dialogueWidth, dialogueHeight, 15);
    context.stroke();

    if (captureDoctorSticker.naturalWidth && captureDoctorSticker.naturalHeight) {
      const stickerMaxSize = 100;
      const stickerScale = Math.min(
        stickerMaxSize / captureDoctorSticker.naturalWidth,
        stickerMaxSize / captureDoctorSticker.naturalHeight
      );
      const stickerWidth = captureDoctorSticker.naturalWidth * stickerScale;
      const stickerHeight = captureDoctorSticker.naturalHeight * stickerScale;
      context.save();
      context.translate(dialogueX + dialogueWidth - 30, dialogueY + dialogueHeight + 18);
      context.rotate(10 * Math.PI / 180);
      context.drawImage(
        captureDoctorSticker,
        -stickerWidth / 2,
        -stickerHeight / 2,
        stickerWidth,
        stickerHeight
      );
      context.restore();
    }
  };

  const openResultCapture = async (triggerButton = scoreCapture) => {
    const requestId = ++captureRequestId;
    captureReturnFocus = triggerButton;
    triggerButton.disabled = true;
    window.clearTimeout(captureCloseTimer);
    releaseCapturePreview();
    capturePreviewStatus.textContent = "CREATING PREVIEW...";
    capturePreviewStatus.hidden = false;
    captureSave.disabled = true;
    capturePreviewModal.hidden = false;
    capturePreviewModal.setAttribute("aria-hidden", "false");
    capturePreviewModal.setAttribute("aria-busy", "true");
    capturePreviewModal.classList.add("is-loading");
    void capturePreviewModal.offsetWidth;
    capturePreviewModal.classList.add("is-visible");
    captureBack.focus();

    try {
      if (document.fonts?.ready) {
        await Promise.race([
          document.fonts.ready,
          new Promise(resolve => window.setTimeout(resolve, 400))
        ]);
      }
      if (!captureRankSeal.complete || !captureRankSeal.naturalWidth) {
        try {
          await Promise.race([
            captureRankSeal.decode(),
            new Promise(resolve => window.setTimeout(resolve, 400))
          ]);
        } catch (error) {
          // The canvas draws the rank name as a fallback if the seal is unavailable.
        }
      }
      if (!captureDoctorSticker.complete || !captureDoctorSticker.naturalWidth) {
        try {
          await Promise.race([
            captureDoctorSticker.decode(),
            new Promise(resolve => window.setTimeout(resolve, 400))
          ]);
        } catch (error) {
          // The capture still works if the optional Dr. Leezar sticker is unavailable.
        }
      }
      const canvas = document.createElement("canvas");
      drawResultCapture(canvas);

      const pngUrl = canvas.toDataURL("image/png");
      if (requestId !== captureRequestId || capturePreviewModal.hidden) return;

      capturePreviewUrl = pngUrl;
      capturePreviewFileName = `matsu-quiz-${score}percent-${getScoreResult(score).rank.toLowerCase()}.png`;
      capturePreviewImage.src = capturePreviewUrl;
      capturePreviewStatus.hidden = true;
      captureSave.disabled = false;
      capturePreviewModal.classList.remove("is-loading");
      capturePreviewModal.removeAttribute("aria-busy");
    } catch (error) {
      console.error("Unable to capture the Matsu Quiz result.", error);
      if (requestId === captureRequestId && !capturePreviewModal.hidden) {
        capturePreviewStatus.textContent = "PREVIEW UNAVAILABLE";
        capturePreviewModal.classList.remove("is-loading");
        capturePreviewModal.removeAttribute("aria-busy");
      }
    } finally {
      if (requestId === captureRequestId) triggerButton.disabled = false;
    }
  };

  const saveResultCapture = () => {
    if (!capturePreviewUrl) return;

    const download = document.createElement("a");
    download.href = capturePreviewUrl;
    download.download = capturePreviewFileName;
    download.click();
    window.setTimeout(() => closeCapturePreview(), 120);
  };

  scoreCapture.addEventListener("click", () => openResultCapture(scoreCapture));
  introCapture.addEventListener("click", () => {
    if (restoreSavedResultForCapture()) openResultCapture(introCapture);
  });
  introHome.addEventListener("click", () => {
    window.location.href = "../../index.html";
  });
  captureBack.addEventListener("click", () => closeCapturePreview());
  captureSave.addEventListener("click", saveResultCapture);
  capturePreviewModal.addEventListener("click", event => {
    if (event.target === capturePreviewModal) closeCapturePreview();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !capturePreviewModal.hidden) {
      closeCapturePreview();
    }
  });

  scoreTestMinus.addEventListener("click", () => {
    setScore(score - 10);
    syncScoreTestButtons();
  });

  scoreTestPlus.addEventListener("click", () => {
    setScore(score + 10);
    syncScoreTestButtons();
  });

  startButton.addEventListener("click", () => {
    if (startButton.disabled) return;

    startButton.disabled = true;
    window.creatureMatsuAnalytics?.pageview({
      route: "/games/matsu-quiz/play",
      path: "/games/matsu-quiz/play"
    });
    startButton.blur();
    introView.classList.add("is-leaving");
    startButton.classList.add("is-leaving");
    window.setTimeout(showQuizView, 340);
  });
  document.addEventListener("matsuquiz:show-score", event => {
    showQuestionScoreResult(event.detail?.percentage);
  });
  refreshRetryLockControls();
})();
