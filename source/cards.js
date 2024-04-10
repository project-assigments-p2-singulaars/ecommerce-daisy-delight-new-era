const productContainer = document.getElementById("plants");
const productsURL= "http://localhost:3000/plants";


const getProducts = () => {
    const result = fetch(productsURL)
    .then(response => 
        response.json()
    )

    //.then(data => console.log(data))
    .catch(error => console.log ('Error',error))
    return result;


};

export const printProducts = (result) => {
    result.forEach(plants => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="imgContainer">
              <img class="productCardImg" src="${plants.photo}" alt="${plants.name}" />
            </div>
            <div class="detailContainer">
              <h2 class="productTitle">${plants.name}</h2>
              <p class="productPrice">Precio: ${plants.price1}</p>
            </div>
        `;
        productContainer.appendChild(card);     
    });
};


async function loadPlants(){
    const plantsList=await getProducts();
    console.log(plantsList)
    printProducts(plantsList);
}

loadPlants();









