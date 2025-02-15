let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");

const questions = [
    {
        questionText: "What is the primary focus of software design?",
        options: [
            "Creating an efficient codebase.",
            "Defining the architecture and structure of the system.",
            "Ignoring requirements.",
            "Only developing user interfaces."
        ],
        correctIndex: 1
    },
    {
        questionText: "Architectural design primarily deals with:",
        options: [
            "High-level structure and component interactions.",
            "Detailed coding.",
            "End-user training.",
            "Hardware design."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is object-oriented design (OOD)?",
        options: [
            "A design paradigm based on objects and classes.",
            "A design that ignores data encapsulation.",
            "A process focused solely on procedural programming.",
            "A hardware layout technique."
        ],
        correctIndex: 0
    },
    {
        questionText: "In designing software solutions, what is a design document?",
        options: [
            "A detailed plan outlining the system architecture.",
            "A list of coding standards.",
            "A deployment manual.",
            "A user manual."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a benefit of using UML in software design?",
        options: [
            "It visually represents the system structure.",
            "It replaces the need for coding.",
            "It eliminates testing.",
            "It is only used for maintenance."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does data design involve?",
        options: [
            "Defining the structure of data storage and retrieval.",
            "Designing the user interface.",
            "Writing code in assembly language.",
            "Ignoring database requirements."
        ],
        correctIndex: 0
    },
    {
        questionText: "Procedural design focuses on:",
        options: [
            "The sequence of actions and interactions between functions.",
            "The hardware layout.",
            "Only defining data structures.",
            "Ignoring the flow of control."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which principle is important in both architectural and procedural design?",
        options: [
            "Modularity.",
            "Randomization.",
            "Hardcoding.",
            "Unstructured development."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the purpose of a design review?",
        options: [
            "To ensure the design meets requirements and quality standards.",
            "To immediately start coding.",
            "To finalize the testing phase.",
            "To replace documentation."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best describes 'software blueprint methodology'?",
        options: [
            "A systematic design approach using detailed planning and diagrams.",
            "A method for random code generation.",
            "A process that ignores user requirements.",
            "A non-structured design approach."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the primary focus of software design?",
        options: [
            "Creating an efficient codebase.",
            "Defining the architecture and structure of the system.",
            "Ignoring requirements.",
            "Only developing user interfaces."
        ],
        correctIndex: 1
    },
    {
        questionText: "Architectural design primarily deals with:",
        options: [
            "High-level structure and component interactions.",
            "Detailed coding.",
            "End-user training.",
            "Hardware design."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is object-oriented design (OOD)?",
        options: [
            "A design paradigm based on objects and classes.",
            "A design that ignores data encapsulation.",
            "A process focused solely on procedural programming.",
            "A hardware layout technique."
        ],
        correctIndex: 0
    },
    {
        questionText: "In designing software solutions, what is a design document?",
        options: [
            "A detailed plan outlining the system architecture.",
            "A list of coding standards.",
            "A deployment manual.",
            "A user manual."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a benefit of using UML in software design?",
        options: [
            "It visually represents the system structure.",
            "It replaces the need for coding.",
            "It eliminates testing.",
            "It is only used for maintenance."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does data design involve?",
        options: [
            "Defining the structure of data storage and retrieval.",
            "Designing the user interface.",
            "Writing code in assembly language.",
            "Ignoring database requirements."
        ],
        correctIndex: 0
    },
    {
        questionText: "Procedural design focuses on:",
        options: [
            "The sequence of actions and interactions between functions.",
            "The hardware layout.",
            "Only defining data structures.",
            "Ignoring the flow of control."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which principle is important in both architectural and procedural design?",
        options: [
            "Modularity.",
            "Randomization.",
            "Hardcoding.",
            "Unstructured development."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the purpose of a design review?",
        options: [
            "To ensure the design meets requirements and quality standards.",
            "To immediately start coding.",
            "To finalize the testing phase.",
            "To replace documentation."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best describes 'software blueprint methodology'?",
        options: [
            "A systematic design approach using detailed planning and diagrams.",
            "A method for random code generation.",
            "A process that ignores user requirements.",
            "A non-structured design approach."
        ],
        correctIndex: 0
    },
    {
        questionText: "In object-oriented design, encapsulation means:",
        options: [
            "Hiding the internal state and requiring all interaction to be performed through an object's methods.",
            "Exposing all object details.",
            "Ignoring object relationships.",
            "Using global variables."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which design principle improves code maintainability?",
        options: [
            "High cohesion and low coupling.",
            "Random module interactions.",
            "Excessive global variables.",
            "Unstructured code."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is a design pattern in software engineering?",
        options: [
            "A reusable solution to a common design problem.",
            "A one-off coding trick.",
            "A specific programming language feature.",
            "An error in design."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which tool is commonly used for software design?",
        options: [
            "UML diagram tools.",
            "Text editors only.",
            "Video editing software.",
            "Spreadsheets exclusively."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the significance of refining the software specification during design?",
        options: [
            "It bridges the gap between requirements and design.",
            "It is not necessary.",
            "It focuses only on coding style.",
            "It replaces the need for testing."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is NOT a design activity?",
        options: [
            "Creating a design document.",
            "Writing the source code.",
            "Reviewing design conformance.",
            "Defining architectural components."
        ],
        correctIndex: 1
    },
    {
        questionText: "The process of converting requirements into design elements is known as:",
        options: [
            "System analysis.",
            "Architectural design.",
            "Design specification.",
            "Debugging."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which design methodology emphasizes reusability and modularity?",
        options: [
            "Object-Oriented Design.",
            "Procedural programming.",
            "Structured programming.",
            "Functional programming."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the role of a software blueprint in design?",
        options: [
            "To outline the detailed structure and components of the system.",
            "To serve as the final code.",
            "To document testing procedures.",
            "To ignore design patterns."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which factor is critical for a successful software design?",
        options: [
            "Ignoring user needs.",
            "Consistency with requirements.",
            "Minimal documentation.",
            "Random module integration."
        ],
        correctIndex: 1
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
