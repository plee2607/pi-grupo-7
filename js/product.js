let qs = location.search; 
let qsObj = new URLSearchParams(qs); 
let productId = qsObj.get("id");

let titulo = document.querySelector(".titulo-detalle");
let imagen = document.querySelector(".imagenDetalle");
let marca = document.querySelector(".marca");
let descripcion = document.querySelector(".descripcion");
let precio = document.querySelector(".precioProducto");
let categoriaLink = document.querySelector("#categoriaProducto");
let stock = document.querySelector("#stockProducto");
let tagsLista = document.querySelector("#tagsProducto");

// Contenedor de reviews
let seccionReviews = document.querySelector(".productosdestacados");

// Llamar a la API del producto
let url = "https://dummyjson.com/products/" + productId;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){

    console.log(data);

    // 4) Insertar datos del producto en el HTML
    titulo.innerText = data.title;
    imagen.src = data.images[0];
    marca.innerText = data.brand;
    descripcion.innerText = data.description;
    precio.innerText = data.price;
    stock.innerText = data.stock;

    // Categoría como link
    categoriaLink.innerText = data.category;
    categoriaLink.href = "category.html?cat=" + data.category;

    // TAGS (hasta 3)
    let contenidoTags = "";
    let limite = 3;

    if (data.tags.length < 3) {
      limite = data.tags.length;
    }

    for (let i = 0; i < limite; i++) {
      contenidoTags = contenidoTags + "<li>" + data.tags[i] + "</li>";
    }

    tagsLista.innerHTML = contenidoTags;

    // renderizar reviews
    // Cada review tiene: rating, comment, date, reviewerName

    let reviewsHTML = `
      <article class="titulos">
        <h2>Opiniones:</h2>
      </article>
    `;

    for (let i = 0; i < data.reviews.length; i++) {

      let review = data.reviews[i];

      reviewsHTML = reviewsHTML + `
        <article class="producto">
          <h2>${review.reviewerName}</h2>
          <p>${review.date}</p>
          <p>${review.comment}</p>
          <p><strong>${review.rating} estrellas</strong></p>
        </article>
      `;
    }

    seccionReviews.innerHTML = reviewsHTML;
  })
  .catch(function(error){
    console.log("Error: " + error);
  });