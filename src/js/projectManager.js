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
export function displayProject(projectName, createProjectContainer) {
    const projectElement = createProjectElement(projectName);
    createProjectContainer.appendChild(projectElement);
}

export function loadAndDisplaySavedProjects(createProjectContainer) {
    const savedProjects = loadProjectsFromLocalStorage();
    savedProjects.forEach(projectName => {
        displayProject(projectName, createProjectContainer);
    });
}

export function setupCreateProjectButton(createProjectButton, createProjectContainer) {
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
        const projectName = projectInput.value;

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

    createProjectButton.insertAdjacentElement('afterend', inputAndButtonsContainer);
    projectInput.style.display = "block";
    createProjectActions.style.display = "flex";
    projectInput.focus();

    isInputShown = true; // Establecemos isInputShown como true cuando el formulario está visible

}
