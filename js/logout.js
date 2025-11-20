let linkLogout = document.querySelector("#logoutLink");

if (linkLogout != null) {

    linkLogout.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem("emailUsuario");
        location.reload();
    });

}
