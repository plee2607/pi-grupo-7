fetch('https://dummyjson.com/products/category-list')
  .then(function(response){
    return response.json();
  })
  .then(function(data){

    let lista = document.querySelector('#MenuLateral');
    if (lista == null) {
      return;
    }

    for(let i = 0; i < data.length; i++) {
      let categoria = data[i];
      lista.innerHTML += `
        <li>
          <a href="./category.html?categoria=${categoria}">
            ${categoria}
          </a>
        </li>
      `;
    }

  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });