document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
});

const story = {
    start: {
        text: "You wake up in a dark forest with no memory of how you got there. Two paths lie ahead.",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You follow the left path and come across a river. There's a bridge and a boat.",
        choices: [
            { text: "Cross the bridge", next: "bridge" },
            { text: "Take the boat", next: "boat" }
        ]
    },
    rightPath: {
        text: "You follow the right path and find an old cabin. The door is slightly open.",
        choices: [
            { text: "Enter the cabin", next: "cabin" },
            { text: "Walk past the cabin", next: "pastCabin" }
        ]
    },
    bridge: {
        text: "The bridge is old and collapses as you step on it. You fall into the river and swim to shore.",
        choices: [
            { text: "Continue ahead", next: "finalScene" }
        ]
    },
    boat: {
        text: "You take the boat and row across safely. You find a hidden cave on the other side.",
        choices: [
            { text: "Enter the cave", next: "cave" }
        ]
    },
    cabin: {
        text: "Inside the cabin, you find a map and a lantern. This could be useful!",
        choices: [
            { text: "Take the map and lantern", next: "mapLantern" },
            { text: "Leave them and exit", next: "pastCabin" }
        ]
    },
    pastCabin: {
        text: "You walk past the cabin and reach a clearing. A strange figure appears in the distance.",
        choices: [
            { text: "Approach the figure", next: "finalScene" },
            { text: "Hide behind a tree", next: "cave" }
        ]
    },
    cave: {
        text: "Inside the cave, you find treasure but also a sleeping bear!",
        choices: [
            { text: "Quietly take the treasure", next: "finalScene" },
            { text: "Leave before the bear wakes up", next: "finalScene" }
        ]
    },
    mapLantern: {
        text: "With the map and lantern, you navigate through the dark forest and find a hidden village.",
        choices: [
            { text: "Enter the village", next: "finalScene" }
        ]
    },
    finalScene: {
        text: "Your adventure ends here... for now!",
        choices: [
            { text: "Restart the journey", next: "start" }
        ]
    }
};

let currentScene = "start";

function loadScene(scene) {
    currentScene = scene;
    document.getElementById("story-text").innerText = story[scene].text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    story[scene].choices.forEach(choice => {
        let button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => {
            loadScene(choice.next);
        };
        choicesContainer.appendChild(button);
    });
}

// ✅ Restart Game (Does NOT delete saved progress)
function restartGame() {
    loadScene("start"); // Resets game to start, but does NOT clear save data
}

// ✅ Save Progress (Stores the current scene in localStorage)
function saveProgress() {
    localStorage.setItem("storyProgress", currentScene);
}

// ✅ Load Progress (Retrieves saved scene from localStorage)
function loadProgress() {
    const savedProgress = localStorage.getItem("storyProgress");
    if (savedProgress && story[savedProgress]) {
        loadScene(savedProgress);
    } else {
        loadScene("start"); // Start fresh if no saved game
    }
}