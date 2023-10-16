// Import the SASS file
import "../sass/main.sass";

// Import functions and constants from the modularized files
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage
} from './localStorageManager.js';

import {
  createTaskElement,
  removeTask
} from './taskManager.js';

import {
  PRIORITIES,
  TASK_INPUT_PLACEHOLDER,
  PRIORITY_LABEL,
  DATE_LABEL,
  ADD_BUTTON_TEXT,
  CANCEL_BUTTON_TEXT,
  COMPLETE_BUTTON_TEXT
} from './constants.js';

// New Task Box
document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTaskButton");
  const tasksContainer = document.getElementById("tasks");

  tasksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete-button")) {
      removeTask(event.target);
    }
  });

  const storedTasks = loadTasksFromLocalStorage();
  for (const taskData of storedTasks) {
    tasksContainer.appendChild(createTaskElement(taskData));
  }

  addTaskButton.addEventListener("click", () => {
    addTaskButton.disabled = true;

    const taskElement = document.createElement("div");
    taskElement.classList.add("new-task");

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = TASK_INPUT_PLACEHOLDER;
    textInput.classList.add("task-input");

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action-container");

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

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("custom-container", "date-container");

    const dateLabel = document.createElement("label");
    dateLabel.textContent = DATE_LABEL;
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const addButton = document.createElement("button");
    addButton.textContent = ADD_BUTTON_TEXT;
    buttonsContainer.appendChild(addButton);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = CANCEL_BUTTON_TEXT;
    buttonsContainer.appendChild(cancelButton);

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(textInput);
    taskElement.appendChild(inputGroup);

    actionContainer.appendChild(priorityContainer);
    actionContainer.appendChild(dateContainer);
    actionContainer.appendChild(buttonsContainer);

    taskElement.appendChild(actionContainer);

    addButton.addEventListener("click", () => {
      if (textInput.value) {
        const taskTimestamp = Date.now();
        const taskData = {
          timestamp: taskTimestamp,
          text: textInput.value,
          priority: prioritySelect.value,
          date: dateInput.value
        };
        tasksContainer.appendChild(createTaskElement(taskData));

        // Agregar la tarea al localStorage
        const tasks = loadTasksFromLocalStorage();
        tasks.push(taskData);
        saveTasksToLocalStorage(tasks);

        taskElement.remove();
        addTaskButton.disabled = false;
      }
    });

    cancelButton.addEventListener("click", () => {
      taskElement.remove();
      addTaskButton.disabled = false;
    });

    tasksContainer.appendChild(taskElement);
  });

  // Priorities Submenu
  const prioritiesToggle = document.getElementById("togglePriorities");
  const subMenu = document.querySelector(".sub-menu");
  const parentLi = prioritiesToggle.parentElement;

  prioritiesToggle.addEventListener("click", () => {
    const isSubMenuVisible = subMenu.style.display === "block";
    subMenu.style.display = isSubMenuVisible ? "none" : "block";
    parentLi.classList.toggle("sub-menu-opened", !isSubMenuVisible);
  });

  // Sidebar toggle
  const toggleSidebarButton = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector("aside");

  toggleSidebarButton.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
  });
});