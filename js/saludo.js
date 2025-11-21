let emailGuardado = localStorage.getItem("emailUsuario");

let nav = document.querySelector("nav ul");

if (emailGuardado != null) {

    let liBienvenida = document.createElement("li");
    liBienvenida.innerText = "Bienvenido: " + emailGuardado;

    let liLogout = document.createElement("li");
    let linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.href = "#";
    linkLogout.id = "logoutLink"; 
    liLogout.appendChild(linkLogout);

    nav.appendChild(liBienvenida);
    nav.appendChild(liLogout);

    let linkLogin = document.querySelector("a[href='login.html']");
    let linkRegistro = document.querySelector("a[href='register.html']");

    if (linkLogin != null) {
        linkLogin.style.display = "none";
    }

    if (linkRegistro != null) {
        linkRegistro.style.display = "none";
    }
}