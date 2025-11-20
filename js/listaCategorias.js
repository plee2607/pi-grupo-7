fetch('https://dummyjson.com/products/category-list')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data); 

    let lista = document.querySelector('#MenuLateral');

    data.forEach(function(categoria){
      lista.innerHTML += `
        <li>
          <a href="./category.html?categoria=${categoria}">
            ${categoria}
          </a>
        </li>
      `;
    });

  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });