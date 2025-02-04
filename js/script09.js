let array = [];
const arraySize = 20;
const arrayContainer = document.getElementById("array-container");
const explanationText = document.getElementById("explanation");

function generateArray() {
    array = [];
    arrayContainer.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        let value = Math.floor(Math.random() * 100) + 10;
        array.push(value);
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");
    explanationText.innerText = "Bubble Sort: Swapping adjacent elements if they are in the wrong order.";

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add("active");
            bars[j + 1].classList.add("active");

            if (array[j] > array[j + 1]) {
                await swap(j, j + 1);
            }

            bars[j].classList.remove("active");
            bars[j + 1].classList.remove("active");
            await delay();
        }
    }
    explanationText.innerText = "Sorting complete!";
}

async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    explanationText.innerText = "Insertion Sort: Building the sorted portion by inserting elements at the correct position.";

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        bars[i].classList.add("active");

        while (j >= 0 && array[j] > key) {
            await swap(j, j + 1);
            j--;
            await delay();
        }

        bars[i].classList.remove("active");
    }
    explanationText.innerText = "Sorting complete!";
}

async function swap(i, j) {
    let bars = document.querySelectorAll(".bar");

    [array[i], array[j]] = [array[j], array[i]];
    
    bars[i].style.height = `${array[i] * 3}px`;
    bars[j].style.height = `${array[j] * 3}px`;

    await delay();
}

function delay() {
    let speed = document.getElementById("speed").value;
    return new Promise(resolve => setTimeout(resolve, 510 - speed)); // Invert the delay logic
}

function startSorting() {
    let algorithm = document.getElementById("algorithm").value;
    if (algorithm === "bubble") {
        bubbleSort();
    } else if (algorithm === "insertion") {
        insertionSort();
    }
}

// Generate initial array on page load
generateArray();