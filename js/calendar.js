let dataCalendar = JSON.parse(localStorage.getItem('citas'));

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialDate: '2022-05-18',
        navLinks: true,
        businessHours: true,
        editable: true,
        selectable: true,
        events: dataCalendar
    });

    calendar.render();
});