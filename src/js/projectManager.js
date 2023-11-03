// projectManager.js

import {
    addProjectToLocalStorage,
    loadProjectsFromLocalStorage,
    removeProjectFromLocalStorage 
} from "./localStorageManager";

// Helper Functions
function createProjectElement(projectName) {
    const projectElement = document.createElement("div");
    projectElement.className = "project-item";

    const projectNameElement = document.createElement("span");
    projectNameElement.textContent = projectName;

    const buttonsContainer = createProjectButtonsContainer(projectName, projectElement);

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
        // Funcionalidad para ver el proyecto
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = `deleteProjectButton_${projectName}`;
    deleteButton.addEventListener("click", () => {
        projectElement.remove();
        removeProjectFromLocalStorage(projectName);
    });

    buttonsContainer.appendChild(viewButton);
    buttonsContainer.appendChild(deleteButton);
    return buttonsContainer;
}

// Main Functions
export function displayProject(projectName, projectsContainer) {
    const projectElement = createProjectElement(projectName);
    projectsContainer.appendChild(projectElement);
}

export function loadAndDisplaySavedProjects(projectsContainer) {
    // Referencia al contenedor de la lista de proyectos
    const projectsListContainer = document.getElementById("projectsList");

    // Limpia cualquier proyecto existente en el contenedor
    projectsListContainer.innerHTML = "";

    const savedProjects = loadProjectsFromLocalStorage();
    savedProjects.forEach(projectName => {
        displayProject(projectName, projectsContainer);
    });
}

export function setupCreateProjectButton(createProjectButton, projectsContainer) {
    createProjectButton.addEventListener("click", () => {
        toggleProjectInput(createProjectButton, projectsContainer);
    });

    // Setting up the event listener for the "Projects" label here to ensure it's only set once.
    const projectsLabel = document.querySelector("#menuProjects");
    projectsLabel.addEventListener("click", () => {
        const addTaskButton = document.getElementById("addTaskButton");
        if (addTaskButton) {
            addTaskButton.style.display = "none";
        }

        projectsContainer.style.display = "flex";
        const tasksContainer = document.getElementById("tasks");
        tasksContainer.style.display = "none";
    });
}

let isInputShown = false;

function toggleProjectInput(createProjectButton, projectsContainer) {

    if (isInputShown) return;

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.placeholder = "Project Name";

    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    addButton.addEventListener("click", () => {
        const projectName = projectInput.value.trim();
    
        if (!projectName) {  // Comprobar si el nombre del proyecto está vacío
            alert('Please, enter a project title.');
            return;
        }
    
        // Guardar el proyecto en localStorage
        addProjectToLocalStorage(projectName);
    
        // Mostrar el proyecto en la interfaz
        displayProject(projectName, projectsContainer);
    
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

    createProjectButton.insertAdjacentElement('afterend', inputAndButtonsContainer);
    projectInput.style.display = "block";
    createProjectActions.style.display = "flex";
    projectInput.focus();

    isInputShown = true; // Establecemos isInputShown como true cuando el formulario está visible

}
