let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTask(index);
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}