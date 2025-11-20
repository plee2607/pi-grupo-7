let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get("query");

let titulo = document.querySelector("#tituloBusqueda");
titulo.innerText = "Resultados para: " + busqueda;

let url = "https://dummyjson.com/products/search?q=" + busqueda;

let contenedor = document.querySelector("#resultados-container");

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        if (data.products.length === 0) {
            contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }

        let contenido = "";

        for (let i = 0; i < data.products.length; i++) {
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