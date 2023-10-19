import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorageManager.js';

/**
 * Display all tasks.
 */
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
  



///// OLD


/**
 * Create a DOM element for a task.
 * @param {Object} taskData - The data for the task.
 * @returns {HTMLElement} The task element.
 */
export function createTaskElement(taskData) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.dataset.timestamp = taskData.timestamp;

    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    taskText.textContent = taskData.text;
    task.appendChild(taskText);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('custom-container', 'priority-container');
    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = taskData.priority;
    priorityContainer.appendChild(prioritySpan);

    if(taskData.date && taskData.date.trim() !== "") { // Comprobar si hay fecha y no está vacía
        const dateContainer = document.createElement('div');
        dateContainer.classList.add('custom-container', 'date-container');
        const dateSpan = document.createElement('span');
        dateSpan.textContent = taskData.date;
        dateContainer.appendChild(dateSpan);
        taskDetails.appendChild(dateContainer);
    }

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
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

    const tasks = loadTasksFromLocalStorage().filter(task => task.timestamp && task.timestamp.toString() !== taskTimestamp);
    saveTasksToLocalStorage(tasks);
}
