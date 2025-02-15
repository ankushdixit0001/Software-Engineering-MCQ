let quizContainer = document.getElementById("quiz-container");
let submitQuizBtn = document.getElementById("submit-quiz");
let scoreDisplay = document.getElementById("score");
let leaderboard = document.getElementById("leaderboard");
let resultsContainer = document.getElementById("results");
const questions = [
  {
    questionText: "What is Software Engineering?",
    options: [
      "Study of computers",
      "Systematic development of software",
      "Networking principles",
      "None of the above",
    ],
    correctIndex: 1,
  },
  {
    questionText: "Which model is not a software development model?",
    options: ["Waterfall", "Spiral", "Agile", "Hardware"],
    correctIndex: 3,
  },
  {
    questionText: "The Waterfall model is an example of a:",
    options: [
      "Iterative development model.",
      "Linear sequential model.",
      "Rapid prototyping model.",
      "Agile model.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "Agile methodology emphasizes:",
    options: [
      "Fixed scope and timeline.",
      "Continuous iteration and customer feedback.",
      "Extensive upfront documentation.",
      "A single-pass design process.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "Which model is characterized by iterative risk assessment?",
    options: [
      "Waterfall model.",
      "Spiral model.",
      "V-Model.",
      "Incremental model.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "Software Engineering involves:",
    options: [
      "Only coding.",
      "Both development and maintenance.",
      "Only testing.",
      "Only project management.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which term is used to describe problems in software development due to increasing complexity?",
    options: [
      "Software efficiency.",
      "Software crisis.",
      "Software stability.",
      "Software optimization.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "A generic view of software engineering includes:",
    options: [
      "Only coding.",
      "A complete software life cycle.",
      "Only maintenance.",
      "Only requirement gathering.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following is NOT considered a software development paradigm?",
    options: [
      "Waterfall model.",
      "Agile methodology.",
      "Spiral model.",
      "Hardware engineering.",
    ],
    correctIndex: 3,
  },
  {
    questionText: "The term 'iterative development' refers to:",
    options: [
      "Developing the software in a single pass.",
      "Repeating cycles of development with feedback.",
      "Avoiding documentation.",
      "Designing without testing.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which process model involves sequential phases where each phase must be completed before the next begins?",
    options: ["Agile.", "Waterfall.", "Spiral.", "Incremental."],
    correctIndex: 1,
  },
  {
    questionText:
      "Which methodology is best suited for projects with rapidly changing requirements?",
    options: [
      "Waterfall model.",
      "Agile methodology.",
      "V-Model.",
      "Big Bang model.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "What does the term 'systematic' imply in software engineering?",
    options: [
      "Random actions.",
      "Organized and planned procedures.",
      "Minimal planning.",
      "Ignoring standard practices.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "In software engineering, a 'paradigm' refers to:",
    options: [
      "A programming language.",
      "A model or approach for software development.",
      "A type of hardware.",
      "A testing tool.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following is a benefit of using a structured software development process?",
    options: [
      "Increased development errors.",
      "Improved project tracking and quality.",
      "Reduced documentation.",
      "Higher costs and time overruns.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "The iterative model in software engineering is best described as:",
    options: [
      "A linear process with no feedback loops.",
      "A process where each phase is repeated until satisfactory results are achieved.",
      "A process without any planning.",
      "A one-time development effort.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is a major drawback of the Waterfall model?",
    options: [
      "It is too flexible.",
      "It does not handle changes well once a phase is completed.",
      "It encourages frequent changes.",
      "It minimizes documentation.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "In agile development, what is the role of the customer?",
    options: [
      "Passive observer.",
      "Active participant providing continuous feedback.",
      "Sole decision maker on technical design.",
      "Not involved at all.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following best describes a software life cycle?",
    options: [
      "A model that only includes coding and testing.",
      "A complete process from requirement gathering to maintenance.",
      "A method for hardware repair.",
      "A cycle that repeats the same steps indefinitely.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What does the 'Spiral' model emphasize in its process?",
    options: [
      "Linear progression without iteration.",
      "Risk analysis and iterative refinement.",
      "Single-phase development.",
      "Avoiding customer input.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which factor is NOT typically considered in a software development paradigm?",
    options: [
      "Customer involvement.",
      "Hardware maintenance.",
      "Process flexibility.",
      "Risk management.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "In the context of software engineering, what does 'maintenance' refer to?",
    options: [
      "Initial coding only.",
      "Ongoing support and updates post-deployment.",
      "Only hardware support.",
      "Project planning.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "A software project following a well-defined process model will most likely:",
    options: [
      "Experience more errors.",
      "Have structured development phases.",
      "Skip requirement gathering.",
      "Focus solely on coding.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is the primary goal of Software Engineering?",
    options: [
      "To create unreliable software.",
      "To develop high-quality software systematically.",
      "To design hardware components.",
      "To avoid any testing.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following is a common risk in software projects?",
    options: [
      "Over-planning.",
      "Scope creep.",
      "Excessive documentation.",
      "Minimal customer involvement.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "What is the significance of documentation in software engineering?",
    options: [
      "It slows down the process.",
      "It provides a reference for future maintenance and understanding.",
      "It is not necessary.",
      "It only serves as a legal document.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which software development model is known for its heavy documentation and planning?",
    options: [
      "Agile.",
      "Waterfall.",
      "Rapid Prototyping.",
      "Extreme Programming.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "In which model is the software tested only after the development phase is completed?",
    options: [
      "Waterfall model.",
      "Agile model.",
      "Iterative model.",
      "Spiral model.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What does 'prototyping' in software engineering imply?",
    options: [
      "Creating a full-fledged system immediately.",
      "Developing a preliminary version to explore ideas.",
      "Avoiding any testing.",
      "Ignoring user feedback.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which paradigm is typically associated with object-oriented approaches?",
    options: [
      "Procedural programming.",
      "Object-Oriented Programming (OOP).",
      "Structured programming.",
      "Assembly language programming.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "How does Software Engineering contribute to project management?",
    options: [
      "It eliminates the need for planning.",
      "It provides structured processes for project planning, execution, and monitoring.",
      "It ignores resource management.",
      "It focuses solely on technical aspects.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following is a primary concern in the design of software systems?",
    options: [
      "Aesthetics of hardware.",
      "System architecture and component interaction.",
      "User personal preferences.",
      "Unstructured code.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is the benefit of iterative development?",
    options: [
      "No feedback is incorporated.",
      "It allows for frequent reassessment and improvement.",
      "It is rigid and unchangeable.",
      "It delays customer involvement.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "Which of these is considered a software quality attribute?",
    options: [
      "Portability.",
      "Floppiness.",
      "Inflexibility.",
      "Non-modularity.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "A key component of agile development is:",
    options: [
      "Fixed requirements.",
      "Flexibility and adaptability.",
      "No customer interaction.",
      "Strict sequential development.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "What role does testing play in the software engineering life cycle?",
    options: [
      "It is optional.",
      "It ensures the software meets quality and performance criteria.",
      "It is only done at the end.",
      "It only checks for syntax errors.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the following is a challenge in software engineering?",
    options: [
      "Managing changing requirements.",
      "Ignoring stakeholder feedback.",
      "Minimal documentation.",
      "Avoiding iterative improvements.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "The term 'software process' refers to:",
    options: [
      "A random series of tasks.",
      "A structured sequence of stages in software development.",
      "Unplanned coding efforts.",
      "Only maintenance tasks.",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which phase typically comes first in a traditional software life cycle?",
    options: [
      "Testing.",
      "Requirement Analysis.",
      "Implementation.",
      "Maintenance.",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is a key factor in the success of a software project?",
    options: [
      "Ignoring risk management",
      "Effective communication among team members",
      "Skipping the planning phase",
      "Minimal user involvement",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is the main purpose of a software lifecycle model?",
    options: [
      "To provide a structured sequence of stages in development.",
      "To eliminate the need for testing.",
      "To speed up hardware manufacturing.",
      "To reduce documentation.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "Which factor distinguishes software from physical products?",
    options: [
      "Software can be modified without physical wear.",
      "Software degrades with use.",
      "Hardware is easier to update.",
      "Software is produced in a factory.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is a key benefit of using a systematic approach in software engineering?",
    options: [
      "Improved quality and maintainability.",
      "Increased randomness.",
      "Elimination of planning.",
      "Reduced need for user feedback.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following best describes a paradigm in software engineering?",
    options: [
      "An overarching method or approach to development.",
      "A specific coding language.",
      "A type of hardware device.",
      "A quality testing tool.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "How does the Waterfall model handle requirement changes?",
    options: [
      "Changes are difficult once a phase is complete.",
      "Changes are easily integrated at any point.",
      "It automatically adapts without documentation.",
      "It encourages frequent changes.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "In software engineering, what does 'iterative development' imply?",
    options: [
      "Repeating cycles with continual refinement.",
      "A single-pass, linear process.",
      "Avoiding any revisions.",
      "Skipping the design phase.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What does the term 'prototyping' refer to in software development?",
    options: [
      "Creating a preliminary model to test ideas.",
      "Writing the final production code.",
      "Ignoring user requirements.",
      "Documenting test cases.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following is an advantage of agile methodologies?",
    options: [
      "Rapid adaptation to changing requirements.",
      "Complete reliance on fixed planning.",
      "Minimal customer involvement.",
      "Extensive upfront documentation only.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the primary focus of risk management in the Spiral model?",
    options: [
      "To identify and mitigate risks during development.",
      "To avoid any changes during coding.",
      "To reduce documentation efforts.",
      "To speed up hardware integration.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following best describes 'modularity' in software engineering?",
    options: [
      "Dividing a system into discrete components.",
      "Integrating all code into a single file.",
      "Avoiding the use of functions.",
      "Using only one programming language.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the significance of a well-defined software process?",
    options: [
      "It helps in achieving consistent quality and predictable outcomes.",
      "It complicates the development unnecessarily.",
      "It discourages team collaboration.",
      "It removes the need for testing.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which characteristic is essential for an effective software process?",
    options: [
      "Flexibility and repeatability.",
      "Randomness and inconsistency.",
      "Ignoring user input.",
      "Minimal planning.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How does the concept of 'software crisis' relate to modern development challenges?",
    options: [
      "It highlights difficulties due to increasing complexity and rapid change.",
      "It means software never fails.",
      "It indicates an abundance of resources.",
      "It shows that software is easier to develop than hardware.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which term describes the early stage problems in software development?",
    options: [
      "Software crisis.",
      "Code stabilization.",
      "Hardware malfunction.",
      "Network latency.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "What role does customer feedback play in agile development?",
    options: [
      "It is essential for guiding iterative improvements.",
      "It is collected only at the end.",
      "It is ignored to speed up development.",
      "It is used only for marketing.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "In the context of software engineering, what is 'process improvement'?",
    options: [
      "Continuous refinement of the development process.",
      "Avoiding any changes once the process is set.",
      "Increasing the number of iterations randomly.",
      "Skipping maintenance.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following is a disadvantage of the Waterfall model?",
    options: [
      "Inflexibility to adapt to changes.",
      "Overly frequent iterations.",
      "Lack of any planning.",
      "Excessive reliance on customer feedback.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "What does 'incremental development' mean?",
    options: [
      "Building the system in small, manageable increments.",
      "Building the entire system at once.",
      "Ignoring requirements until the end.",
      "Randomly adding features without planning.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "How does iterative development affect project risk?",
    options: [
      "It reduces risk by allowing for regular feedback and corrections.",
      "It increases risk by delaying feedback.",
      "It eliminates the need for testing.",
      "It makes risk management unnecessary.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following best describes 'scalability' in software engineering?",
    options: [
      "The ability of software to handle increased loads.",
      "The inability to grow without complete redesign.",
      "A measure of software speed only.",
      "The cost of additional hardware.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "What is the role of process models in software engineering?",
    options: [
      "To provide a roadmap for development activities.",
      "To replace coding altogether.",
      "To increase randomness in development.",
      "To serve as user manuals.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How does structured programming benefit software development?",
    options: [
      "It increases readability and simplifies maintenance.",
      "It makes code chaotic.",
      "It avoids any documentation.",
      "It discourages reuse of code.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "Which of the following is an example of a process model?",
    options: [
      "V-Model.",
      "Random code generator.",
      "Unstructured brainstorming.",
      "Hardware schematics.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the significance of design reviews in software engineering?",
    options: [
      "They help ensure the design meets requirements before implementation.",
      "They delay the project unnecessarily.",
      "They are only used for marketing purposes.",
      "They replace the need for testing.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What does 'reuse' mean in the context of software engineering?",
    options: [
      "Using existing components to build new systems.",
      "Writing new code for every project.",
      "Ignoring previous projects.",
      "Repeating the same mistakes.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How does effective documentation contribute to software engineering?",
    options: [
      "It facilitates maintenance and future development.",
      "It slows down the development process unnecessarily.",
      "It is used only for legal purposes.",
      "It is optional and rarely used.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "What is meant by 'lifecycle cost' in software engineering?",
    options: [
      "The total cost incurred during the software's entire lifetime.",
      "The cost of initial development only.",
      "The cost of hardware replacement.",
      "The marketing cost of the product.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following best defines 'system integration' in software projects?",
    options: [
      "Combining different modules to work as a unified system.",
      "Keeping modules completely separate.",
      "Ignoring module dependencies.",
      "Designing without any communication.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the focus of quality assurance in software engineering?",
    options: [
      "Ensuring that software meets specified requirements and standards.",
      "Increasing the code size.",
      "Reducing the need for testing.",
      "Minimizing user feedback.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which term best describes the practice of dividing a software project into smaller subprojects?",
    options: [
      "Decomposition.",
      "Integration.",
      "Consolidation.",
      "Randomization.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the benefit of using a unified process in software development?",
    options: [
      "It integrates iterative development with risk management.",
      "It eliminates the need for customer involvement.",
      "It replaces all documentation.",
      "It discourages feedback loops.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How do feedback loops contribute to the success of a software project?",
    options: [
      "They allow for timely corrections and improvements.",
      "They delay the development process.",
      "They are used only for design documentation.",
      "They are unnecessary in agile environments.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What is the role of continuous integration in modern software engineering?",
    options: [
      "To merge code changes frequently and detect integration issues early.",
      "To postpone testing until after development.",
      "To replace the need for individual module testing.",
      "To isolate code from version control.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which aspect of software engineering is most concerned with long-term maintainability?",
    options: [
      "Modularity and proper documentation.",
      "Rapid prototyping without standards.",
      "Ignoring testing processes.",
      "Minimizing stakeholder involvement.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How does automated testing contribute to the software lifecycle?",
    options: [
      "By increasing efficiency and early error detection.",
      "By delaying project timelines.",
      "By replacing the need for human testers.",
      "By complicating the debugging process.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "What does 'iterative prototyping' imply in software development?",
    options: [
      "Repeatedly refining prototypes based on feedback.",
      "Creating a single prototype without changes.",
      "Avoiding any prototype creation.",
      "Finalizing the product without iterations.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which of the following is a key principle in modern software engineering?",
    options: [
      "Emphasis on collaboration and iterative improvements.",
      "Rigid adherence to initial plans.",
      "Minimal documentation and communication.",
      "Avoidance of customer feedback.",
    ],
    correctIndex: 0,
  },
  {
    questionText: "What does 'scalability testing' involve?",
    options: [
      "Assessing software performance under increased load.",
      "Testing only on a single machine.",
      "Ignoring performance metrics.",
      "Skipping automated tests.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "Which process helps in identifying areas for improvement in the development cycle?",
    options: [
      "Process evaluation and refinement.",
      "Ignoring post-release feedback.",
      "Relying solely on initial planning.",
      "Avoiding metrics collection.",
    ],
    correctIndex: 0,
  },
  {
    questionText:
      "How do modern software engineering practices ensure reliability?",
    options: [
      "Through rigorous testing, version control, and continuous integration.",
      "By avoiding any risk management.",
      "Through ad-hoc development without reviews.",
      "By solely relying on manual coding.",
    ],
    correctIndex: 0,
  },
    {
        questionText: "Which of the following best describes the evolution of software engineering?",
        options: [
            "It emerged to address growing software complexity.",
            "It is solely focused on hardware.",
            "It has remained unchanged over time.",
            "It is unrelated to project management."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which principle is fundamental to successful software engineering?",
        options: [
            "Reusability of components.",
            "Excessive complexity.",
            "Complete independence from documentation.",
            "Ignoring user feedback."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the significance of a software process model?",
        options: [
            "It provides a structured, repeatable approach to development.",
            "It replaces the need for planning.",
            "It focuses solely on coding.",
            "It is only used in testing."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which paradigm emphasizes continuous user involvement and iterative cycles?",
        options: [
            "Agile methodology.",
            "Waterfall model.",
            "V-Model.",
            "Big Bang model."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does risk management in software engineering primarily involve?",
        options: [
            "Identifying, analyzing, and mitigating potential project issues.",
            "Ignoring project uncertainties.",
            "Eliminating the need for user testing.",
            "Speeding up the design phase only."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a characteristic of iterative development?",
        options: [
            "Repeated cycles with constant refinement.",
            "A single pass from start to finish.",
            "No feedback incorporation.",
            "Complete independence of phases."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does the concept of 'modularity' benefit software engineering?",
        options: [
            "It divides a system into discrete, manageable components.",
            "It encourages monolithic code.",
            "It makes integration more difficult.",
            "It eliminates the need for documentation."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is one major disadvantage of the traditional Waterfall model?",
        options: [
            "Inability to adapt to changes after a phase is completed.",
            "Excessive flexibility.",
            "Minimal documentation.",
            "Over-reliance on iterative testing."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which approach is most effective for projects with uncertain requirements?",
        options: [
            "Agile development.",
            "Strict Waterfall.",
            "Big Bang programming.",
            "Sequential coding without reviews."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'prototyping' mean in the context of software engineering?",
        options: [
            "Building a preliminary version to gather feedback.",
            "Writing final production code immediately.",
            "Ignoring design documents.",
            "Skipping the testing phase."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best defines 'software crisis'?",
        options: [
            "Difficulties arising from the increasing complexity of software systems.",
            "A lack of available programming languages.",
            "Hardware failures affecting software.",
            "Overproduction of software products."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does a systematic approach improve software quality?",
        options: [
            "By ensuring structured planning, testing, and maintenance.",
            "By eliminating documentation entirely.",
            "By allowing ad-hoc coding practices.",
            "By focusing solely on rapid delivery."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the main goal of using process models in software development?",
        options: [
            "To guide teams through predictable, repeatable stages.",
            "To replace design and coding altogether.",
            "To ensure that testing is never needed.",
            "To encourage random development practices."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which method is most appropriate for managing frequent requirement changes?",
        options: [
            "Agile methodology.",
            "Strict Waterfall process.",
            "One-time prototyping without iterations.",
            "Ignoring customer feedback."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'continuous integration' help achieve in software engineering?",
        options: [
            "Early detection of integration issues by frequently merging code changes.",
            "Delaying testing until the end.",
            "Isolating developers from one another.",
            "Replacing version control entirely."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'iterative prototyping' imply in software development?",
        options: [
            "Repeatedly refining prototypes based on feedback.",
            "Creating a single prototype without changes.",
            "Avoiding any prototype creation.",
            "Finalizing the product without iterations."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is a key principle in modern software engineering?",
        options: [
            "Emphasis on collaboration and iterative improvements.",
            "Rigid adherence to initial plans.",
            "Minimal documentation and communication.",
            "Avoidance of customer feedback."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'scalability testing' involve?",
        options: [
            "Assessing software performance under increased load.",
            "Testing only on a single machine.",
            "Ignoring performance metrics.",
            "Skipping automated tests."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which process helps in identifying areas for improvement in the development cycle?",
        options: [
            "Process evaluation and refinement.",
            "Ignoring post-release feedback.",
            "Relying solely on initial planning.",
            "Avoiding metrics collection."
        ],
        correctIndex: 0
    },
    {
        questionText: "How do modern software engineering practices ensure reliability?",
        options: [
            "Through rigorous testing, version control, and continuous integration.",
            "By avoiding any risk management.",
            "Through ad-hoc development without reviews.",
            "By solely relying on manual coding."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which factor is a hallmark of a well-structured software process?",
        options: [
            "Consistency and repeatability.",
            "Complete randomness.",
            "Absence of planning.",
            "Rigid adherence to an unchangeable plan."
        ],
        correctIndex: 0
    },
    {
        questionText: "What role does documentation play in modern software engineering?",
        options: [
            "It supports maintenance, knowledge transfer, and quality assurance.",
            "It is unnecessary and can be omitted.",
            "It slows down development without benefits.",
            "It is only used for legal purposes."
        ],
        correctIndex: 0
    },
    {
        questionText: "How do feedback loops contribute to agile software development?",
        options: [
            "They enable continuous improvement through iterative customer input.",
            "They delay project completion.",
            "They replace the need for testing.",
            "They are used only for marketing purposes."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best defines 'scalability' in a software system?",
        options: [
            "The ability to handle increasing loads without performance degradation.",
            "The tendency of software to remain static regardless of usage.",
            "The measure of code complexity only.",
            "The cost associated with hardware upgrades."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the benefit of using standardized coding practices?",
        options: [
            "They enhance code readability, maintainability, and team collaboration.",
            "They limit developers’ creativity.",
            "They are only useful for beginners.",
            "They replace the need for peer reviews."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best explains 'design for maintainability'?",
        options: [
            "Creating software that is easy to update, debug, and extend.",
            "Focusing solely on initial development speed.",
            "Ignoring future updates and changes.",
            "Overcomplicating system architecture."
        ],
        correctIndex: 0
    },
    {
        questionText: "What is the primary objective of risk assessment in the Spiral model?",
        options: [
            "To continuously identify and mitigate project risks.",
            "To eliminate the need for any changes.",
            "To delay the project timeline.",
            "To focus solely on cost reduction."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which factor is critical to ensuring software quality from the start?",
        options: [
            "Early and continuous testing.",
            "Final-phase testing only.",
            "Minimal planning and design.",
            "Ignoring user requirements."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does process improvement impact a software project?",
        options: [
            "It leads to enhanced productivity and higher quality outcomes.",
            "It increases complexity without benefits.",
            "It delays the project indefinitely.",
            "It is only a theoretical concept."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best describes 'incremental development'?",
        options: [
            "Building and delivering software in small, manageable parts.",
            "Developing the entire system in a single phase.",
            "Ignoring intermediate testing.",
            "Relying solely on final integration."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following is an outcome of applying a systematic process in software engineering?",
        options: [
            "Predictable project outcomes and enhanced quality.",
            "Increased randomness and unpredictability.",
            "Complete elimination of errors.",
            "Ignoring user requirements entirely."
        ],
        correctIndex: 0
    },
    {
        questionText: "How is 'continuous improvement' realized in software engineering practices?",
        options: [
            "Through iterative reviews, feedback loops, and process refinement.",
            "By finalizing the process at the project start.",
            "By eliminating any form of testing.",
            "By ignoring lessons learned from previous projects."
        ],
        correctIndex: 0
    },
    {
        questionText: "Which of the following best illustrates the benefit of iterative development?",
        options: [
            "Frequent reassessment allows for corrections and improvements.",
            "It requires no planning or analysis.",
            "It prolongs the project without benefits.",
            "It discourages customer feedback."
        ],
        correctIndex: 0
    },
    {
        questionText: "What does 'lifecycle management' refer to in software engineering?",
        options: [
            "Managing all phases of a software product from conception to retirement.",
            "Focusing only on the development phase.",
            "Ignoring maintenance after release.",
            "Only managing the testing phase."
        ],
        correctIndex: 0
    },
    {
        questionText: "How does effective process management affect the overall success of a software project?",
        options: [
            "It enhances predictability, quality, and customer satisfaction.",
            "It delays progress with unnecessary bureaucracy.",
            "It is irrelevant to project outcomes.",
            "It only benefits the testing team."
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
