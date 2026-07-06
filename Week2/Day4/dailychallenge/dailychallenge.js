// Task array (BONUS I: array of objects)
const tasks = [];
let taskId = 0; // unique id for each task

// Get DOM elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasksDiv = document.querySelector(".listTasks");

// Add task function
function addTask(e) {
    e.preventDefault(); // prevent form submission

    const text = taskInput.value.trim();
    if (text === "") return; // check input not empty

    // Create task object
    const task = {
        task_id: taskId,
        text: text,
        done: false
    };
    tasks.push(task);

    // Add task to DOM
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", taskId);

    taskDiv.innerHTML = `
        <input type="checkbox" id="task-${taskId}">
        <label for="task-${taskId}">${text}</label>
        <button class="deleteBtn"><i class="fa-solid fa-xmark"></i></button>
    `;

    // Append to list
    listTasksDiv.appendChild(taskDiv);

    // Event listeners for checkbox and delete
    const checkbox = taskDiv.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => doneTask(taskId, taskDiv));

    const deleteBtn = taskDiv.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => deleteTask(taskId, taskDiv));

    // Clear input and increment taskId
    taskInput.value = "";
    taskId++;
}

// Mark task as done
function doneTask(id, taskDiv) {
    const task = tasks.find(t => t.task_id === id);
    task.done = !task.done;
    taskDiv.classList.toggle("completed", task.done);
}

// Delete task
function deleteTask(id, taskDiv) {
    const index = tasks.findIndex(t => t.task_id === id);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    taskDiv.remove();
}

// Form submit event
taskForm.addEventListener("submit", addTask);
