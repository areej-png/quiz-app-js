const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Sheets"
    ],
    correct: "Cascading Style Sheets"
  }
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Load first question
loadQuestion();

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answersEl.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => {
      selectedAnswer = option;
      nextBtn.style.display = "block"; // show next button after selecting
    });
    answersEl.appendChild(button);
  });

  nextBtn.style.display = "none"; // hide next until an answer is picked
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === quizData[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}



