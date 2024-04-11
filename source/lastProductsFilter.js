// Seleccionamos el div donde se va a imprimir el código
const container = document.getElementById("newProductsCard");
const productsURL = "http://localhost:3000/plants";

// Fecth de los datos del JSON
fetch("http://localhost:3000/plants")
  .then((response) => response.json())
  .then((data) => {
    // Traemos los últimos seis productos del array de productos
    const lastSixProducts = data.slice(-6);

    //Creamos el html dinámico
    lastSixProducts.forEach(product => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('newProducts')
        createDiv.innerHTML= `
        <a href="#">
        <img src="${product.photo}" alt="${product.name}" class="newProductsImg">
        </a>
        <div class="newProductsText">${product.name}</div>
        <div class="newProductsPrice">${product.price1}</div>    
        `
        container.appendChild(createDiv);
    });

  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
