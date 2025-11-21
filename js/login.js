let formulario = document.querySelector(".login-form");
let campoEmail = document.querySelector("#email");
let campoPassword = document.querySelector("#password");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmail.value == "") {
        alert("El email es obligatorio");
        return;
    }

    if (campoPassword.value == "") {
        alert("La contraseña es obligatoria");
        return;
    }

    if (campoPassword.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    localStorage.setItem("emailUsuario", campoEmail.value);
    formulario.submit();
});