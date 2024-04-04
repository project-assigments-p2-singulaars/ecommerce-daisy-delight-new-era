function filterByCategory(category) {
  fetch(`http://localhost:3000/${category}`)
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById("productList");
      productList.innerHTML = ""; // Limpiar la lista de productos antes de agregar nuevos

      // Recorrer los elementos de la categoría y crear una tarjeta para cada uno
      data.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.photo}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Precio: ${product.price1}</p>
          `;
        productList.appendChild(card);
      });
    })
    .catch((error) => console.error("Error al cargar los productos:", error));
}

// Función para mostrar todos los productos
function showAll() {
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById("productList");
      productList.innerHTML = ""; // Limpiar la lista de productos antes de agregar nuevos

      // Recorrer todos los elementos del JSON y crear una tarjeta para cada uno
      Object.values(data).forEach((category) => {
        category.forEach((product) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
          <img class="productImg" src="${product.photo}" alt="${product.name}" />
          <h2 class="productTitle">${product.name}</h2>
          <p class="productPrice">Precio: ${product.price1}</p>
            `;
          productList.appendChild(card);
        });
      });
    })
    .catch((error) => console.error("Error al cargar los productos:", error));
}
