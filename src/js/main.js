// Importa el archivo SASS
import "../sass/main.sass";

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks).filter(task => task.timestamp);
  }
  return [];
}

document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTaskButton");
  const tasksContainer = document.getElementById("tasks");

  function removeTask(buttonElement) {
    const taskElement = buttonElement.parentElement;
    const taskTimestamp = taskElement.dataset.timestamp;

    console.log("Timestamp de la tarea a eliminar:", taskTimestamp); // Añade este log


    // Elimina la tarea del DOM
    taskElement.remove();

    // Elimina la tarea del localStorage
    const tasks = loadTasksFromLocalStorage();
    console.log("Tareas antes de filtrar:", tasks); // Añade este log


    const updatedTasks = tasks.filter(task => task.timestamp && task.timestamp.toString() !== taskTimestamp);
    console.log("Tareas después de filtrar:", updatedTasks); // Añade este log


    saveTasksToLocalStorage(updatedTasks);
  }

  const storedTasks = loadTasksFromLocalStorage();
  for (const taskData of storedTasks) {
    const task = document.createElement('div');
    task.dataset.timestamp = taskData.timestamp;
    task.innerHTML = `
        ${taskData.text} - ${taskData.priority} - ${taskData.date}
        <button>Eliminar</button>
    `;

    // Agregamos el evento de escucha al botón dentro de la tarea
    task.querySelector("button").addEventListener("click", function() {
      removeTask(this);
    });

    tasksContainer.appendChild(task);
  }

  addTaskButton.addEventListener("click", () => {
    addTaskButton.disabled = true;

    const taskElement = document.createElement("div");

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Escribe tu tarea aquí";

    const prioritySelect = document.createElement("select");
    ["High", "Medium", "Low"].forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority;
      prioritySelect.appendChild(option);
    });

    const dateInput = document.createElement("input");
    dateInput.type = "date";

    const addButton = document.createElement("button");
    addButton.textContent = "Agregar";
    addButton.classList.add("add-button");  
    addButton.addEventListener("click", () => {
      if (textInput.value) {
        const taskTimestamp = Date.now();

        const task = document.createElement("div");
        task.dataset.timestamp = taskTimestamp;
        task.innerHTML = `
            ${textInput.value} - ${prioritySelect.value} - ${dateInput.value}
            <button>Eliminar</button>
        `;

        task.querySelector("button").addEventListener("click", function() {
          removeTask(this);
        });

        tasksContainer.appendChild(task);

        // Agregar la tarea al localStorage
        const tasks = loadTasksFromLocalStorage();
        tasks.push({
          timestamp: taskTimestamp,
          text: textInput.value,
          priority: prioritySelect.value,
          date: dateInput.value,
        });
        saveTasksToLocalStorage(tasks);

        taskElement.remove();
        addTaskButton.disabled = false;
      }
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.addEventListener("click", () => {
      taskElement.remove();
      addTaskButton.disabled = false;
    });

    taskElement.appendChild(textInput);
    taskElement.appendChild(prioritySelect);
    taskElement.appendChild(dateInput);
    taskElement.appendChild(addButton);
    taskElement.appendChild(cancelButton);

    tasksContainer.appendChild(taskElement);
  });

  // Aquí empieza el código para el toggle del submenú
  const prioritiesToggle = document.getElementById("togglePriorities");
  const subMenu = document.querySelector(".sub-menu");
  const parentLi = prioritiesToggle.parentElement;

  prioritiesToggle.addEventListener("click", () => {
    if (subMenu.style.display === "none" || !subMenu.style.display) {
      subMenu.style.display = "block";
      parentLi.classList.add("sub-menu-opened");
    } else {
      subMenu.style.display = "none";
      parentLi.classList.remove("sub-menu-opened");
    }
  });
});
