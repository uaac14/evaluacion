$(document).ready(function() {
    console.log("ready!");
    let storedEmail = localStorage.getItem('email');
    let storedPsw = localStorage.getItem('psw');
    if (!storedEmail || !storedPsw) {
        window.location.href = "login.html";
    }
});

function registroCita(e) {
    e.preventDefault();
    debugger;
    var citas = [];

    var title = document.getElementById("nombreM").value;
    var start = document.getElementById("fecha").value;

    citas = localStorage.getItem('citas') ? localStorage.getItem('citas') : [];




    if (citas.some((v) => { return v.title == title && v.start == start })) {
        alert("Ocupado");
    } else {
        alert("Registrada");
        let nuevaCita = {
            title,
            start,
            constraint: 'businessHours',
            color: '#257e4a'
        };
        citas.push(nuevaCita);
        localStorage.setItem('citas', JSON.stringify(citas));
        window.location.href = "calendar.html";
    }



}