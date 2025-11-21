let formulario = document.querySelector(".login-form");
let campoEmail = document.querySelector("input[name='email']");
let campoPassword = document.querySelector("input[name='password']");

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

    location.href = "index.html";
});