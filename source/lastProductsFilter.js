import { printProducts } from "../source/cards.js";
document.addEventListener("DOMContentLoaded", function () {

// Obtener el contenedor de productos
const productContainer = document.getElementById("plants");
// Obtener los botones del menú
const plantsButton = document.getElementById("plantsButton");
const festivitiesButton = document.getElementById("festivitiesButton");
const birthdayButton = document.getElementById("birthdayButton");
const showAllButton = document.getElementById("showAllButton");
const plantsSection = document.getElementById("plants");

// Agregar event listeners a los botones
plantsButton.addEventListener("click", function () {
    plantsSection.innerHTML = "";
    filterProductsByCategory("plants");
});
festivitiesButton.addEventListener("click", function () {
    plantsSection.innerHTML = "";
    filterProductsByCategory("festivities");
});
birthdayButton.addEventListener("click", function () {
    plantsSection.innerHTML = "";
    filterProductsByCategory("birthday");
});
showAllButton.addEventListener("click", function () {
    printAllProducts();
});

// Función para filtrar productos por categoría
function filterProductsByCategory(category) {
    // Obtener todos los productos
    fetch("http://localhost:3000/plants")
    .then((response) => response.json())
    .then((products) => {
        products.innerHTML = "";
        // Filtrar productos por categoría
        const filteredProducts = products.filter(
        (product) => product.category === category
        );
        // Imprimir productos filtrados
        printProducts(filteredProducts);
    })
    .catch((error) => console.log("Error", error));
}

  // Función para imprimir todos los productos
function printAllProducts() {
    // Obtener todos los productos
    fetch("http://localhost:3000/plants")
    .then((response) => response.json())
    .then((products) => {
        // Imprimir todos los productos
        printProducts(products);
    })
    .catch((error) => console.log("Error", error));
}
});