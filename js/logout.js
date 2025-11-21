let linkLogout = document.querySelector("#logoutLink");
let menuSuperior = document.querySelector("nav ul");

if (linkLogout != null) {

    linkLogout.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem("emailUsuario");
        if (menuSuperior != null) {
            menuSuperior.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a id="linkLogin" href="login.html">Login</a></li>
                <li><a id="linkRegistro" href="register.html">Registro</a></li>
            `;
        }
    });

}