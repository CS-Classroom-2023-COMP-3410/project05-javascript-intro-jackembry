document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        if (task.completed) taskItem.classList.add("completed");

        taskItem.setAttribute("draggable", "true");
        taskItem.dataset.index = index; // Ensure correct index reference

        taskItem.addEventListener("dragstart", dragStart);
        taskItem.addEventListener("dragover", dragOver);
        taskItem.addEventListener("drop", dropTask);
        taskItem.addEventListener("dragend", dragEnd);

        taskItem.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class="edit-btn" onclick="editTask(${index})">✏</button>
            <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
        `;

        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById("new-task");
    if (taskInput.value.trim() === "") return;

    tasks.push({ text: taskInput.value, completed: false });
    saveTasks();
    loadTasks();
    taskInput.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    loadTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    loadTasks();
}

// ✅ Fix: Edit Task Now Works Correctly
function editTask(index) {
    let newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        tasks[index].text = newTaskText;
        saveTasks();
        loadTasks();
    }
}

function filterTasks(filter) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (filter === "completed" && !task.completed) return;
        if (filter === "pending" && task.completed) return;

        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        if (task.completed) taskItem.classList.add("completed");

        taskItem.setAttribute("draggable", "true");
        taskItem.dataset.index = index;

        taskItem.addEventListener("dragstart", dragStart);
        taskItem.addEventListener("dragover", dragOver);
        taskItem.addEventListener("drop", dropTask);
        taskItem.addEventListener("dragend", dragEnd);

        taskItem.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class="edit-btn" onclick="editTask(${index})">✏</button>
            <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
        `;

        taskList.appendChild(taskItem);
    });
}

// ✅ Fix: Drag-and-Drop Reordering Now Works Properly
let draggedTaskIndex = null;

function dragStart(event) {
    draggedTaskIndex = event.target.dataset.index;
    event.target.classList.add("dragging");
}

function dragOver(event) {
    event.preventDefault();
}

function dropTask(event) {
    event.preventDefault();
    let droppedTaskIndex = event.target.dataset.index;
    if (droppedTaskIndex === undefined) return;

    let draggedTask = tasks.splice(draggedTaskIndex, 1)[0]; // Remove dragged task
    tasks.splice(droppedTaskIndex, 0, draggedTask); // Insert at new position

    saveTasks();
    loadTasks();
}

function dragEnd(event) {
    event.target.classList.remove("dragging");
}