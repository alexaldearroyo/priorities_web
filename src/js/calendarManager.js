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

// Function to create a basic calendar view and highlight dates with tasks
export function displayCalendarWithTasks(tasksContainer, calendarContainer, allTasks, displayDate = new Date()) {
    tasksContainer.innerHTML = ''; // Clear the current tasks
    calendarContainer.innerHTML = ''; // Clear the current calendar

    const currentMonth = displayDate.getMonth();
    const currentYear = displayDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarContainer.appendChild(createCalendarHeader(displayDate, calendarContainer, tasksContainer, allTasks));

    // ... (parte inicial del código sigue igual)

    const calendarDatesContainer = document.createElement('div');
    calendarDatesContainer.classList.add('calendar-dates-container');

    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("calendar-day");
        dateElement.textContent = day;

        const tasksForThisDay = allTasks.filter(task => {
            const taskDate = new Date(task.date);
            return taskDate.getDate() === day && taskDate.getMonth() === currentMonth && taskDate.getFullYear() === currentYear;
        });

        if (tasksForThisDay.length > 0) {
            dateElement.classList.add("has-tasks");
        }

        calendarDatesContainer.appendChild(dateElement); // Agregamos cada elemento de fecha al contenedor de fechas.
    }

    calendarContainer.appendChild(calendarDatesContainer); // Agregamos el contenedor de fechas al contenedor del calendario después de finalizar el bucle.

    const addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.style.display = 'none'; // Hide the "Add task" button

}
