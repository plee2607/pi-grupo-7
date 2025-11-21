let URL = "https://dummyjson.com/products/category/smartphones"

let seccion = document.querySelector(".productos-container")

fetch(URL)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    
    let contenido = ""
    for (let i = 0; i < 10; i++) {
        let producto = data.products[i]
        contenido = contenido + `
            <article class="card">
                <img src="${producto.images[0]}" alt="${producto.title}">
                <p class="tituloCard"><strong>${producto.title}</strong></p>
                <p>${producto.description}</p>
                <div class="card-footer">
                  <p class="precioCard">Precio: $${producto.price}</p>
                  <a href="product.html?id=${producto.id}" class="boton">Ver detalle</a>
                </div>
            </article>
        `
    }
    seccion.innerHTML = contenido
})
.catch(function(error) {
    console.log("Error: " + error)
})

let URL2 = "https://dummyjson.com/products/category/groceries"
let seccion2 = document.querySelector(".contenedor-groceries")

fetch(URL2)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let contenido = ""
    for (let i = 0; i < 10; i++) {
      let producto = data.products[i]
      contenido = contenido + `
        <article class="card">
          <img src="${producto.images[0]}" alt="${producto.title}">
          <p class="tituloCard"><strong>${producto.title}</strong></p>
          <p>${producto.description}</p>
          <div class="card-footer">
            <p class="precioCard">Precio: $${producto.price}</p>
            <a href="product.html?id=${producto.id}" class="boton">Ver detalle</a>
          </div>
        </article>
      `
    }
    seccion2.innerHTML = contenido
  })
  .catch(function (error) {
    console.log("Error: " + error)
  })