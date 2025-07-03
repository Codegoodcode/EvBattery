const quizData = [
  {
    question: "What is the main benefit of battery swapping?",
    options: ["Speed", "Cost", "Battery lifespan"],
    answer: 0,
  },
  {
    question: "Typical swap time is under how many minutes?",
    options: ["5", "15", "30"],
    answer: 0,
  },
  {
    question: "Battery swapping reduces ______ compared to charging.",
    options: ["Downtime", "Range", "Weight"],
    answer: 0,
  },
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

function loadQuiz() {
  quizData.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("p-4", "bg-gray-300", "rounded");
    qDiv.innerHTML = `
      <p class="font-semibold">${index + 1}. ${item.question}</p>
      ${item.options
        .map(
          (opt, i) => `
        <label class="block mt-2">
          <input type="radio" name="q${index}" value="${i}" /> ${opt}
        </label>
      `
        )
        .join("")}
    `;
    quizContainer.appendChild(qDiv);
  });
}

function calculateResult() {
  let score = 0;
  quizData.forEach((item, index) => {
    const answer = document.querySelector(`input[name=q${index}]:checked`);
    if (answer && parseInt(answer.value) === item.answer) score++;
  });
  resultContainer.textContent = `You scored ${score} out of ${quizData.length}.`;
}

document
  .getElementById("submit-quiz")
  .addEventListener("click", calculateResult);

loadQuiz();

/* Mobile menu toggle in script.js */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
