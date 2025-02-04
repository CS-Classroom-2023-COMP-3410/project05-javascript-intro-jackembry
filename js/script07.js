let display = document.getElementById("calc-display");
let memory = 0; // Memory storage

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendDecimal() {
    let parts = display.value.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes(".")) {
        display.value += ".";
    }
}

function calculateResult() {
    try {
        if (display.value === "") return;
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

function calculatePercentage() {
    if (display.value !== "") {
        display.value = eval(display.value + "/100");
    }
}

function calculateSquareRoot() {
    if (display.value !== "") {
        let number = parseFloat(display.value);
        if (number < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(number);
        }
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

// ✅ Memory Functions
function memoryAdd() {
    if (display.value !== "" && !isNaN(display.value)) {
        memory = parseFloat(display.value);
    }
}

function memoryRecall() {
    display.value += memory; // Appends the memory value to the display
}

function memoryClear() {
    memory = 0; // Clears stored memory
}