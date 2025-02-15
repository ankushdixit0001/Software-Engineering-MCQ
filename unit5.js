let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");

const questions = [
    {
        questionText: "What is software maintenance?",
        options: [
            "The requirement analysis process.",
            "The design process.",
            "The initial coding phase.",
            "The process of updating and modifying software after deployment."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is NOT a type of software maintenance?",
        options: [
            "Perfective.",
            "Destructive.",
            "Adaptive.",
            "Corrective."
        ],
        correctIndex: 1
    },
    {
        questionText: "Corrective maintenance is primarily concerned with:",
        options: [
            "Adding new features.",
            "Fixing defects and errors.",
            "Upgrading hardware.",
            "Improving performance."
        ],
        correctIndex: 1
    },
    {
        questionText: "Adaptive maintenance involves:",
        options: [
            "Reducing system functionality.",
            "Ignoring technological changes.",
            "Fixing bugs only.",
            "Modifying the software to work in a new environment."
        ],
        correctIndex: 3
    },
    {
        questionText: "Perfective maintenance is aimed at:",
        options: [
            "Increasing code complexity.",
            "Avoiding changes.",
            "Removing existing features.",
            "Enhancing the software's functionality and performance."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is a key benefit of designing for maintainability?",
        options: [
            "Reduces software quality.",
            "Makes the system less flexible.",
            "Increases development time.",
            "Simplifies future updates and modifications."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which technique is commonly used in software maintenance?",
        options: [
            "Skipping testing.",
            "Ignoring user feedback.",
            "Refactoring.",
            "Random coding."
        ],
        correctIndex: 2
    },
    {
        questionText: "How does regular maintenance affect software longevity?",
        options: [
            "It increases hardware dependency.",
            "It improves performance and extends the software's useful life.",
            "It decreases reliability.",
            "It has no effect."
        ],
        correctIndex: 1
    },
    {
        questionText: "What does the term 'maintenance cost' refer to?",
        options: [
            "The cost of marketing.",
            "The cost of hardware.",
            "The expense associated with updating and supporting the software.",
            "The initial development cost."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which activity is a part of corrective maintenance?",
        options: [
            "Rewriting the entire system.",
            "Ignoring system errors.",
            "Debugging and fixing code errors.",
            "Adding new functionalities."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the primary goal of adaptive maintenance?",
        options: [
            "Skipping testing.",
            "Reducing user interaction.",
            "Enhancing the software's aesthetics.",
            "To modify the software for compatibility with new environments."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is a challenge in software maintenance?",
        options: [
            "Automated testing.",
            "Frequent updates.",
            "Clear documentation.",
            "Understanding legacy code."
        ],
        correctIndex: 3
    },
    {
        questionText: "How does perfective maintenance benefit software?",
        options: [
            "It ignores user feedback.",
            "It reduces system functionality.",
            "It complicates the codebase.",
            "It improves system performance and user satisfaction."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the importance of maintenance documentation?",
        options: [
            "It assists in future updates and troubleshooting.",
            "It only complicates the process.",
            "It is unnecessary.",
            "It is used for marketing purposes."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which maintenance type is typically performed to address security vulnerabilities?",
        options: [
            "Corrective maintenance.",
            "Adaptive maintenance.",
            "Preventive maintenance.",
            "Perfective maintenance."
        ],
        correctIndex: 2
    },
    {
        questionText: "How does designing for maintainability influence future software updates?",
        options: [
            "It simplifies modifications and reduces maintenance effort.",
            "It makes the software obsolete faster.",
            "It has no impact.",
            "It increases future complexity."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best describes 'preventive maintenance'?",
        options: [
            "Only focusing on bug fixes.",
            "Delaying maintenance.",
            "Ignoring potential issues.",
            "Activities aimed at preventing future problems in the software."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the impact of effective maintenance on user satisfaction?",
        options: [
            "It increases satisfaction by ensuring the software remains functional and up-to-date.",
            "It has no effect on satisfaction.",
            "It only affects developers.",
            "It decreases satisfaction."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which factor is critical in planning software maintenance?",
        options: [
            "Relying solely on external consultants.",
            "Avoiding stakeholder communication.",
            "Understanding system architecture and dependencies.",
            "Ignoring previous updates."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is a common challenge faced during software maintenance?",
        options: [
            "Legacy code complexity.",
            "Consistent design patterns.",
            "Rapid technological changes.",
            "Abundant documentation."
        ],
        correctIndex: 0
    }
];


let userAnswers = Array(questions.length).fill(null);

function init() {
    displayQuestions();
    displayLeaderboard();
}

function displayQuestions() {
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
        let questionElem = document.createElement("div");
        questionElem.classList.add("question");
        questionElem.innerHTML = `<p>${index + 1}. ${q.questionText}</p>`;

        let optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        q.options.forEach((option, i) => {
            let button = document.createElement("button");
            button.className = "btn-primary";
            button.innerText = option;
            button.onclick = () => checkAnswer(index, i, button);
            optionsDiv.appendChild(button);
        });

        questionElem.appendChild(optionsDiv);
        quizContainer.appendChild(questionElem);
    });
}

function checkAnswer(questionIndex, selectedIndex, button) {
    if (userAnswers[questionIndex] !== null) return;

    const question = questions[questionIndex];
    const options = button.parentElement.children;

    userAnswers[questionIndex] = selectedIndex; // Store the user's answer

    Array.from(options).forEach((btn) => (btn.disabled = true));

    if (selectedIndex === question.correctIndex) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        Array.from(options)[question.correctIndex].classList.add("correct");
    }
}

function submitQuiz() {
    const { totalAttempted, correctAnswers } = calculateScore();

    scoreDisplay.innerHTML = `
        <p><strong>Total Questions:</strong> ${questions.length}</p>
        <p><strong>Questions Attempted:</strong> ${totalAttempted}</p>
        <p><strong>Correct Answers:</strong> ${correctAnswers}</p>
    `;

    updateLeaderboard(correctAnswers);
    resultsContainer.style.display = "block";
    disableAllButtons();
}

function calculateScore() {
    let correctAnswers = 0;
    let totalAttempted = 0;

    userAnswers.forEach((answer, index) => {
        if (answer !== null) {
            totalAttempted++;
            if (answer === questions[index].correctIndex) {
                correctAnswers++;
            }
        }
    });

    return { totalAttempted, correctAnswers };
}

function disableAllButtons() {
    document.querySelectorAll(".options button").forEach((btn) => {
        btn.disabled = true;
    });
}

function updateLeaderboard(score) {
    const entry = {
        score: score,
        date: new Date().toLocaleString(),
    };

    let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboardData.push(entry);
    leaderboardData.sort((a, b) => b.score - a.score);
    leaderboardData = leaderboardData.slice(0, 7);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
    displayLeaderboard();
}

function displayLeaderboard() {
    leaderboard.innerHTML = "";
    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (leaderboardData.length === 0) {
        leaderboard.innerHTML = "<li>No scores yet. Be the first!</li>";
        return;
    }

    leaderboardData.forEach((entry) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${entry.score} correct</span> <span>${entry.date}</span>`;
        leaderboard.appendChild(li);
    });
}

function restartQuiz() {
    scoreDisplay.textContent = "";
    userAnswers.fill(null);
    resultsContainer.style.display = "none";
    displayQuestions();
}

// Ensure elements exist before adding event listeners
const submitBtn = document.getElementById("submit-quiz");
const restartBtn = document.getElementById("restart-quiz");

if (submitBtn) submitBtn.addEventListener("click", submitQuiz);
if (restartBtn) restartBtn.addEventListener("click", restartQuiz);

init();
