// Import the main SASS styles
import "../sass/main.sass";

// Import functions and constants from modularized files
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from "./localStorageManager.js";

import { 
  createTaskElement,
  removeTask,
  displayAllTasks,
  filterTasksByPriority
} from "./taskManager.js";

import {
  displayProject,
  setupCreateProjectButton,
  loadAndDisplaySavedProjects,
} from "./projectManager";

import { displayCalendarWithTasks } from "./calendarManager.js";

import {
  PRIORITIES,
  TASK_INPUT_PLACEHOLDER,
  PRIORITY_LABEL,
  DATE_LABEL,
  ADD_BUTTON_TEXT,
  CANCEL_BUTTON_TEXT,
  COMPLETE_BUTTON_TEXT,
} from "./constants.js";

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
    const createProjectContainer = document.getElementById("createProjectContainer");
    createProjectButton.style.display = "none";
    setupCreateProjectButton(createProjectButton, createProjectContainer);
}

function setupTaskEnvironment() {
    const addTaskButton = document.getElementById("addTaskButton");
    const tasksContainer = document.getElementById("tasks");

    // Hide the "Create Project" button initially
    addTaskButton.style.display = "none";

    // Add event listener to detect when a task is marked as complete
    tasksContainer.addEventListener("click", handleTaskCompletion);

    // Load and display existing tasks from local storage
    loadAndDisplayTasks(tasksContainer);

    // Add event listener for the "Add Task" button
    addTaskButton.addEventListener("click", handleAddTaskClick);
}

function handleTaskCompletion(event) {
    if (event.target.classList.contains("complete-button")) {
        removeTask(event.target);
    }
}

function loadAndDisplayTasks(tasksContainer) {
    const storedTasks = loadTasksFromLocalStorage();
    for (const taskData of storedTasks) {
        tasksContainer.appendChild(createTaskElement(taskData));
    }
}

function handleAddTaskClick() {
 const addTaskButton = document.getElementById("addTaskButton");
  const createProjectButton = document.getElementById("createProjectButton"); // Moved this line up for reference

  // Initially hide the "Create Project" button
  createProjectButton.style.display = "none";

  // Reference to the main tasks container and add event listener to detect when a task is marked as complete
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete-button")) {
      removeTask(event.target);
    }
  });

  // Load existing tasks from local storage and display them
  const storedTasks = loadTasksFromLocalStorage();
  for (const taskData of storedTasks) {
    tasksContainer.appendChild(createTaskElement(taskData));
  }

  // Event listener for the "Add Task" button
  addTaskButton.addEventListener("click", () => {
    // Disable the "Add Task" button to prevent multiple task additions
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
  });
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
      const createProjectContainer = document.getElementById("createProjectContainer");
      const calendarContainer = document.getElementById("calendarContainer");
      createProjectContainer.style.display = "none";
      calendarContainer.innerHTML = "";
    }
  });
}

function setupProjectsLabel() {
  const projectsLabel = document.querySelector("#projectsMenuItem");
  let projectsAreShown = false;
  const createProjectContainer = document.getElementById(
    "createProjectContainer"
  );
  createProjectContainer.classList.add("project-container");
  projectsLabel.addEventListener("click", () => {

    if (!projectsAreShown) {
      const addTaskButton = document.getElementById("addTaskButton");
      if (addTaskButton) {
        addTaskButton.style.display = "none";
      }
  
      createProjectContainer.style.display = "block";  
      loadAndDisplaySavedProjects(createProjectContainer);
  
      const tasksContainer = document.getElementById("tasks");
      tasksContainer.style.display = "none";
        projectsAreShown = true;
    }
  });
}

function setupDatesLabel() {
  const datesLabel = document.querySelector("aside ul li:nth-child(4)");
  datesLabel.addEventListener("click", displayCalendarWithTasks);
  datesLabel.addEventListener("click", () => {
    const allTasks = loadTasksFromLocalStorage();
    const tasksContainer = document.getElementById("tasks");
    const calendarContainer = document.getElementById("calendarContainer");
    displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks);
  });
}

function setupSidebarItems() {
  const sidebarItems = document.querySelectorAll("aside ul li");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const calendarContainer = document.getElementById("calendarContainer");
  
      switch (event.target.textContent) {
        case "Projects":
          createProjectButton.style.display = "block";
          createProjectContainer.style.display = "block";
          calendarContainer.innerHTML = ""; // Clear the calendar container
          break;
        case "Dates":
          createProjectButton.style.display = "none";
          createProjectContainer.style.display = "none";
  
          const allTasks = loadTasksFromLocalStorage();
          const tasksContainer = document.getElementById("tasks");
          displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks);
          break;
        default:
          createProjectButton.style.display = "none";
          createProjectContainer.style.display = "none";
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
