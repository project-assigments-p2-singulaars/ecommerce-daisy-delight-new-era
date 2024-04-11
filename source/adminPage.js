let formulario = document.getElementById('formularioAdmin');

formulario.addEventListener('submit', event =>{
    event.preventDefault();
    console.log('producto enviado')
    console.log(event.target.querySelectorAll("input"))

 const nameValue = document.getElementById("namePro");
 const imgProValue = document.getElementById("imgPro");
 const descriptionProValue = document.getElementById("descriptionPro");
 const pricePro1Value = document.getElementById("pricePro1");
 const pricePro2Value = document.getElementById("pricePro2");
 const pricePro3Value = document.getElementById("pricePro3");
 const categoryProdValue = document.getElementById("categoryProd");

    const datos = {
        name: nameValue.value,
        img: imgProValue.value,
        description: descriptionProValue.value,
        price1: pricePro1Value.value,
        price2: pricePro2Value.value,
        price3: pricePro3Value.value,
        categoryProd: categoryProdValue.value,
    }
    
    console.log(datos)
    

    fetch('http://localhost:3000/plants', {
        method: 'POST',
        body: JSON.stringify(datos),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.log(error))
})
    fetch('http://localhost:3000/plants', {
      method: 'DELETE',
    });

let confirmacion= confirm("Producto agregado correctamente")
console.log(confirmacion)