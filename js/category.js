let qs = location.search;
let qsObj = new URLSearchParams(qs);
let categoria = qsObj.get("categoria");

let url = "https://dummyjson.com/products/category/" + categoria;

let titulo = document.querySelector("#tituloCategoria");
titulo.innerText = categoria;

let contenedor = document.querySelector("#contenedorCategoria");

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){

    let contenido = "";

    for(let i = 0; i < data.products.length; i++){
      let producto = data.products[i];

      contenido = contenido + `
        <article class="card">
            <img src="${producto.images[0]}" alt="${producto.title}">
            <p><strong>${producto.title}</strong></p>
            <p>${producto.description}</p>
            <p>Precio: $${producto.price}</p>
            <a href="product.html?id=${producto.id}" class="boton">Ver detalle</a>
        </article>
      `;
    }

    contenedor.innerHTML = contenido;

  })
  .catch(function(error){
    console.log("Error: " + error);
  });