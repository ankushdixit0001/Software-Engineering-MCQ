let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");

const questions = [
    {
        questionText: "What is configuration management in software engineering?",
        options: [
            "The process of user training.",
            "The process of hardware maintenance.",
            "The process of tracking and controlling changes in the software.",
            "The process of writing code."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which tool is widely used for version control?",
        options: [
            "Notepad.",
            "Git.",
            "MS Word.",
            "Photoshop."
        ],
        correctIndex: 1
    },
    {
        questionText: "CASE tools in software engineering are used for:",
        options: [
            "Replacing developers.",
            "Increasing documentation errors.",
            "Designing hardware components.",
            "Automating various software development processes."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the main purpose of using a configuration management system?",
        options: [
            "To replace code reviews.",
            "To ensure consistency and traceability of changes.",
            "To slow down development.",
            "To eliminate testing."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following is an example of a version control system?",
        options: [
            "PowerPoint.",
            "Word.",
            "Git.",
            "Excel."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is a key benefit of configuration management?",
        options: [
            "Increased code complexity.",
            "Reduced software reliability.",
            "Elimination of the need for documentation.",
            "Improved coordination and tracking of changes."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which tool is commonly associated with continuous integration?",
        options: [
            "Photoshop.",
            "Jenkins.",
            "Calculator.",
            "WordPad."
        ],
        correctIndex: 1
    },
    {
        questionText: "In configuration management, what does 'baseline' refer to?",
        options: [
            "A fluctuating codebase.",
            "An outdated version.",
            "A prototype design.",
            "A fixed reference point in the development process."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the role of a build automation tool?",
        options: [
            "To document code changes.",
            "To manually compile code.",
            "To eliminate version control.",
            "To automate the process of compiling and testing code."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is a benefit of using CASE tools?",
        options: [
            "They streamline design, analysis, and testing processes.",
            "They replace the need for coding.",
            "They complicate documentation.",
            "They are used solely for debugging."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the importance of configuration management in large projects?",
        options: [
            "It increases project complexity.",
            "It ensures that changes are tracked and the system remains consistent.",
            "It replaces the need for requirement analysis.",
            "It is irrelevant for large projects."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following best describes a practical example in software engineering?",
        options: [
            "A real-world case study used to illustrate theoretical concepts.",
            "A marketing plan.",
            "A hypothetical scenario with no basis in reality.",
            "A design blueprint for hardware."
        ],
        correctIndex: 0
    },
    {
        questionText: "How do CASE tools benefit software development?",
        options: [
            "They eliminate the need for human intervention.",
            "They slow down the process.",
            "They automate repetitive tasks and improve accuracy.",
            "They are only used for user training."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which tool would be most appropriate for managing source code versions?",
        options: [
            "Microsoft Word.",
            "Git.",
            "Notepad.",
            "Adobe Photoshop."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is the primary focus of configuration management?",
        options: [
            "Increasing system complexity.",
            "Reducing user interaction.",
            "Ignoring version history.",
            "Managing changes to the software artifacts."
        ],
        correctIndex: 3
    },
    {
        questionText: "How does configuration management contribute to software quality?",
        options: [
            "It complicates the development process.",
            "It ensures consistent changes and reduces the risk of errors.",
            "It eliminates the need for testing.",
            "It increases maintenance effort."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is a key challenge in configuration management?",
        options: [
            "Skipping code reviews.",
            "Ignoring version control.",
            "Reducing documentation.",
            "Coordinating changes among multiple team members."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following best describes 'change management' in configuration management?",
        options: [
            "A tool for user training.",
            "A method of code deletion.",
            "Ignoring software updates.",
            "The process of managing updates and modifications to the software."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the purpose of a configuration management plan?",
        options: [
            "To eliminate the need for testing.",
            "To replace the need for coding.",
            "To document user interfaces.",
            "To outline how changes will be tracked and managed."
        ],
        correctIndex: 3
    },
    {
        questionText: "How do practical examples in software engineering assist students?",
        options: [
            "They complicate the learning process.",
            "They replace the need for hands-on practice.",
            "They illustrate theoretical concepts with real-world scenarios.",
            "They are irrelevant to academic study."
        ],
        correctIndex: 2
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
