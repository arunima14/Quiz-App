const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result-text");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;

let questionTime = 10;
let timer; // Define a timer variable

const startTimer = () => {
    // Display the remaining time on the screen
    timer = setInterval(() => {
        if (questionTime <= 0) {
            checkAnswer(-1);
        } else {
            questionTime--;
            questionText.innerText = `${questions[currentQuestionIndex].question} (Time left: ${questionTime} seconds)`;
        }
    }, 1000);
};

const resetTimer = () => {
    clearInterval(timer);
    questionTime = 10;
};


const loadQuestions = async () => {
    try {
        const response = await fetch("questions.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error loading questions:", error);
    }
};

const shuffleQuestions = (questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
};

const displayQuestion = (question) => {
    questionText.innerText = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => {
            optionElement.style.backgroundColor = "green"
            checkAnswer(index)
        });
        optionsContainer.appendChild(optionElement);
    });
};

const checkAnswer = (selectedOptionIndex) => {
    resetTimer();
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answer === currentQuestion.options[selectedOptionIndex]) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
        startTimer(); 

        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    } else {
        showResult();
    }
};

const showResult = () => {
    questionText.innerText = "Results !!";
    questionText.style.color = "red";
    resultText.innerText = `Your score is ${score} out of ${questions.length}.`;
    resultText.style.color = score === questions.length ? "green" : 
        score >= questions.length/2 ? "#FF8C00" : "red";
    resultText.parentElement.style.display = "block";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
};

let questions = [];

loadQuestions().then((data) => {
    questions = data;
    shuffleQuestions(questions);
    displayQuestion(questions[currentQuestionIndex]);
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        checkAnswer(-1); // -1 represents no option selected
    }
});

