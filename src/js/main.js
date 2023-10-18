
// Import the main SASS styles
import "../sass/main.sass";

// Import functions and constants from modularized files
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from "./localStorageManager.js";

import { createTaskElement, removeTask } from "./taskManager.js";

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
  const createProjectButton = document.getElementById("createProjectButton");
  const createProjectContainer = document.getElementById("createProjectContainer");

  loadAndDisplaySavedProjects(createProjectContainer);
  setupCreateProjectButton(createProjectButton, createProjectContainer);
});

// Wait for DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Reference to the "Add Task" button
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

  // Priorities Submenu
  const prioritiesToggle = document.getElementById("togglePriorities");
  const subMenu = document.querySelector(".sub-menu");
  const parentLi = prioritiesToggle.parentElement;
  const tasksLabel = document.querySelector("aside ul li:first-child");

  // Event listener for "Tasks"
  tasksLabel.addEventListener("click", displayAllTasks);

  function displayAllTasks() {
    addTaskButton.style.display = "flex"; // Shows "add task" button

    const allTasks = loadTasksFromLocalStorage();
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = ""; // Clear the current tasks
    for (const taskData of allTasks) {
      tasksContainer.appendChild(createTaskElement(taskData));
    }

    // Asegurarse de que el contenedor de tareas se muestre nuevamente
    tasksContainer.style.display = "block";
  }

  prioritiesToggle.addEventListener("click", () => {
    const isSubMenuVisible = subMenu.style.display === "block";
    subMenu.style.display = isSubMenuVisible ? "none" : "block";
    parentLi.classList.toggle("sub-menu-opened", !isSubMenuVisible);
  });

  // Filter tasks by selected priority from the sidebar menu
  subMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const selectedPriority = event.target.textContent;
      filterTasksByPriority(selectedPriority);
      
      // Asegurarse de que el contenedor de tareas se muestre nuevamente
      const tasksContainer = document.getElementById("tasks");
      tasksContainer.style.display = "block";
      
      // Ocultar otros contenedores para mantener una vista limpia
      const createProjectContainer = document.getElementById("createProjectContainer");
      const calendarContainer = document.getElementById("calendarContainer");
      createProjectContainer.style.display = "none";
      calendarContainer.innerHTML = "";
    }
});


  // Function to display tasks based on their priority
  function filterTasksByPriority(priority) {
    const allTasks = loadTasksFromLocalStorage();
    const filteredTasks = allTasks.filter((task) => task.priority === priority);
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = ""; // Clear the current tasks
    for (const taskData of filteredTasks) {
      tasksContainer.appendChild(createTaskElement(taskData));
    }

    const addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.style.display = "none"; // Oculta el botón "Add task"
  }

  // Agrega un evento para el elemento "Projects" en la barra lateral
  const projectsLabel = document.querySelector("#projectsMenuItem");
  const createProjectContainer = document.getElementById(
    "createProjectContainer"
  );
  createProjectContainer.classList.add("project-container");

  projectsLabel.addEventListener("click", () => {
    console.log("Clicked on Projects"); // Añade esta línea
    // Oculta el botón "Add Task" u otros elementos relevantes
    if (addTaskButton) {
      addTaskButton.style.display = "none";
    }

    // Muestra el botón "Create Project"
    createProjectContainer.style.display = "block";

    // Oculta el cuadro de tareas
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.style.display = "none";
  });

  // Display tasks on a calendar view when "Dates" menu item is clicked
  const datesLabel = document.querySelector("aside ul li:nth-child(4)");

  // Event listener for "Dates" menu item
  datesLabel.addEventListener("click", displayCalendarWithTasks);

  // Function to create a basic calendar view and highlight dates with tasks
  datesLabel.addEventListener("click", () => {
    const allTasks = loadTasksFromLocalStorage();
    const tasksContainer = document.getElementById("tasks");
    const calendarContainer = document.getElementById("calendarContainer");
    displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks);
  });

  // Get all sidebar items and add an event listener to hide calendar when any item other than "Dates" is clicked
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
  
  


  // Sidebar toggle functionality for mobile or smaller screens
  const toggleSidebarButton = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector("aside");

  toggleSidebarButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});