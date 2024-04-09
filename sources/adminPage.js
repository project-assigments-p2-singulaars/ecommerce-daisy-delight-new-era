let formulario = document.getElementById('formularioAdmin');

formulario.addEventListener('submit', event =>{
    event.preventDefault();
    console.log('producto enviado')

    let datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('namePro'))
    console.log(datos.get('imgPro'))
    console.log(datos.get('descriptionPro'))
    console.log(datos.get('pricePro1'))
    console.log(datos.get('pricePro2'))
    console.log(datos.get('pricePro3'))
    
    fetch(formulario, {
        method: 'POST',
        headers: datos
    })

})