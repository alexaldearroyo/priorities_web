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


const PROJECT_STORAGE_KEY = "projects";

/**
 * Save projects to LocalStorage.
 * @param {Array} projects - The projects to save.
 */
export function saveProjectsToLocalStorage(projects) {
  localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
}

/**
 * Load projects from LocalStorage.
 * @returns {Array} The projects loaded from LocalStorage.
 */
export function loadProjectsFromLocalStorage() {
  const storedProjects = localStorage.getItem(PROJECT_STORAGE_KEY);
  return storedProjects ? JSON.parse(storedProjects) : [];
}

/**
 * Add a new project to LocalStorage.
 * @param {string} projectName - The name of the new project.
 */
export function addProjectToLocalStorage(projectName) {
  const projects = loadProjectsFromLocalStorage();
  projects.push(projectName);
  saveProjectsToLocalStorage(projects);
}

export function removeProjectFromLocalStorage(projectName) {

  const projects = loadProjectsFromLocalStorage();
  const index = projects.indexOf(projectName);
  if (index > -1) {
    projects.splice(index, 1);
    saveProjectsToLocalStorage(projects);
}
