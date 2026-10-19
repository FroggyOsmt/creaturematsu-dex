(() => {
  const quizCard = document.getElementById("quizCard");
  const questionView = document.getElementById("quizQuestionView");
  const quizHeader = document.getElementById("quizHeader");
  const resultView = document.getElementById("quizResult");
  const nextButton = document.getElementById("quizNextButton");
  const resultImage = document.getElementById("quizResultMatsu");
  const resultStatus = document.getElementById("quizResultTitle");
  const resultAnswer = document.getElementById("quizResultAnswer");
  const resultSpeaker = document.getElementById("quizResultSpeaker");
  const resultDialogue = document.getElementById("quizResultDialogue");
  const resultNext = document.getElementById("quizResultNext");

  if (
    !quizCard ||
    !questionView ||
    !quizHeader ||
    !resultView ||
    !nextButton ||
    !resultImage ||
    !resultStatus ||
    !resultAnswer ||
    !resultSpeaker ||
    !resultDialogue ||
    !resultNext
  ) return;

  let latestResult = null;
  let sessionPoints = 0;
  let answeredQuestions = 0;

  const getPointsAwarded = (correct, hintUses, points) => {
    if (!correct) return points.incorrect;
    if (hintUses >= 2) return points.twoHints;
    if (hintUses === 1) return points.oneHint;
    return points.correct;
  };

  document.addEventListener("click", event => {
    if (!event.target.closest("#quizNextButton")) return;

    const selectedAnswer = document.querySelector('.quiz-answer[aria-pressed="true"]');
    const question = window.MATSU_QUIZ_CURRENT_QUESTION;
    const selectedOption = question?.options.find(
      option => option.answer === selectedAnswer?.dataset.answer
    );

    if (!selectedAnswer || !question || !selectedOption) return;

    const hintUses = Number(questionView.dataset.hintUses || 0);
    const hintPenalty = Number(questionView.dataset.hintPenalty || 0);
    const isCorrect = selectedOption.correct;
    const pointsAwarded = getPointsAwarded(isCorrect, hintUses, question.points);
    const maximumPoints = question.points.correct;
    const percentage = maximumPoints > 0
      ? pointsAwarded / maximumPoints * 100
      : 0;
    const assistedVictory = isCorrect && hintUses === 2;
    const resultModifier = isCorrect
      ? "quiz-result--correct"
      : "quiz-result--incorrect";

    latestResult = {
      answer: selectedOption.answer,
      correctAnswer: question.correctAnswer,
      correct: isCorrect,
      hintUses,
      hintPenalty,
      pointsAwarded,
      maximumPoints,
      percentage,
      assistedVictory
    };
    sessionPoints += pointsAwarded;
    answeredQuestions += 1;

    resultView.dataset.hintUses = String(hintUses);
    resultView.dataset.hintPenalty = String(hintPenalty);
    resultView.dataset.pointsAwarded = String(pointsAwarded);
    resultView.dataset.percentage = String(percentage);
    resultView.dataset.assistedVictory = String(assistedVictory);
    resultView.classList.toggle("quiz-result--assisted", assistedVictory);

    document.dispatchEvent(new CustomEvent("matsuquiz:answer-result", {
      detail: latestResult
    }));

    nextButton.disabled = true;
    nextButton.blur();
    quizCard.scrollTop = 0;
    questionView.classList.add("is-leaving");
    nextButton.classList.add("is-leaving");

    window.setTimeout(() => {
      resultView.classList.remove(
        "is-visible",
        "quiz-result--correct",
        "quiz-result--incorrect"
      );
      resultView.classList.add(resultModifier);
      resultImage.src = selectedOption.image;
      resultImage.alt = selectedOption.matsu.id;
      resultStatus.textContent = isCorrect ? "CORRECT" : "INCORRECT";
      resultAnswer.textContent = `The answer is ${question.correctAnswer}`;
      resultSpeaker.textContent = `${selectedOption.matsu.id}:`;
      resultSpeaker.style.setProperty("--matsu-speaker-color", selectedOption.matsu.color);
      resultDialogue.textContent = selectedOption.matsu.dialogue;
      questionView.hidden = true;
      nextButton.hidden = true;
      quizCard.scrollTop = 0;
      resultView.hidden = false;
      resultView.setAttribute("aria-hidden", "false");
      resultNext.hidden = false;
      resultNext.disabled = false;
      quizCard.setAttribute("aria-labelledby", "quizResultTitle");

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          resultView.classList.add("is-visible");
          resultNext.classList.add("is-visible");
          quizCard.scrollTop = 0;
        });
      });
    }, 260);
  });

  resultNext.addEventListener("click", () => {
    if (!latestResult) return;

    resultNext.disabled = true;
    const questionSystem = window.MATSU_QUIZ_QUESTIONS;
    const nextQuestionIndex = window.MATSU_QUIZ_CURRENT_QUESTION.index + 1;

    if (nextQuestionIndex < questionSystem.total) {
      resultView.classList.remove("is-visible");
      resultNext.classList.remove("is-visible");

      window.setTimeout(() => {
        resultView.hidden = true;
        resultView.setAttribute("aria-hidden", "true");
        resultNext.hidden = true;
        resultNext.disabled = false;
        latestResult = null;
        questionSystem.load(nextQuestionIndex);
        quizHeader.hidden = false;
        quizHeader.classList.remove("is-starting");
        questionView.hidden = false;
        questionView.classList.remove("is-leaving", "is-starting");
        nextButton.hidden = false;
        nextButton.disabled = true;
        nextButton.classList.remove("is-leaving", "is-starting");
        quizCard.setAttribute("aria-labelledby", "quizQuestion");
        quizCard.scrollTop = 0;

        void questionView.offsetWidth;
        quizHeader.classList.add("is-starting");
        questionView.classList.add("is-starting");
        nextButton.classList.add("is-starting");

        window.setTimeout(() => {
          quizHeader.classList.remove("is-starting");
          questionView.classList.remove("is-starting");
          nextButton.classList.remove("is-starting");
        }, 700);
      }, 420);
      return;
    }

    const maximumPoints = questionSystem.maximumPoints;
    const percentage = maximumPoints > 0
      ? sessionPoints / maximumPoints * 100
      : 0;

    document.dispatchEvent(new CustomEvent("matsuquiz:show-score", {
      detail: {
        ...latestResult,
        sessionPoints,
        maximumPoints,
        answeredQuestions,
        percentage
      }
    }));
  });

  document.addEventListener("matsuquiz:question-loaded", event => {
    if (event.detail?.index !== 0) return;

    latestResult = null;
    sessionPoints = 0;
    answeredQuestions = 0;
  });
})();
