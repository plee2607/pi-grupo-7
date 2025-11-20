let emailGuardado = localStorage.getItem("emailUsuario");

let nav = document.querySelector("nav ul");

if (emailGuardado != null) {

    let liBienvenida = document.createElement("li");
    liBienvenida.innerText = "Bienvenido: " + emailGuardado;

    let liLogout = document.createElement("li");
    let linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.href = "#";
    liLogout.appendChild(linkLogout);

    nav.appendChild(liBienvenida);
    nav.appendChild(liLogout);

    let linkLogin = document.querySelector("a[href='login.html']");
    let linkRegistro = document.querySelector("a[href='register.html']");
    linkLogin.style.display = "none";
    linkRegistro.style.display = "none";

    linkLogout.addEventListener("click", function () {
        localStorage.removeItem("emailUsuario");
        location.reload();
    });
}
