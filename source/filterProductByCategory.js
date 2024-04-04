document.addEventListener("DOMContentLoaded", function () {
  // Obtener los botones del menú
  const plantsButton = document.getElementById("plantsButton");
  const festivitiesButton = document.getElementById("festivitiesButton");
  const birthdayButton = document.getElementById("birthdayButton");
  const showAllButton = document.getElementById("showAllButton");

  // Agregar event listeners a los botones
  plantsButton.addEventListener("click", function () {
    filterByCategory("plantas");
  });

  festivitiesButton.addEventListener("click", function () {
    filterByCategory("festividades");
  });

  birthdayButton.addEventListener("click", function () {
    filterByCategory("cumpleaños");
  });

  showAllButton.addEventListener("click", function () {
    showAll();
  });

  // Función para mostrar todos los productos al cargar la página
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

  // Función para filtrar productos por categoría
  function filterByCategory(category) {
    fetch(`http://localhost:3000/${category}`)
      .then((response) => response.json())
      .then((data) => {
        const productList = document.getElementById("productList");
        productList.innerHTML = ""; // Limpiar la lista de productos antes de agregar nuevos

        const categoryName = document.createElement("h2");
        categoryName.classList.add("productTitleCategory");
        categoryName.textContent = category;
        productList.appendChild(categoryName);

        // Recorrer todos los elementos del JSON y crear una tarjeta para cada uno
        data.forEach((product) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            
            <div class="imgContainer">
              <img class="productCardImg" src="${product.photo}" alt="${product.name}" />
            </div>
            <div class="detailContainer">
              <h2 class="productTitle">${product.name}</h2>
              <p class="productPrice">Precio: ${product.price1}</p>
            </div>
          `;
          productList.appendChild(card);
        });
      })
      .catch((error) => console.error("Error al cargar los productos:", error));
  }
});
