// Import the main SASS styles
import "../sass/main.sass";

// Import functions and constants from modularized files
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from "./localStorageManager.js";

import {
  handleAddTaskClick,
  handleTaskCompletion,
  createTaskElement,
  removeTask,
  displayAllTasks,
  filterTasksByPriority,
} from "./taskManager.js";

import {
  displayProject,
  setupCreateProjectButton,
  loadAndDisplaySavedProjects,
} from "./projectManager";

import { displayCalendarWithTasks } from "./calendarManager.js";


document.addEventListener("DOMContentLoaded", () => {
  setupProjectEnvironment();
  setupTaskEnvironment();
  setupPrioritiesSubMenu();
  setupProjectsLabel();
  setupDatesLabel();
  setupSidebarItems();
  setupSidebarToggle();
  displayAllTasks();
});

function setupProjectEnvironment() {
  const createProjectButton = document.getElementById("createProjectButton");
  const projectsContainer = document.getElementById("projectsContainer");
  createProjectButton.style.display = "none";
  setupCreateProjectButton(createProjectButton, projectsContainer);
}

function setupTaskEnvironment() {
  const addTaskButton = document.getElementById("addTaskButton");
  const tasksContainer = document.getElementById("tasks");

  // Hide the "Create Project" button initially
  addTaskButton.style.display = "none";

  // Add event listener to detect when a task is marked as complete
  tasksContainer.addEventListener("click", handleTaskCompletion);

  // Add event listener for the "Add Task" button
  addTaskButton.addEventListener("click", handleAddTaskClick);
}

function setupPrioritiesSubMenu() {
  const prioritiesToggle = document.getElementById("togglePriorities");
  const subMenu = document.querySelector(".sub-menu");
  const parentLi = prioritiesToggle.parentElement;
  const tasksLabel = document.querySelector("aside ul li:first-child");

  tasksLabel.addEventListener("click", displayAllTasks);

  prioritiesToggle.addEventListener("click", () => {
    const isSubMenuVisible = subMenu.style.display === "block";
    subMenu.style.display = isSubMenuVisible ? "none" : "block";
    parentLi.classList.toggle("sub-menu-opened", !isSubMenuVisible);
  });

  subMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const selectedPriority = event.target.textContent;
      filterTasksByPriority(selectedPriority);
      const tasksContainer = document.getElementById("tasks");
      tasksContainer.style.display = "block";
      const projectsContainer = document.getElementById("projectsContainer");
      const calendarContainer = document.getElementById("calendarContainer");
      projectsContainer.style.display = "none";
      calendarContainer.innerHTML = "";
    }
  });
}

function setupProjectsLabel() {
  const projectsLabel = document.querySelector("#menuProjects");
  let projectsAreShown = false;
  const projectsContainer = document.getElementById("projectsContainer");
  projectsContainer.classList.add("project-container");
  projectsLabel.addEventListener("click", () => {
    if (!projectsAreShown) {
      const addTaskButton = document.getElementById("addTaskButton");
      if (addTaskButton) {
        addTaskButton.style.display = "none";
      }

      projectsContainer.style.display = "block";
      loadAndDisplaySavedProjects(projectsContainer);

      const tasksContainer = document.getElementById("tasks");
      tasksContainer.style.display = "none";
      projectsAreShown = true;
    }
  });
}

function setupDatesLabel() {
  const datesLabel = document.querySelector("aside ul li:nth-child(4)");
  datesLabel.addEventListener("click", () => {
    const allTasks = loadTasksFromLocalStorage();
    const tasksContainer = document.getElementById("tasks");
    const calendarContainer = document.getElementById("calendarContainer");
    displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks);
  });
}

function setupSidebarItems() {
  const sidebarItems = document.querySelectorAll("aside ul li");
  const createProjectButton = document.getElementById("createProjectButton");
  const projectsContainer = document.getElementById("projectsContainer");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const calendarContainer = document.getElementById("calendarContainer");

      switch (event.target.textContent) {
        case "Projects":
          createProjectButton.style.display = "block";
          projectsContainer.style.display = "block";
          calendarContainer.innerHTML = ""; // Clear the calendar container
          break;
        case "Dates":
          createProjectButton.style.display = "none";
          projectsContainer.style.display = "none";

          const allTasks = loadTasksFromLocalStorage();
          const tasksContainer = document.getElementById("tasks");
          displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks);
          break;
        default:
          createProjectButton.style.display = "none";
          projectsContainer.style.display = "none";
          calendarContainer.innerHTML = ""; // Clear the calendar container
          break;
      }
    });
  });
}

function setupSidebarToggle() {
  const toggleSidebarButton = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector("aside");
  toggleSidebarButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
}
