let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");

const questions = [
    {
        questionText: "What is the primary objective of requirements analysis?",
        options: [
            "To define the system's scope and functionalities.",
            "To write the code.",
            "To perform unit testing.",
            "To deploy the system."
        ],
        correctIndex: 0
    },
    {
        questionText: "In requirements analysis, what does 'system scope' refer to?",
        options: [
            "The hardware components used.",
            "The boundaries and limitations of the system.",
            "The programming language used.",
            "The physical location of the project."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which document outlines the software requirements?",
        options: [
            "Design Document.",
            "Software Requirements Specification (SRS).",
            "User Manual.",
            "Test Plan."
        ],
        correctIndex: 1
    },
    {
        questionText: "Functional requirements specify:",
        options: [
            "The color scheme of the UI.",
            "What the system should do.",
            "The hardware specifications.",
            "Marketing strategies."
        ],
        correctIndex: 1
    },
    {
        questionText: "Non-functional requirements include:",
        options: [
            "Source code structure.",
            "Performance and security.",
            "Database design.",
            "Hardware layout."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is requirement elicitation?",
        options: [
            "The process of coding.",
            "The process of gathering requirements from stakeholders.",
            "The process of testing.",
            "The process of deployment."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following is essential during requirements analysis?",
        options: [
            "Ignoring stakeholder feedback.",
            "Skipping documentation.",
            "Clear and precise communication.",
            "Minimal planning."
        ],
        correctIndex: 2
    },
    {
        questionText: "The process of validating requirements ensures:",
        options: [
            "They are feasible and testable.",
            "They are vague.",
            "They ignore user needs.",
            "They are unimportant."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which term describes the refinement of requirements?",
        options: [
            "Prototyping.",
            "Specification.",
            "Deployment.",
            "Coding."
        ],
        correctIndex: 0
    },
    {
        questionText: "In the context of requirements analysis, what is 'scope creep'?",
        options: [
            "Reducing project scope.",
            "Strictly following the requirements.",
            "Uncontrolled changes or continuous growth in project scope.",
            "Analyzing system performance."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the importance of a well-defined SRS document?",
        options: [
            "It is not important.",
            "It complicates the development process.",
            "It delays project timelines.",
            "It ensures the software meets stakeholder expectations."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which technique is used to refine user requirements?",
        options: [
            "Random coding.",
            "Prototyping.",
            "Ignoring feedback.",
            "Skipping analysis."
        ],
        correctIndex: 1
    },
    {
        questionText: "How does requirement analysis impact project cost?",
        options: [
            "It has no impact on cost.",
            "Clear requirements help control costs.",
            "Unclear requirements increase the risk of cost overruns.",
            "Both (b) and (c)."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is meant by 'stakeholder analysis'?",
        options: [
            "Ignoring the opinions of all stakeholders.",
            "Focusing only on developers.",
            "Analyzing hardware specifications.",
            "Identifying and assessing stakeholders' interests and influence."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is an example of a non-functional requirement?",
        options: [
            "The system shall allow user login.",
            "The system shall provide report generation.",
            "The system must process 100 transactions per second.",
            "The system must enable user registration."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the primary purpose of a requirement specification document?",
        options: [
            "To eliminate the need for reviews.",
            "To replace testing documentation.",
            "To guide the design and development process.",
            "To create marketing materials."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is a challenge in requirements analysis?",
        options: [
            "Clear stakeholder communication.",
            "Adequate documentation.",
            "Ambiguous requirements.",
            "Thorough testing."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is a requirement baseline?",
        options: [
            "A list of optional features.",
            "A fixed set of requirements agreed upon by stakeholders.",
            "A coding standard.",
            "A temporary draft of requirements."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is the outcome of successful requirements analysis?",
        options: [
            "Ambiguous project guidelines.",
            "A clear and actionable set of requirements.",
            "Increased development time.",
            "A decrease in project scope."
        ],
        correctIndex: 1
    },
    {
        questionText: "What does the term 'traceability' refer to in SRS documents?",
        options: [
            "The ability to trace network data.",
            "The ability to link requirements to their origins.",
            "The ability to trace hardware components.",
            "The ability to trace code execution."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which document is critical for ensuring all requirements are captured?",
        options: [
            "Design Document.",
            "Software Requirements Specification (SRS).",
            "Code Documentation.",
            "Deployment Plan."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which method is used for requirements validation?",
        options: [
            "Reviews and inspections.",
            "Ignoring feedback.",
            "Skipping stakeholder meetings.",
            "Random development."
        ],
        correctIndex: 0
    },









    {
        questionText: "What is the role of stakeholders in requirements analysis?",
        options: [
            "They write the code.",
            "They test the software.",
            "They provide inputs and validate requirements.",
            "They deploy the system."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which technique is used to refine user requirements?",
        options: [
            "Skipping analysis.",
            "Ignoring feedback.",
            "Random coding.",
            "Prototyping."
        ],
        correctIndex: 3
    },
    {
        questionText: "Requirements analysis can help prevent:",
        options: [
            "Efficient project management.",
            "High software quality.",
            "Scope creep.",
            "Reduced development time."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the purpose of requirements review?",
        options: [
            "To skip documentation.",
            "To ensure requirements are correct and complete.",
            "To start coding immediately.",
            "To ignore inconsistencies."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following is an example of a functional requirement?",
        options: [
            "The system shall have an attractive interface.",
            "The system shall be user-friendly.",
            "The system shall be scalable.",
            "The system shall allow users to log in."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is an example of a non-functional requirement?",
        options: [
            "The system shall allow user login.",
            "The system must process 100 transactions per second.",
            "The system must enable user registration.",
            "The system shall provide report generation."
        ],
        correctIndex: 1
    },
    {
        questionText: "How does requirement analysis impact project cost?",
        options: [
            "Unclear requirements increase the risk of cost overruns.",
            "Clear requirements help control costs.",
            "Both (a) and (b).",
            "It has no impact on cost."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the benefit of involving end-users in requirements elicitation?",
        options: [
            "It has no benefits.",
            "It complicates the design.",
            "It improves requirement accuracy.",
            "It slows down the process."
        ],
        correctIndex: 2
    },
    {
        questionText: "What does the term 'requirement prioritization' mean?",
        options: [
            "Determining the order of importance for requirements.",
            "Ignoring less important requirements.",
            "Randomly selecting requirements.",
            "Implementing all requirements simultaneously."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a challenge in requirements analysis?",
        options: [
            "Clear stakeholder communication.",
            "Thorough testing.",
            "Adequate documentation.",
            "Ambiguous requirements."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which method is used for requirements validation?",
        options: [
            "Skipping stakeholder meetings.",
            "Ignoring feedback.",
            "Reviews and inspections.",
            "Random development."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the primary purpose of a requirement specification document?",
        options: [
            "To create marketing materials.",
            "To guide the design and development process.",
            "To replace testing documentation.",
            "To eliminate the need for reviews."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following helps in achieving consistency in requirements?",
        options: [
            "Vague descriptions.",
            "Ad-hoc documents.",
            "Random notes.",
            "Standardized templates."
        ],
        correctIndex: 3
    },
    {
        questionText: "The term 'feasibility analysis' in requirements analysis is used to:",
        options: [
            "Design the UI.",
            "Assess if the requirements are achievable.",
            "Skip maintenance.",
            "Write the code."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is meant by 'stakeholder analysis'?",
        options: [
            "Ignoring the opinions of all stakeholders.",
            "Identifying and assessing stakeholders' interests and influence.",
            "Analyzing hardware specifications.",
            "Focusing only on developers."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is a requirement baseline?",
        options: [
            "A fixed set of requirements agreed upon by stakeholders.",
            "A list of optional features.",
            "A temporary draft of requirements.",
            "A coding standard."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a benefit of a well-defined requirement specification?",
        options: [
            "Increased project delays.",
            "Reduced ambiguity.",
            "Higher development costs.",
            "Reduced stakeholder involvement."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is the role of prototypes in requirements analysis?",
        options: [
            "To replace the final system.",
            "To serve as the final product.",
            "To validate and refine requirements.",
            "To ignore stakeholder input."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which document is critical for ensuring all requirements are captured?",
        options: [
            "Deployment Plan.",
            "Design Document.",
            "Code Documentation.",
            "Software Requirements Specification (SRS)."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the outcome of successful requirements analysis?",
        options: [
            "A decrease in project scope.",
            "A clear and actionable set of requirements.",
            "Ambiguous project guidelines.",
            "Increased development time."
        ],
        correctIndex: 1
    },
    {
        questionText: "In requirements analysis, what does 'user requirement' mean?",
        options: [
            "A description of the hardware.",
            "The software's pricing model.",
            "A statement of what users need from the system.",
            "The coding language used."
        ],
        correctIndex: 2
    },

    {
        questionText: "What is the primary goal of requirements analysis?",
        options: [
            "To finalize hardware selection.",
            "To start coding immediately.",
            "To design the user interface only.",
            "To clearly define what the system should do."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which document is most critical during requirements analysis?",
        options: [
            "Design Document.",
            "User Manual.",
            "Software Requirements Specification (SRS).",
            "Test Plan."
        ],
        correctIndex: 2
    },
    {
        questionText: "What does 'scope' refer to in requirements analysis?",
        options: [
            "The budget for hardware.",
            "The length of the code.",
            "The boundaries of the system’s functionalities.",
            "The number of developers."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is an example of a functional requirement?",
        options: [
            "The system shall load quickly.",
            "The system shall be secure.",
            "The system shall have an appealing interface.",
            "The system shall allow user authentication."
        ],
        correctIndex: 3
    },
    {
        questionText: "What characterizes a non-functional requirement?",
        options: [
            "They detail specific features.",
            "They describe quality attributes like performance and usability.",
            "They focus solely on coding language.",
            "They are optional."
        ],
        correctIndex: 1
    },
    {
        questionText: "How does requirement elicitation typically take place?",
        options: [
            "By copying previous projects.",
            "Through interviews, surveys, and workshops with stakeholders.",
            "Without involving users.",
            "By randomly generating ideas."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is meant by 'requirement traceability'?",
        options: [
            "Ignoring the origins of requirements.",
            "The random documentation of features.",
            "The ability to link each requirement to its source and corresponding design elements.",
            "Tracing network data."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following ensures that requirements are achievable?",
        options: [
            "Adopting every user request.",
            "Feasibility analysis.",
            "Delaying reviews.",
            "Ignoring constraints."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is the benefit of a well-documented SRS?",
        options: [
            "It provides a clear reference for design, implementation, and testing.",
            "It replaces the need for code documentation.",
            "It is only useful for marketing.",
            "It slows down the development process."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which method is commonly used to capture user requirements?",
        options: [
            "Use case diagrams.",
            "Ignoring stakeholder interviews.",
            "Random brainstorming without structure.",
            "Sole reliance on existing code."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'ambiguity' in requirements imply?",
        options: [
            "That the requirements are unclear or open to multiple interpretations.",
            "That the requirements are finalized.",
            "That the requirements are well-tested.",
            "That the requirements are detailed and specific."
        ],
        correctIndex: 0
    },
    {
        questionText: "How can requirement conflicts be resolved?",
        options: [
            "By ignoring conflicting requirements.",
            "By random selection.",
            "By deferring decisions indefinitely.",
            "Through stakeholder meetings and negotiation."
        ],
        correctIndex: 3
    },
    {
        questionText: "What is the purpose of a requirements review?",
        options: [
            "To finalize hardware choices.",
            "To ensure the requirements are complete, consistent, and verifiable.",
            "To reduce the documentation burden.",
            "To start coding immediately."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which technique is effective for validating requirements?",
        options: [
            "Skipping reviews.",
            "Prototyping.",
            "Ignoring user feedback.",
            "Random testing."
        ],
        correctIndex: 1
    },
    {
        questionText: "What role do stakeholders play in requirements analysis?",
        options: [
            "They only handle marketing.",
            "They write the final code.",
            "They provide insights, validate needs, and help prioritize features.",
            "They are not involved in the process."
        ],
        correctIndex: 2
    },
    {
        questionText: "How does requirement prioritization affect project planning?",
        options: [
            "It determines which features are most critical for early development.",
            "It delays the project indefinitely.",
            "It has no impact on scheduling.",
            "It solely depends on developer preference."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is an important quality of a requirement?",
        options: [
            "Over-complexity.",
            "Clarity.",
            "Redundancy.",
            "Vagueness."
        ],
        correctIndex: 1
    },
    {
        questionText: "What is 'scope creep' in the context of requirements?",
        options: [
            "A reduction in project scope.",
            "A controlled process of feature addition.",
            "The finalization of all requirements.",
            "The uncontrolled expansion of project scope."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which activity helps in identifying missing requirements?",
        options: [
            "Skipping user interviews.",
            "Ignoring stakeholder feedback.",
            "Requirements walkthroughs.",
            "Random documentation."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the significance of requirement baselining?",
        options: [
            "It allows for unregulated changes.",
            "It is rarely used in modern projects.",
            "It establishes a fixed set of requirements as a reference for further development.",
            "It is only a temporary draft."
        ],
        correctIndex: 2
    },
    {
        questionText: "How do prototypes assist in requirements analysis?",
        options: [
            "By eliminating stakeholder involvement.",
            "By providing a tangible model for feedback and refinement.",
            "By finalizing design without iteration.",
            "By replacing the need for an SRS."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which tool is most commonly used for requirements management?",
        options: [
            "Spreadsheet software exclusively.",
            "Basic text editors only.",
            "Requirements management software (e.g., DOORS, JIRA).",
            "Image editing software."
        ],
        correctIndex: 2
    },
    {
        questionText: "What does 'requirements volatility' refer to?",
        options: [
            "The stability of a fixed set of requirements.",
            "The likelihood of requirements changing over time.",
            "The immutability of project goals.",
            "The infrequency of stakeholder meetings."
        ],
        correctIndex: 1
    },
    {
        questionText: "Which of the following best describes 'user stories'?",
        options: [
            "Short, simple descriptions of a feature told from the perspective of the end user.",
            "Marketing narratives.",
            "Detailed technical documents.",
            "Irrelevant to agile development."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the impact of incomplete requirements on a project?",
        options: [
            "Improved clarity.",
            "No significant impact.",
            "Increased risk of errors and rework.",
            "Faster development."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is a technique to ensure requirement consistency?",
        options: [
            "Skipping stakeholder analysis.",
            "Random selection of requirements.",
            "Cross-checking requirements with design documents.",
            "Avoiding reviews."
        ],
        correctIndex: 2
    },
    {
        questionText: "How can requirement ambiguity be minimized?",
        options: [
            "By adding more vague terms.",
            "By deferring all decisions.",
            "By using precise language and clear definitions.",
            "By ignoring documentation."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the purpose of a requirements traceability matrix?",
        options: [
            "To replace the SRS entirely.",
            "To track only the design changes.",
            "To map each requirement to its corresponding design, code, and test cases.",
            "To create random connections between features."
        ],
        correctIndex: 2
    },
    {
        questionText: "Which of the following is a sign of well-defined requirements?",
        options: [
            "They lack prioritization.",
            "They are unambiguous and testable.",
            "They are overly generic.",
            "They are open to multiple interpretations."
        ],
        correctIndex: 1
    },
    {
        questionText: "How does effective requirement management affect project cost?",
        options: [
            "It helps control costs by reducing rework.",
            "It has no impact on budget.",
            "It always increases the cost.",
            "It solely depends on the design phase."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is meant by 'functional decomposition' in requirements analysis?",
        options: [
            "Breaking down complex functions into simpler sub-functions.",
            "Ignoring individual function details.",
            "Combining all functions into a single process.",
            "Relying solely on high-level descriptions."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following helps in validating system requirements?",
        options: [
            "Avoiding any customer feedback.",
            "Skipping the documentation phase.",
            "Stakeholder reviews and acceptance testing.",
            "Relying only on developer intuition."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the role of regulatory compliance in requirements analysis?",
        options: [
            "Ensuring that the system meets relevant legal and industry standards.",
            "Skipping compliance altogether.",
            "Ignoring legal constraints.",
            "Focusing only on internal documentation."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which method can be used to capture complex system interactions during requirements gathering?",
        options: [
            "Ignoring interactions.",
            "Sole reliance on user interviews.",
            "Sequence diagrams.",
            "Simple text lists."
        ],
        correctIndex: 2
    },
    {
        questionText: "What is the benefit of using a structured template for requirement documentation?",
        options: [
            "It standardizes the information and improves clarity.",
            "It restricts creative input.",
            "It complicates the process unnecessarily.",
            "It has no effect on quality."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does early stakeholder involvement affect requirements analysis?",
        options: [
            "It leads to more accurate and comprehensive requirements.",
            "It is generally avoided.",
            "It reduces the quality of the SRS.",
            "It delays the development process significantly."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which factor is most critical when reviewing requirements?",
        options: [
            "Completeness, clarity, and feasibility.",
            "The developer’s personal opinions.",
            "The number of pages in the SRS.",
            "Length and verbosity."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'requirements engineering' encompass?",
        options: [
            "Only post-deployment modifications.",
            "Only the documentation phase.",
            "Only coding standards.",
            "The process of eliciting, analyzing, documenting, and managing requirements."
        ],
        correctIndex: 3
    },
    {
        questionText: "Which of the following is an effective technique for resolving requirement discrepancies?",
        options: [
            "Deferring all decisions until after implementation.",
            "Unilateral decision-making by developers.",
            "Facilitated workshops with all stakeholders.",
            "Ignoring conflicting opinions."
        ],
        correctIndex: 2
    },
    {
        questionText: "How does effective requirements analysis contribute to project success?",
        options: [
            "By minimizing the need for testing.",
            "By delaying the start of implementation.",
            "By providing a clear roadmap that reduces ambiguity and rework.",
            "By increasing the complexity of the design process."
        ],
        correctIndex: 2
    }
];

// More questions can be added following this structure.


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
