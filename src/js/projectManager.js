// projectManager.js

import {
  addProjectToLocalStorage,
  loadProjectsFromLocalStorage,
  removeProjectFromLocalStorage,
} from "./localStorageManager";

// Helper Functions
function createProjectElement(projectName) {
  const projectElement = document.createElement("div");
  projectElement.className = "project-item";

  const projectNameElement = document.createElement("span");
  projectNameElement.textContent = projectName;

  const buttonsContainer = createProjectButtonsContainer(
    projectName,
    projectElement
  );

  projectElement.appendChild(projectNameElement);
  projectElement.appendChild(buttonsContainer);

  return projectElement;
}

function createProjectButtonsContainer(projectName, projectElement) {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";

  const viewButton = document.createElement("button");
  viewButton.textContent = "View";
  viewButton.addEventListener("click", () => {
    // Añade un console.log para verificar si se está ejecutando este código
    console.log("View button clicked");

    // Obtener el título del proyecto y el botón "Add Task" del proyecto
    const projectTitle = document.getElementById("projectTitle");
    const addTaskButtonProject = document.getElementById(
      "addTaskButtonProject"
    );

    // Mostrar el contenedor del título y el botón "Add Task" del proyecto
    projectTitle.textContent = projectName;
    addTaskButtonProject.style.display = "block";

    // Ocultar el contenido anterior y mostrar el contenido del proyecto
    const createProjectContainer = document.getElementById(
      "createProjectContainer"
    );
    const projectDetailsContainer = document.getElementById(
      "projectDetailsContainer"
    );
    createProjectContainer.style.display = "none";
    projectDetailsContainer.style.display = "block";

    // Aquí puedes agregar código adicional para cargar y mostrar las tareas del proyecto
    // Por ejemplo, cargar las tareas desde el almacenamiento local y mostrarlas en el projectTasks
    const projectTasks = document.getElementById("projectTasks");
    projectTasks.innerHTML = ""; // Limpia cualquier contenido previo

    // Aquí puedes cargar y mostrar las tareas del proyecto en projectTasks
  });

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.addEventListener("click", () => {
    // Aquí puedes agregar código para manejar la lógica de agregar tareas al proyecto
    // Por ejemplo, mostrar un formulario para agregar tareas al proyecto.
    // También puedes llamar a una función que maneje esta lógica.
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    projectElement.remove();
    removeProjectFromLocalStorage(projectName);
  });

  buttonsContainer.appendChild(viewButton);
  buttonsContainer.appendChild(deleteButton);
  return buttonsContainer;
}

// Main Functions
export function displayProject(projectName, createProjectContainer) {
  const projectElement = createProjectElement(projectName);
  createProjectContainer.appendChild(projectElement);
}

export function loadAndDisplaySavedProjects(createProjectContainer) {
  // Referencia al contenedor de la lista de proyectos
  const projectsListContainer = document.getElementById("projectsList");

  // Limpia cualquier proyecto existente en el contenedor
  projectsListContainer.innerHTML = "";

  const savedProjects = loadProjectsFromLocalStorage();
  savedProjects.forEach((projectName) => {
    displayProject(projectName, createProjectContainer);
  });
}

export function setupCreateProjectButton(
  createProjectButton,
  createProjectContainer
) {
  createProjectButton.addEventListener("click", () => {
    toggleProjectInput(createProjectButton, createProjectContainer);
  });

  // Setting up the event listener for the "Projects" label here to ensure it's only set once.
  const projectsLabel = document.querySelector("#projectsMenuItem");
  projectsLabel.addEventListener("click", () => {
    const addTaskButton = document.getElementById("addTaskButton");
    if (addTaskButton) {
      addTaskButton.style.display = "none";
    }

    createProjectContainer.style.display = "flex";
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.style.display = "none";
  });
}

let isInputShown = false;

function toggleProjectInput(createProjectButton, createProjectContainer) {
  if (isInputShown) return;

  const projectInput = document.createElement("input");
  projectInput.type = "text";
  projectInput.placeholder = "Project Name";

  const addButton = document.createElement("button");
  addButton.textContent = "Add";

  addButton.addEventListener("click", () => {
    const projectName = projectInput.value.trim();

    if (!projectName) {
      // Comprobar si el nombre del proyecto está vacío
      alert("Please, enter a project title.");
      return;
    }

    // Guardar el proyecto en localStorage
    addProjectToLocalStorage(projectName);

    // Mostrar el proyecto en la interfaz
    displayProject(projectName, createProjectContainer);

    projectInput.value = "";
    inputAndButtonsContainer.remove();
    isInputShown = false;
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";

  cancelButton.addEventListener("click", () => {
    inputAndButtonsContainer.remove();
    isInputShown = false;
  });

  const createProjectActions = document.createElement("div");
  createProjectActions.appendChild(addButton);
  createProjectActions.appendChild(cancelButton);

  const inputAndButtonsContainer = document.createElement("div");
  inputAndButtonsContainer.className = "input-and-buttons-container";
  inputAndButtonsContainer.appendChild(projectInput);
  inputAndButtonsContainer.appendChild(createProjectActions);

  createProjectButton.insertAdjacentElement(
    "afterend",
    inputAndButtonsContainer
  );
  projectInput.style.display = "block";
  createProjectActions.style.display = "flex";
  projectInput.focus();

  isInputShown = true; // Establecemos isInputShown como true cuando el formulario está visible
}
