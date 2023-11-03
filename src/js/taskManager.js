import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from "./localStorageManager.js";
import {
  TASK_INPUT_PLACEHOLDER,
  PRIORITY_LABEL,
  DATE_LABEL,
  ADD_BUTTON_TEXT,
  CANCEL_BUTTON_TEXT,
  PRIORITIES,
} from "./constants.js";

export function displayAllTasks() {
  const addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.style.display = "flex"; // Shows "add task" button
  const allTasks = loadTasksFromLocalStorage();
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = ""; // Clear the current tasks
  for (const taskData of allTasks) {
    tasksContainer.appendChild(createTaskElement(taskData));
  }
  tasksContainer.style.display = "block";
}

/**
 * Filter tasks by their priority.
 * @param {string} priority - The selected priority.
 */
export function filterTasksByPriority(priority) {
  const allTasks = loadTasksFromLocalStorage();
  const filteredTasks = allTasks.filter((task) => task.priority === priority);
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = ""; // Clear the current tasks
  for (const taskData of filteredTasks) {
    tasksContainer.appendChild(createTaskElement(taskData));
  }
  const addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.style.display = "none"; // Hide the "Add task" button
}


/**
 * Create a DOM element for a task.
 * @param {Object} taskData - The data for the task.
 * @returns {HTMLElement} The task element.
 */
export function createTaskElement(taskData) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.dataset.timestamp = taskData.timestamp;

  const taskText = document.createElement("div");
  taskText.classList.add("task-text");
  taskText.textContent = taskData.text;
  task.appendChild(taskText);

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("custom-container", "priority-container");
  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = taskData.priority;
  priorityContainer.appendChild(prioritySpan);

  if (taskData.date && taskData.date.trim() !== "") {
    // Comprobar si hay fecha y no está vacía
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("custom-container", "date-container");
    const dateSpan = document.createElement("span");
    dateSpan.textContent = taskData.date;
    dateContainer.appendChild(dateSpan);
    taskDetails.appendChild(dateContainer);
  }

  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function () {
    removeTask(this);
  });

  taskDetails.appendChild(priorityContainer);
  taskDetails.appendChild(completeButton);

  task.appendChild(taskDetails);

  return task;
}

/**
 * Remove a task element from the DOM and update localStorage.
 * @param {HTMLElement} buttonElement - The button element that triggered the removal.
 */
export function removeTask(buttonElement) {
  const taskElement = buttonElement.parentElement.parentElement;
  const taskTimestamp = taskElement.dataset.timestamp;

  taskElement.remove();

  const tasks = loadTasksFromLocalStorage().filter(
    (task) => task.timestamp && task.timestamp.toString() !== taskTimestamp
  );
  saveTasksToLocalStorage(tasks);
}

export function handleAddTaskClick() {
  const addTaskButton = document.getElementById("addTaskButton");
  const createProjectButton = document.getElementById("createProjectButton");

  createProjectButton.style.display = "none";

  const tasksContainer = document.getElementById("tasks");

  addTaskButton.disabled = true;

  // Create new task input form elements
  const taskElement = document.createElement("div");
  taskElement.classList.add("new-task");

  // Text input
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = TASK_INPUT_PLACEHOLDER;
  textInput.classList.add("task-input");

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action-container");

  // Priority select
  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("custom-container", "priority-container");
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = PRIORITY_LABEL;
  const prioritySelect = document.createElement("select");
  PRIORITIES.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    prioritySelect.appendChild(option);
  });
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  // Date input
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("custom-container", "date-container");
  const dateLabel = document.createElement("label");
  dateLabel.textContent = DATE_LABEL;
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(dateInput);

  // Buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const addButton = document.createElement("button");
  addButton.textContent = ADD_BUTTON_TEXT;
  buttonsContainer.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = CANCEL_BUTTON_TEXT;
  buttonsContainer.appendChild(cancelButton);

  // Add the input elements to the task element
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group");
  inputGroup.appendChild(textInput);
  taskElement.appendChild(inputGroup);

  actionContainer.appendChild(priorityContainer);
  actionContainer.appendChild(dateContainer);
  actionContainer.appendChild(buttonsContainer);

  taskElement.appendChild(actionContainer);

  // Event listeners for adding and cancelling the creation of new tasks
  addButton.addEventListener("click", () => {
    if (textInput.value) {
      const taskTimestamp = Date.now();
      const taskData = {
        timestamp: taskTimestamp,
        text: textInput.value,
        priority: prioritySelect.value,
        date: dateInput.value,
      };
      tasksContainer.appendChild(createTaskElement(taskData));

      // Add task data to local storage
      const tasks = loadTasksFromLocalStorage();
      tasks.push(taskData);
      saveTasksToLocalStorage(tasks);

      taskElement.remove();
      addTaskButton.disabled = false;
    }
  });

  // Handle task cancellation
  cancelButton.addEventListener("click", () => {
    taskElement.remove();
    addTaskButton.disabled = false;
  });

  // Append new task element to tasks container
  tasksContainer.prepend(taskElement);
}

export function handleTaskCompletion(event) {
  if (event.target.classList.contains("complete-button")) {
    removeTask(event.target);
  }
}
