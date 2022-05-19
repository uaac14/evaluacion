function revisarUsuario(e) {
    e.preventDefault();

    // debugger;
    let storedEmail = localStorage.getItem('email');
    let storedPsw = localStorage.getItem('psw');

    let usuarioEmail = document.getElementById('usuario').value;
    let usuarioPsw = document.getElementById('password').value;
    if (usuarioEmail != "" && usuarioPsw != "") {

        if (storedEmail !== usuarioEmail || storedPsw !== usuarioPsw) {
            alert('Usuario no registrado');
        } else {
            window.location.href = "index.html";
        }
    } else {
        alert("Completa usuario y contraseña")
    }
}