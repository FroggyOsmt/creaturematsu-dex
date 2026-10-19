(() => {
  const questionView = document.getElementById("quizQuestionView");
  const questionText = document.getElementById("quizQuestion");
  const questionStep = document.querySelector(".quiz-step");
  const questionProgress = document.querySelector(".quiz-progress");
  const answerButtons = [...document.querySelectorAll(".quiz-answer")];
  const normalQuestions = window.MATSU_QUIZ_QA_5?.questions || {};
  const difficultQuestions = window.MATSU_QUIZ_QA_10?.questions || {};

  if (
    !questionView ||
    !questionText ||
    !questionStep ||
    !questionProgress ||
    answerButtons.length !== 3
  ) return;

  const shuffle = list => {
    const shuffled = [...list];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
  };

  const selectQuestions = questions => shuffle(
    Object.entries(questions).map(([correctCreature, section]) => ({
      correctCreature,
      ...section
    }))
  ).slice(0, 5);

  const questionQueue = [
    ...selectQuestions(normalQuestions),
    ...selectQuestions(difficultQuestions)
  ];

  const loadQuestion = index => {
    const section = questionQueue[index];

    if (!section) return false;

    const options = shuffle([
      {
        ...section.correct,
        correct: true
      },
      ...Object.values(section.incorrect).map(option => ({
        ...option,
        correct: false
      }))
    ]);

    questionText.textContent = section.question;
    questionStep.textContent = `QUESTION ${index + 1}`;
    questionProgress.textContent = `${index + 1} / ${questionQueue.length}`;
    questionProgress.setAttribute(
      "aria-label",
      `Question ${index + 1} of ${questionQueue.length}`
    );
    questionView.dataset.correctAnswer = section.correct.answer;

    answerButtons.forEach((button, optionIndex) => {
      const option = options[optionIndex];
      const answerText = button.querySelector(".quiz-answer-text");
      const answerLetter = button.querySelector(".quiz-answer-letter");

      button.dataset.answer = option.answer;
      button.dataset.correct = String(option.correct);
      button.disabled = false;
      button.classList.remove("is-selected", "is-celebrating", "is-hint-eliminated");
      button.setAttribute("aria-pressed", "false");
      answerLetter.textContent = String.fromCharCode(65 + optionIndex);
      answerText.textContent = option.answer;
    });

    window.MATSU_QUIZ_CURRENT_QUESTION = {
      index,
      total: questionQueue.length,
      key: section.correctCreature,
      question: section.question,
      correctAnswer: section.correct.answer,
      options,
      points: section.points
    };

    document.dispatchEvent(new CustomEvent("matsuquiz:question-loaded", {
      detail: window.MATSU_QUIZ_CURRENT_QUESTION
    }));

    return true;
  };

  window.MATSU_QUIZ_QUESTIONS = {
    mode: "normal",
    total: questionQueue.length,
    maximumPoints: questionQueue.reduce(
      (total, question) => total + question.points.correct,
      0
    ),
    load: loadQuestion
  };

  loadQuestion(0);
})();
