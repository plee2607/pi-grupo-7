// TRAER SECCIÓN CELULARES
fetch("https://dummyjson.com/products/category/smartphones")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let contenedorCelulares = document.querySelector(".contenedor-celulares")
    let contenido = ""

    for (let i = 0; i < 10; i++) {
        let producto = data.products[i]
        contenido = contenido + `
            <article class="card">
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <p><strong>${producto.title}</strong></p>
                <p>${producto.description}</p>
                <p>Precio: $${producto.price}</p>
                <a href="detalle.html?id=${producto.id}" class="boton">Ver detalle</a>
            </article>
        `
    }

    contenedorCelulares.innerHTML = contenido
})
.catch(function(error) {
    console.log("Error: " + error)
})


// TRAER SECCIÓN PERFUMES
fetch("https://dummyjson.com/products/category/fragrances")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let contenedorPerfumes = document.querySelector(".contenedor-perfumes")
    let contenido = ""

    for (let i = 0; i < 10; i++) {
        let producto = data.products[i]
        contenido = contenido + `
            <article class="card">
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <p><strong>${producto.title}</strong></p>
                <p>${producto.description}</p>
                <p>Precio: $${producto.price}</p>
                <a href="detalle.html?id=${producto.id}" class="boton">Ver detalle</a>
            </article>
        `
    }

    contenedorPerfumes.innerHTML = contenido
})
.catch(function(error) {
    console.log("Error: " + error)
})