let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");

const questions = [
    {
        questionText: "What is the main goal of software implementation?",
        options: [
            "To create the design document.",
            "To gather requirements.",
            "To perform testing.",
            "To write code according to the design."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following best describes good coding practices?",
        options: [
            "Using outdated programming methods.",
            "Writing code without comments.",
            "Ignoring coding standards.",
            "Writing modular, readable, and maintainable code."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the role of an Integrated Development Environment (IDE)?",
        options: [
            "To create user manuals.",
            "To serve as a hardware diagnostic tool.",
            "To replace the need for code.",
            "To provide tools for coding, debugging, and testing."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which process helps in detecting and fixing errors in code?",
        options: [
            "Requirement analysis.",
            "Debugging.",
            "Documentation.",
            "Design specification."
        ],
        correctIndex: 1
    },
    {
        questionText: "What does code review typically involve?",
        options: [
            "Avoiding peer feedback.",
            "Ignoring software requirements.",
            "Examining code for errors, adherence to standards, and maintainability.",
            "Randomly deleting code."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is a benefit of using version control systems?",
        options: [
            "Tracking changes and managing code revisions.",
            "Eliminating the need for testing.",
            "Reducing documentation.",
            "Increasing coding errors."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the significance of following a coding standard?",
        options: [
            "It is optional and not important.",
            "It slows down development.",
            "It increases code size.",
            "It ensures consistency and readability across the codebase."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which environment is essential for supporting programming activities?",
        options: [
            "A non-digital process.",
            "A text-only editor.",
            "A programming support environment including debuggers and compilers.",
            "A purely hardware-based system."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is meant by 'implementation issues' in software projects?",
        options: [
            "Customer feedback.",
            "Document formatting errors.",
            "Challenges faced during the coding and integration phases.",
            "Problems with hardware."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following best describes 'good coding style'?",
        options: [
            "Code without any comments.",
            "Inconsistent indentation and naming conventions.",
            "Clear, consistent, and well-documented code.",
            "Random and unstructured code."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the purpose of writing pseudocode during implementation?",
        options: [
            "To finalize testing strategies.",
            "To document design patterns.",
            "To replace code completely.",
            "To outline the logic before writing actual code."
        ],
        correctIndex: 3
    },
    {
        questionText: "How does refactoring contribute to software implementation?",
        options: [
            "It is only done during maintenance.",
            "It introduces new bugs.",
            "It improves code readability and structure.",
            "It is not recommended."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is continuous integration (CI)?",
        options: [
            "A process of writing code without testing.",
            "A deployment strategy.",
            "The practice of frequently merging code changes into a shared repository.",
            "A method of delaying code reviews."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is an example of a coding best practice?",
        options: [
            "Overcomplicating functions.",
            "Ignoring error handling.",
            "Using meaningful variable names.",
            "Using ambiguous abbreviations."
        ],
        correctIndex: 2
    },
    {
        questionText: "What does 'debugging' primarily aim to achieve?",
        options: [
            "Increasing code complexity.",
            "Identifying and resolving defects in code.",
            "Introducing new features.",
            "Ignoring potential errors."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is a common tool used for code analysis?",
        options: [
            "Word processors.",
            "Presentation tools.",
            "Static code analyzers.",
            "Graphic design software."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which practice helps in early detection of integration issues?",
        options: [
            "Continuous integration.",
            "Avoiding automated tests.",
            "Delaying code reviews.",
            "Postponing testing."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the purpose of unit testing?",
        options: [
            "To ignore code quality.",
            "To skip debugging.",
            "To test the entire system at once.",
            "To test individual components of the code."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is a benefit of modular code in implementation?",
        options: [
            "Slower development process.",
            "Harder debugging.",
            "Increased complexity.",
            "Easier maintenance and testing."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following describes a robust programming support environment?",
        options: [
            "Tools that replace human developers.",
            "Tools that only create graphics.",
            "Tools that ignore coding errors.",
            "Tools that assist in coding, debugging, and testing."
        ],
        correctIndex: 3
    },
    {
        questionText: "How does code documentation benefit developers?",
        options: [
            "It is unnecessary and ignored.",
            "It is only useful for testers.",
            "It facilitates understanding and maintenance of the code.",
            "It complicates the code."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is NOT an advantage of using an IDE?",
        options: [
            "Integrated debugging tools.",
            "Integrated source control.",
            "Code auto-completion.",
            "Increased manual compilation."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is meant by 'implementation correctness'?",
        options: [
            "The code correctly implements the design and requirements.",
            "The code is written without comments.",
            "The code ignores design principles.",
            "The code is randomly generated."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best defines 'coding efficiency'?",
        options: [
            "Prioritizing aesthetics over function.",
            "Ignoring performance considerations.",
            "Writing unnecessarily verbose code.",
            "Writing code that performs well and is resource-efficient."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the role of continuous testing in software implementation?",
        options: [
            "To delay deployment.",
            "To ignore minor errors.",
            "To reduce the need for debugging.",
            "To identify issues early and ensure code quality."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is a primary goal of software implementation?",
        options: [
            "Ignoring coding standards.",
            "Focusing solely on user interface.",
            "Skipping version control.",
            "Translating design into functional code."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the significance of code readability?",
        options: [
            "It makes it easier for developers to understand and modify code.",
            "It increases compilation time.",
            "It is irrelevant to code quality.",
            "It only matters for beginners."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does the term 'source control' refer to?",
        options: [
            "The management of changes to the source code.",
            "The process of testing the code.",
            "The encryption of code.",
            "The elimination of comments."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does automated testing benefit the implementation process?",
        options: [
            "It increases the likelihood of errors.",
            "It eliminates the need for code reviews.",
            "It reduces manual testing efforts and increases reliability.",
            "It slows down the development process."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the role of a software implementation plan?",
        options: [
            "To replace the design document.",
            "To document hardware specifications.",
            "To define system requirements.",
            "To outline the process for converting design into code."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following best describes 'integration testing'?",
        options: [
            "Skipping system-level tests.",
            "Testing the interaction between different modules.",
            "Testing a single module in isolation.",
            "Testing only the user interface."
        ],
        correctIndex: 1
    },
    {
        questionText: "What does 'regression testing' ensure?",
        options: [
            "That requirements are ignored.",
            "That new features are not tested.",
            "That the code remains unchanged.",
            "That recent code changes have not adversely affected existing functionalities."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which practice improves software reliability during implementation?",
        options: [
            "Delaying integration.",
            "Avoiding any code reviews.",
            "Ignoring unit testing.",
            "Regular code refactoring."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is meant by 'coding standard compliance'?",
        options: [
            "Writing code without any standards.",
            "Random coding practices.",
            "Ignoring formatting rules.",
            "Adhering to predefined guidelines for writing code."
        ],
        correctIndex: 3
    },
    {
        questionText: "How does refactoring affect code quality?",
        options: [
            "It introduces new bugs by default.",
            "It reduces maintainability.",
            "It is only performed post-deployment.",
            "It improves structure and readability."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the benefit of using automated build tools?",
        options: [
            "They increase manual intervention.",
            "They streamline the process of compiling and testing code.",
            "They are irrelevant to code integration.",
            "They complicate the development process."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which phase involves verifying that the implementation meets the design?",
        options: [
            "Deployment.",
            "Requirement analysis.",
            "Testing.",
            "Maintenance."
        ],
        correctIndex: 2
    },
    {
        questionText: "What does 'coding error rate' refer to?",
        options: [
            "The frequency of defects in the written code.",
            "The number of lines of code.",
            "The time taken to write code.",
            "The speed of code execution."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is an example of a good commenting practice?",
        options: [
            "Using comments to disable code.",
            "Providing clear explanations of complex code segments.",
            "Writing overly verbose comments.",
            "Avoiding comments entirely."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is the role of a code profiler?",
        options: [
            "To enforce coding standards.",
            "To replace debugging.",
            "To analyze the performance of the code.",
            "To count the lines of code."
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
