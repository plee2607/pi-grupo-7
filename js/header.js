let form = document.querySelector("form");
let input = document.querySelector("#buscador");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se envíe automáticamente

  let busqueda = input.value; // Lo que escribió el usuario

  //Si el campo está vacío
  if (busqueda === "") {
    alert("El campo de búsqueda no puede estar vacío");
    input.style.color = "red";

  //Si tiene menos de 3 caracteres
  } else if (busqueda.length < 3) {
    alert("Necesitás ingresar al menos 3 caracteres");
    input.style.color = "red";

  //Si está todo bien
  } else {
    input.style.color = "black"; // vuelve al color normal
    form.submit(); // envía el formulario normalmente
  }
});