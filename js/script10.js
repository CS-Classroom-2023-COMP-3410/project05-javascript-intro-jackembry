const easyWords = ["hello", "world", "apple", "banana", "keyboard", "mouse", "screen"];
const mediumWords = ["function", "developer", "interface", "algorithm", "variable"];
const hardWords = ["$yntax!", "p@ssw0rd", "C0d3&Learn", "*Programming*", "Typ3~Fast"];

let targetText = "";
let startTime = null;

const textDisplay = document.getElementById("text-display");
const userInput = document.getElementById("user-input");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

// Generates new text based on difficulty
function generateText() {
    let difficulty = document.getElementById("difficulty").value;
    
    if (difficulty === "easy") {
        targetText = easyWords[Math.floor(Math.random() * easyWords.length)];
    } else if (difficulty === "medium") {
        targetText = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    } else {
        targetText = hardWords[Math.floor(Math.random() * hardWords.length)];
    }

    textDisplay.innerHTML = targetText.split("").map(letter => `<span>${letter}</span>`).join("");
    userInput.value = "";
    startTime = null;
    timerDisplay.innerText = "0";
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "100";
}

// Calculates WPM
function calculateWPM() {
    let elapsedTime = (Date.now() - startTime) / 1000;
    let wordsTyped = userInput.value.length / 5; // Average word length is 5
    let wpm = Math.round((wordsTyped / elapsedTime) * 60);
    wpmDisplay.innerText = wpm > 0 ? wpm : 0;
}

// Tracks user input and highlights errors
userInput.addEventListener("input", () => {
    if (!startTime) {
        startTime = Date.now();
        setInterval(() => {
            if (startTime) {
                timerDisplay.innerText = Math.floor((Date.now() - startTime) / 1000);
            }
        }, 1000);
    }

    let inputText = userInput.value;
    let correctChars = 0;
    
    [...textDisplay.children].forEach((charSpan, index) => {
        let typedChar = inputText[index];

        if (typedChar == null) {
            charSpan.classList.remove("correct", "incorrect");
        } else if (typedChar === charSpan.innerText) {
            charSpan.classList.add("correct");
            charSpan.classList.remove("incorrect");
            correctChars++;
        } else {
            charSpan.classList.add("incorrect");
            charSpan.classList.remove("correct");
        }
    });

    // Calculate accuracy
    let accuracy = Math.round((correctChars / targetText.length) * 100);
    accuracyDisplay.innerText = accuracy >= 0 ? accuracy : 100;

    calculateWPM();
});

// Resets the test
function restartTest() {
    generateText();
}

generateText();