var email, psw;
email = document.getElementById("email");
psw = document.getElementById("password");


function guardarUsuario(e) {
    e.preventDefault();

    var storedEmail = localStorage.getItem('email');
    var storedPsw = localStorage.getItem('psw');

    if (email.value !== storedEmail || psw.value !== storedPsw) {
        alert('Registrado');
        localStorage.setItem('email', email.value);
        localStorage.setItem('psw', psw.value);
        window.location.href = "login.html";

    } else {
        alert('Ya estas registrado');
        window.location.href = "login.html";
    }
}