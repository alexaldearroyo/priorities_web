// localStorageManager.js

const TASK_STORAGE_KEY = "tasks";

/**
 * Save tasks to LocalStorage.
 * @param {Array} tasks - The tasks to save.
 */
export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Load tasks from LocalStorage.
 * @returns {Array} The tasks loaded from LocalStorage.
 */
export function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem(TASK_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks).filter(task => task.timestamp) : [];
}

/**
 * Remove a task from LocalStorage based on its timestamp.
 * @param {number} taskTimestamp - The timestamp of the task to remove.
 */
export function removeTaskFromLocalStorage(taskTimestamp) {
  const tasks = loadTasksFromLocalStorage().filter(task => task.timestamp && task.timestamp.toString() !== taskTimestamp);
  saveTasksToLocalStorage(tasks);
}
