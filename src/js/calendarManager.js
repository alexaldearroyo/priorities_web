import { createTaskElement } from './taskManager.js';

function getFirstDayOfMonth(year, month) {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // 0 para lunes, 6 para domingo
}

function getLastDayOfMonth(year, month) {
    let day = new Date(year, month + 1, 0).getDay();
    return day === 0 ? 6 : day - 1; // 0 para lunes, 6 para domingo
}

function generateCalendarDays(year, month) {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    // Días del mes anterior
    for (let i = 0; i < firstDay; i++) {
        const day = new Date(year, month, i - firstDay + 1).getDate();
        daysArray.push({ day, outOfCurrentMonth: true });
    }

    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({ day: i });
    }

    // Días del próximo mes
    const lastDay = getLastDayOfMonth(year, month);
    for (let i = lastDay + 1; i < 7; i++) {
        const day = new Date(year, month + 1, i - lastDay).getDate();
        daysArray.push({ day, outOfCurrentMonth: true });
    }

    return daysArray;
}

// Function to create the calendar header
function createCalendarHeader(currentDate, calendarContainer, tasksContainer, allTasks) {
    const header = document.createElement('div');
    header.classList.add('calendar-header');

    const prevButton = document.createElement('button');
    prevButton.innerHTML = "&lt;";
    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks, currentDate);
    });

    const nextButton = document.createElement('button');
    nextButton.innerHTML = "&gt;";
    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks, currentDate);
    });

    const monthYearLabel = document.createElement('span');
    monthYearLabel.textContent = `${currentDate.toLocaleString('en-US', { month: 'long' })} ${currentDate.getFullYear()}`;

    header.appendChild(prevButton);
    header.appendChild(monthYearLabel);
    header.appendChild(nextButton);

    return header;
}

// Esta función mostrará un modal con las tareas para una fecha específica
function showModalWithTasks(tasks) {
    // Crear contenedor del modal
    const modal = document.createElement('div');
    modal.classList.add('tasks-modal', 'tasks-modal-container');  // Modificación aquí

    // Contenedor para las tareas
    const tasksList = document.createElement('div');
    modal.appendChild(tasksList);

    // Para cada tarea, crea un elemento y agrégalo a la lista
    tasks.forEach(task => {
        const taskElement = createTaskElement(task); // Utilizando la función de taskManager.js
        tasksList.appendChild(taskElement);
    });

    // Agrega una opción para cerrar el modal
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-modal-button');
    closeButton.textContent = "Close";
    closeButton.addEventListener('click', () => {
        modal.remove();
    });
    modal.appendChild(closeButton);

    document.body.appendChild(modal);
}

function createWeekdaysHeader() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const header = document.createElement('div');
    header.classList.add('weekdays-header');
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        header.appendChild(dayElement);
    });
    return header;
}


// Function to create a basic calendar view and highlight dates with tasks
export function displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks, displayDate = new Date()) {
    tasksContainer.innerHTML = ''; // Clear the current tasks
    calendarContainer.innerHTML = ''; // Clear the current calendar

    const currentMonth = displayDate.getMonth();
    const currentYear = displayDate.getFullYear();

    calendarContainer.appendChild(createCalendarHeader(displayDate, calendarContainer, tasksContainer, allTasks));

    calendarContainer.appendChild(createWeekdaysHeader());

    const calendarDays = generateCalendarDays(currentYear, currentMonth);
    const calendarDatesContainer = document.createElement('div');
    calendarDatesContainer.classList.add('calendar-dates-container');

    calendarDays.forEach(({ day, outOfCurrentMonth }) => {
        const dateElement = document.createElement("div");
        dateElement.classList.add("calendar-day");
        if (outOfCurrentMonth) {
            dateElement.classList.add("out-of-month");
        }
        dateElement.textContent = day;

        if (!outOfCurrentMonth) { // Sólo verificar tareas si el día es del mes actual
            const tasksForThisDay = allTasks.filter(task => {
                const taskDate = new Date(task.date);
                return taskDate.getDate() === day && taskDate.getMonth() === currentMonth && taskDate.getFullYear() === currentYear;
            });

            if (tasksForThisDay.length > 0) {
                dateElement.classList.add("has-tasks");
                dateElement.addEventListener('click', () => {
                    showModalWithTasks(tasksForThisDay);
                });
            }
        }

        calendarDatesContainer.appendChild(dateElement);
    });

    calendarContainer.appendChild(calendarDatesContainer);

    const addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.style.display = 'none'; // Hide the "Add task" button
}
