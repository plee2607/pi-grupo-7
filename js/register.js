let formRegister = document.querySelector("#formRegister");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let tyc = document.querySelector("#tyc");

formRegister.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value === "") {
        alert("El email es obligatorio");
        return;
    }

    if (password.value === "") {
        alert("La contraseña es obligatoria");
        return;
    }

    if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    if (password.value !== password2.value) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (!tyc.checked) {
        alert("Debes aceptar los términos y condiciones");
        return;
    }

    location.href = "login.html";
});
