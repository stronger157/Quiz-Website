let selectedCategory = '';
let selectedSubcategory = '';
let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = [];

// Questions for the "Riddle" subcategory
const riddleQuestions = [
    { 
        question: "What has keys but can’t open locks?", 
        options: ["Piano", "Computer", "Keyboard", "Map"], 
        correct: "Keyboard" 
    },
    { 
        question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", 
        options: ["Tree", "Candle", "Building", "Mountain"], 
        correct: "Candle" 
    },
    { 
        question: "What can travel around the world while staying in the same spot?", 
        options: ["A map", "A stamp", "A plane", "A ship"], 
        correct: "A stamp" 
    },
    { 
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?", 
        options: ["M", "E", "Time", "Space"], 
        correct: "M" 
    },
    { 
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", 
        options: ["Echo", "Whistle", "Thunder", "Shadow"], 
        correct: "Echo" 
    },
    { 
        question: "The more of this you take, the more you leave behind. What is it?", 
        options: ["Steps", "Memories", "Time", "Breath"], 
        correct: "Steps" 
    },
    { 
        question: "What has to be broken before you can use it?", 
        options: ["Egg", "Seal", "Lock", "Promise"], 
        correct: "Egg" 
    },
    { 
        question: "What can fill a room but takes up no space?", 
        options: ["Light", "Air", "Shadow", "Sound"], 
        correct: "Light" 
    },
    { 
        question: "I’m found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?", 
        options: ["Wool", "String", "Cotton", "Yarn"], 
        correct: "Yarn" 
    },
    { 
        question: "What has one head, one foot, and four legs?", 
        options: ["Bed", "Table", "Chair", "Stool"], 
        correct: "Bed" 
    }
];

// Questions for the "Logic" subcategory
const logicQuestions = [
    { 
        question: "If two’s company and three’s a crowd, what are four and five?", 
        options: ["Nine", "Twenty", "Thirty", "Forty"], 
        correct: "Nine" 
    },
    { 
        question: "A man gave one son 10 cents and another son was given 15 cents. What time is it?", 
        options: ["10:15", "1:25", "10:45", "2:30"], 
        correct: "10:15" 
    },
    { 
        question: "If a plane crashes on the border of the U.S. and Canada, where do they bury the survivors?", 
        options: ["U.S.", "Canada", "They don’t bury survivors", "In the border"], 
        correct: "They don’t bury survivors" 
    },
    { 
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?", 
        options: ["The letter M", "A second", "Time", "An hour"], 
        correct: "The letter M" 
    },
    { 
        question: "You have a basket with 10 apples. You give away 4, eat 3, and drop 1. How many apples do you have left?", 
        options: ["2", "4", "5", "6"], 
        correct: "4" 
    },
    { 
        question: "A boy is 3 years old and his sister is half his age. How old will his sister be when the boy turns 100?", 
        options: ["50", "97", "100", "99"], 
        correct: "50" 
    },
    { 
        question: "If you have 6 apples and you give away 3, how many apples do you have left?", 
        options: ["3", "6", "9", "0"], 
        correct: "3" 
    },
    { 
        question: "Which weighs more: a pound of feathers or a pound of bricks?", 
        options: ["Feathers", "Bricks", "They weigh the same", "Depends on the size"], 
        correct: "They weigh the same" 
    },
    { 
        question: "You’re in a race and you pass the person in second place. What place are you in now?", 
        options: ["First", "Second", "Third", "You’re still in second"], 
        correct: "Second" 
    },
    { 
        question: "A man looks at a painting and says, “Brothers and sisters, I have none, but that man’s father is my father’s son.” Who is in the painting?", 
        options: ["The man’s son", "The man’s brother", "The man himself", "His father"], 
        correct: "The man’s son" 
    }
];

// Questions for the "Visual & Counting" subcategory
const visualCountingQuestions = [
    { 
        question: "How many triangles are in this image?", 
        options: ["9", "7", "11", "10"], 
        correct: "9" 
    },
    { 
        question: "How many squares are there in this image of a grid?", 
        options: ["10", "12", "15", "14"], 
        correct: "12" 
    },
    { 
        question: "There are 6 apples in a basket. If you take away 2, how many apples are left in the basket?", 
        options: ["4", "5", "3", "2"], 
        correct: "4" 
    },
    { 
        question: "How many circles are in this image?", 
        options: ["5", "6", "8", "7"], 
        correct: "8" 
    },
    { 
        question: "How many sides does this image of a hexagon have?", 
        options: ["6", "8", "5", "7"], 
        correct: "6" 
    },
    { 
        question: "If there are 4 apples and you give away 2, how many apples do you have now?", 
        options: ["1", "2", "3", "4"], 
        correct: "2" 
    },
    { 
        question: "How many rectangles can you find in this image?", 
        options: ["12", "10", "15", "11"], 
        correct: "15" 
    },
    { 
        question: "In a group of 10 people, 7 have red shirts and 3 have blue shirts. How many people do not have a red shirt?", 
        options: ["3", "7", "10", "0"], 
        correct: "3" 
    },
    { 
        question: "How many times does the number 3 appear in this pattern? (3, 6, 9, 12, 15, 18)", 
        options: ["5", "4", "3", "6"], 
        correct: "5" 
    },
    { 
        question: "There are 3 red marbles, 2 blue marbles, and 4 green marbles in a jar. How many marbles are there in total?", 
        options: ["9", "8", "7", "6"], 
        correct: "9" 
    }
];

// Questions for the "Mathematics" subcategory
const mathQuestions = [
    { 
        question: "What is 5 + 3?", 
        options: ["7", "8", "9", "10"], 
        correct: "8" 
    },
    { 
        question: "What is 12 - 4?", 
        options: ["6", "7", "8", "9"], 
        correct: "8" 
    },
    { 
        question: "What is 6 × 6?", 
        options: ["30", "32", "36", "40"], 
        correct: "36" 
    },
    { 
        question: "What is 9 ÷ 3?", 
        options: ["3", "4", "5", "6"], 
        correct: "3" 
    },
    { 
        question: "What is 7 + 5?", 
        options: ["11", "12", "13", "14"], 
        correct: "12" 
    },
    { 
        question: "What is 15 - 7?", 
        options: ["7", "6", "8", "9"], 
        correct: "8" 
    }
];

// Questions for the "Chemistry" subcategory
const chemistryQuestions = [
    { 
        question: "Which method is used to separate dyes in black ink?", 
        options: ["Distillation", "Chromatography", "Filtration", "Decantation"], 
        correct: "Chromatography" 
    },
    { 
        question: "Which gas is responsible for the fizz in soft drinks?", 
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 
        correct: "Carbon dioxide" 
    },
    { 
        question: "The process of depositing a layer of zinc on iron to prevent rusting is called:", 
        options: ["Alloying", "Galvanization", "Electroplating", "Distillation"], 
        correct: "Galvanization" 
    },
    { 
        question: "Which of these is not a property of metals?", 
        options: ["Good conductor of electricity", "Malleable", "Ductile", "Brittle"], 
        correct: "Brittle" 
    },
    { 
        question: "The pH of a neutral solution is:", 
        options: ["1", "5", "7", "14"], 
        correct: "7" 
    },
    { 
        question: "What type of reaction is burning of magnesium ribbon in the air?", 
        options: ["Decomposition reaction", "Combination reaction", "Displacement reaction", "Neutralization reaction"], 
        correct: "Combination reaction" 
    },
    { 
        question: "Which acid is found in vinegar?", 
        options: ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulfuric acid"], 
        correct: "Acetic acid" 
    },
    { 
        question: "What is the main component of LPG (Liquefied Petroleum Gas)?", 
        options: ["Methane", "Ethane", "Butane", "Carbon monoxide"], 
        correct: "Butane" 
    },
    { 
        question: "Which of the following is not a chemical change?", 
        options: ["Boiling of water", "Burning of coal", "Rusting of iron", "Cooking of food"], 
        correct: "Boiling of water" 
    },
    { 
        question: "Which of the following is a non-metal?", 
        options: ["Magnesium", "Copper", "Sulfur", "Zinc"], 
        correct: "Sulfur" 
    }
];

// Questions for the "Physics" subcategory
const physicsQuestions = [
    { 
        question: "Which of the following is a vector quantity?", 
        options: ["Speed", "Distance", "Velocity", "Work"], 
        correct: "Velocity" 
    },
    { 
        question: "What is the SI unit of force?", 
        options: ["Joule", "Newton", "Watt", "Pascal"], 
        correct: "Newton" 
    },
    { 
        question: "Which law of motion explains the principle of rocket propulsion?", 
        options: ["First law", "Second law", "Third law", "Law of gravitation"], 
        correct: "Third law" 
    },
    { 
        question: "Sound cannot travel through:", 
        options: ["Solids", "Liquids", "Gases", "Vacuum"], 
        correct: "Vacuum" 
    },
    { 
        question: "Which type of mirror is used in car side-view mirrors?", 
        options: ["Plane mirror", "Concave mirror", "Convex mirror", "Cylindrical mirror"], 
        correct: "Convex mirror" 
    },
    { 
        question: "What causes the phenomenon of dispersion in a prism?", 
        options: ["Refraction", "Reflection", "Diffraction", "Interference"], 
        correct: "Refraction" 
    },
    { 
        question: "Which of the following does not produce electromagnetic waves?", 
        options: ["X-rays", "Microwaves", "Sound waves", "Infrared waves"], 
        correct: "Sound waves" 
    },
    { 
        question: "Which of these quantities remains constant in uniform circular motion?", 
        options: ["Velocity", "Speed", "Acceleration", "Direction"], 
        correct: "Speed" 
    },
    { 
        question: "Which planet has the strongest gravitational pull in the solar system?", 
        options: ["Earth", "Jupiter", "Saturn", "Mars"], 
        correct: "Jupiter" 
    },
    { 
        question: "The rate of change of momentum of an object is equal to:", 
        options: ["Force applied", "Acceleration", "Velocity", "Displacement"], 
        correct: "Force applied" 
    }
];

  
  // Function to display the quiz
  function startQuiz(quiz) {
    quiz.forEach((q, index) => {
      console.log(`Q${index + 1}: ${q.question}`);
      q.options.forEach((option, i) => {
        console.log(`${i + 1}. ${option}`);
      });
    });
  }
  
  // Example of starting the quiz
  startQuiz(mentalHealthQuiz);
  
function toggleSubcategories(category) {
    const subcategorySections = document.querySelectorAll('.subcategory-selection');
    subcategorySections.forEach(section => {
        section.style.display = 'none'; // Hide all
    });

    const selectedSection = document.getElementById(category);
    selectedSection.style.display = 'block'; // Show selected

    selectedCategory = category;
}

// Function to start the quiz
function startQuiz(subcategory) {
    selectedSubcategory = subcategory;

    if (subcategory === 'Riddle') {
        questions = [...riddleQuestions]; // Load riddle questions
    } else if (subcategory === 'Logic') {
        questions = [...logicQuestions]; // Load logic questions
    } else if (subcategory === 'Visual & Counting') {
        questions = [...visualCountingQuestions]; // Load visual & counting questions
    } else if (subcategory === 'Mathematics') {
        questions = [...mathQuestions]; // Load math questions
    } else if (subcategory === 'Physics') {
        questions = [...physicsQuestions]; // Load physics questions
    } else if (subcategory === 'Chemistry') {
        questions = [...chemistryQuestions];
    
    } 
      else {
        questions = []; // Default for undefined subcategories
    }

    currentQuestion = 0;
    correctAnswers = 0;
    userAnswers = []; // Reset user answers

    // Show quiz and hide other sections
    document.querySelector('.quiz').style.display = 'block';
    document.querySelector('.category-selection').style.display = 'none';
    document.querySelectorAll('.subcategory-selection').forEach(section => {
        section.style.display = 'none';
    });

    displayQuestion(currentQuestion); // Load the first question
}

// Function to display the current question
function displayQuestion(index) {
    const question = questions[index];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${index + 1}. ${question.question}</p>
        <div>
            ${question.options.map((option, i) => 
                `<button class="option-btn" onclick="selectAnswer('${option}')">${i + 1}. ${option}</button>`
            ).join('')}
        </div>
    `;
    document.getElementById('next-btn').style.display = 'none'; // Hide "Next" button until an answer is selected
}

// Function to record the selected answer
function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer; // Record user answer
    document.getElementById('next-btn').style.display = 'block';   //Show "Next" button
    // Show "exit" button
}

// Function to load the next question or show the dashboard
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    } else {
        showScore();
    }
}

// Function to show the dashboard
function showScore() {
    // Calculate the number of correct answers
    correctAnswers = userAnswers.reduce((count, answer, index) => {
        return count + (answer === questions[index].correct ? 1 : 0);
    }, 0);

    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>Total Questions: ${questions.length}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Incorrect Answers: ${questions.length - correctAnswers}</p>
    `;

    document.getElementById('next-btn').style.display = 'none'; 
    // Hide "Next" button
}
