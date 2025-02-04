document.addEventListener("DOMContentLoaded", () => {
    const quizContent = document.getElementById("quiz-content");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const reviewButton = document.getElementById("review-btn");
    const restartButton = document.getElementById("restart-btn");
    const restartButton2 = document.getElementById("restart-btn-2");

    const reviewContainer = document.getElementById("review-container");
    const reviewContent = document.getElementById("review-content");

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "What is 5 + 3?",
            options: ["5", "8", "10", "12"],
            answer: "8"
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
            answer: "William Shakespeare"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let userResponses = [];

    function loadQuestion() {
        feedback.textContent = "";
        nextButton.style.display = "none";

        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = option;
            button.addEventListener("click", () => selectAnswer(option, button));
            optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(selected, button) {
        const currentQuestion = questions[currentQuestionIndex];
        userResponses.push({ 
            question: currentQuestion.question, 
            selected, 
            correct: currentQuestion.answer 
        });

        const buttons = document.querySelectorAll(".option");
        buttons.forEach(btn => btn.disabled = true);

        if (selected === currentQuestion.answer) {
            button.classList.add("correct");
            score++;
            feedback.textContent = "Correct!";
        } else {
            button.classList.add("wrong");
            feedback.textContent = `Wrong! The correct answer is: ${currentQuestion.answer}`;
        }

        nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        quizContent.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
    }

    reviewButton.addEventListener("click", () => {
        resultContainer.classList.add("hidden");
        reviewContainer.classList.remove("hidden");
        displayReview();
    });

    function displayReview() {
        reviewContent.innerHTML = "";
        userResponses.forEach((response, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>Q${index + 1}:</strong> ${response.question}</p>
                <p>Your Answer: <span class="${response.selected === response.correct ? 'correct' : 'wrong'}">${response.selected}</span></p>
                <p>Correct Answer: <strong>${response.correct}</strong></p>
                <hr>
            `;
            reviewContent.appendChild(div);
        });
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userResponses = [];
        quizContent.classList.remove("hidden");
        resultContainer.classList.add("hidden");
        reviewContainer.classList.add("hidden");
        loadQuestion();
    }

    restartButton.addEventListener("click", restartQuiz);
    restartButton2.addEventListener("click", restartQuiz);

    loadQuestion();
});