let form = document.querySelector("header form");
let input = document.querySelector("#buscador");

if (form && input) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let busqueda = input.value;

    if (busqueda === "") {
      alert("El campo de búsqueda no puede estar vacío");
      input.style.color = "red";
    } else if (busqueda.length < 3) {
      alert("Necesitás ingresar al menos 3 caracteres");
      input.style.color = "red";
    } else {
      input.style.color = "black";
      form.submit();
    }
  });
}