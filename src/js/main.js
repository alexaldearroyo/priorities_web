// Import the SASS file
import "../sass/main.sass";

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks).filter(task => task.timestamp) : [];
}

function removeTask(buttonElement) {
  const taskElement = buttonElement.parentElement.parentElement;
  const taskTimestamp = taskElement.dataset.timestamp;

  taskElement.remove();

  const tasks = loadTasksFromLocalStorage().filter(task => task.timestamp && task.timestamp.toString() !== taskTimestamp);
  saveTasksToLocalStorage(tasks);
}
  
function createTaskElement(taskData) {
  const task = document.createElement('div');
  task.dataset.timestamp = taskData.timestamp;
  task.innerHTML = `
    ${taskData.text} 
    <div class="task-details">
        <div class="custom-container">
          <label>Priority:</label>
          <span>${taskData.priority}</span>
        </div>
        <div class="custom-container">
          <label>Date:</label>
          <span>${taskData.date}</span>
        </div>
      <button>Complete</button>
    </div>
  `;
  task.querySelector("button").addEventListener("click", function() {
    removeTask(this);
  });
  return task;
}


// New Task Box
document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTaskButton");
  const tasksContainer = document.getElementById("tasks");

  tasksContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Complete") {
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

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Write your task here";
    textInput.style.width = "100%";
    textInput.style.height = "40px";
    textInput.style.fontSize = "14px";

    const actionContainer = document.createElement("div");
    actionContainer.style.display = "flex";
    actionContainer.style.justifyContent = "space-between";
    actionContainer.style.width = "100%"; 

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("custom-container"); // Añadir esta línea
    priorityContainer.style.flex = "1"; // Esto asegura que ocupe una fracción del espacio
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    const prioritySelect = document.createElement("select");
    ["High", "Medium", "Low"].forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority;
      prioritySelect.appendChild(option);
    });
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(prioritySelect);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("custom-container"); // Añadir esta línea

    dateContainer.style.flex = "1"; // Esto asegura que ocupe una fracción del espacio
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);

    const buttonsContainer = document.createElement("div"); // Nuevo contenedor para los botones
    buttonsContainer.classList.add("buttons-container"); // crea una nueva clase para el contenedor de los botones
    
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.flex = "1"; // Esto asegura que ocupe una fracción del espacio
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    buttonsContainer.appendChild(addButton); // Agrega el botón al nuevo contenedor

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    buttonsContainer.appendChild(cancelButton); // Agrega el botón al nuevo contenedor

    const inputGroup = document.createElement("div");
    inputGroup.appendChild(textInput);
    taskElement.appendChild(inputGroup);

    actionContainer.appendChild(priorityContainer);
    actionContainer.appendChild(dateContainer);
    actionContainer.appendChild(buttonsContainer); // Agrega el contenedor de botones al actionContainer


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
  ///////////////

  // Priorities SUbmenu
  const prioritiesToggle = document.getElementById("togglePriorities");
  const subMenu = document.querySelector(".sub-menu");
  const parentLi = prioritiesToggle.parentElement;

  prioritiesToggle.addEventListener("click", () => {
    const isSubMenuVisible = subMenu.style.display === "block";
    subMenu.style.display = isSubMenuVisible ? "none" : "block";
    parentLi.classList.toggle("sub-menu-opened", !isSubMenuVisible);
  });
});