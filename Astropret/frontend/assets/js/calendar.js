document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Observation Lune', start: '2024-03-01' },
            { title: 'Conférence Mars', start: '2024-03-10' }
        ]
    });
    calendar.render();
});
