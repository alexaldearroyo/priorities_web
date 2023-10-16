import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorageManager.js';

/**
 * Create a DOM element for a task.
 * @param {Object} taskData - The data for the task.
 * @returns {HTMLElement} The task element.
 */
export function createTaskElement(taskData) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.dataset.timestamp = taskData.timestamp;
    task.innerHTML = `
      <div class="task-text">${taskData.text}</div>
      <div class="task-details">
          <div class="custom-container priority-container">
            <label>Priority:</label>
            <span>${taskData.priority}</span>
          </div>
          <div class="custom-container date-container">
            <label>Date:</label>
            <span>${taskData.date}</span>
          </div>
        <button class="complete-button">Complete</button>
      </div>
    `;
    task.querySelector(".complete-button").addEventListener("click", function() {
      removeTask(this);
    });
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