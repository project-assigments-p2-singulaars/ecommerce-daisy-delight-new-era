let apiUrlFlowers = "http://localhost:3000/";

function callApi(apiUrlFlowers) {
    try {
        const response = fetch(apiUrlFlowers);
        const data = response.json();
        data.map((DaisyDelight) => {
            console.log(DaisyDelight);
        });
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const userInput = document.getElementById('search-input').value;
        filterPlants(userInput);
    });
});

async function filterPlants(userInput) {
    try {
        const response = await fetch(apiUrlFlowers);
        const DaisyDelight= await response.json();
        plantList.innerHTML = '';

        if (DaisyDelight.length > 0) {
            const filteredPlants = DaisyDelight.filter(DaisyDelight => DaisyDelight.name.includes(userInput));

            filteredPlants.forEach(DaisyDelight => {
                const plantItem = document.createElement('div');
                plantItem.classList.add("plantCard");

                plantItem.innerHTML = `
                    <h2>${DaisyDelight.name}</h2>
                    <p><strong>Descripción:</strong> ${DaisyDelight.description}</p>
                    <img src="${DaisyDelight.photo}" alt="${DaisyDelight.name}" style="max-width: 200px;">
                    <p><strong>Precios:</strong> ${DaisyDelight.price1}, ${DaisyDelight.price2}, ${DaisyDelight.price3}</p>
                    <hr>
                `;
                plantList.appendChild(plantItem);
            });
        } else {
            const noResults = document.createElement('p');
            noResults.textContent = 'No se encontraron plantas.';
            plantList.appendChild(noResults);
        }
    } catch (error) {
        console.error('Error al filtrar plantas:', error);
    }
}

callApi='http://localhost:3000/'