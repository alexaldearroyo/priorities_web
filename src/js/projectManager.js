export function displayProjectInput(createProjectContainer) {
    // Verifica si ya hay un recuadro de entrada. Si es así, no hagas nada.
    if (document.getElementById("projectNameInput")) {
        return;
    }

    // Crea el recuadro de entrada para el nombre del proyecto
    const projectInput = document.createElement('input');
    projectInput.id = 'projectNameInput';
    projectInput.type = 'text';
    projectInput.placeholder = 'Nombre del proyecto';
    
    // Añade un evento "Enter" al recuadro de entrada
    projectInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && projectInput.value.trim() !== '') {
            saveProjectToLocalStorage(projectInput.value.trim());
            displaySavedProjects(createProjectContainer);
            projectInput.remove(); // Elimina el recuadro de entrada después de guardar el proyecto
        }
    });

    createProjectContainer.appendChild(projectInput);
    projectInput.focus(); // Enfoca el recuadro de entrada para que el usuario pueda empezar a escribir inmediatamente
}

export function saveProjectToLocalStorage(projectName) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    if (!projects.includes(projectName)) {
        projects.push(projectName);
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

export function displaySavedProjects(container) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    container.innerHTML = ''; // Limpiar el contenedor

    projects.forEach(projectName => {
        const projectElement = document.createElement('div');
        projectElement.textContent = projectName;
        container.appendChild(projectElement);
    });
}
