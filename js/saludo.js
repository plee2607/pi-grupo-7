let emailGuardado = localStorage.getItem("emailUsuario");

let nav = document.querySelector("nav ul");

if (emailGuardado != null && nav != null) {

    nav.innerHTML = nav.innerHTML + `
        <li id="mensajeBienvenida">Bienvenido: ${emailGuardado}</li>
        <li><a id="logoutLink" href="#">Logout</a></li>
    `;

    let linkLogin = document.querySelector("#linkLogin");
    let linkRegistro = document.querySelector("#linkRegistro");

    if (linkLogin != null) {
        linkLogin.style.display = "none";
    }

    if (linkRegistro != null) {
        linkRegistro.style.display = "none";
    }
}