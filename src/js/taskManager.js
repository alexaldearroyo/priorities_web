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

    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    taskText.textContent = taskData.text;
    task.appendChild(taskText);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('custom-container', 'priority-container');
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = "Priority:";
    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = taskData.priority;
    // priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(prioritySpan);

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('custom-container', 'date-container');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = "Date:";
    const dateSpan = document.createElement('span');
    dateSpan.textContent = taskData.date;
    // dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateSpan);

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
      removeTask(this);
    });

    taskDetails.appendChild(priorityContainer);
    taskDetails.appendChild(dateContainer);
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