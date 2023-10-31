
const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

//Referencia a los valores asignados inicialmente en el HTML
let rojo = inputRojo.value
let verde = inputVerde.value
let azul = inputAzul.value

//Actualizamos el texto de los párrafos que muestran el valor
textoRojo.innerText = rojo
textoVerde.innerText = verde
textoAzul.innerText = azul

//Creamos la función para actualizar el color de fondo y le pasamos 3 parámetros
function actualizarColor(rojo, verde, azul) {
    //Creamos un color RGB
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    //Actualizamos el color de fondo cuando esté definido el evento
    document.body.style.backgroundColor = colorRGB
}
//* Evento Change
//Actualizar color Rojo
inputRojo.addEventListener('change', (e) => {
    //Objeto del evento, dónde ocurrió y extraer su valor asignándolo a una variable
    rojo = e.target.value
    //Se puede usar también textContent
    textoRojo.innerText = rojo
    //Llamamos a la función y le pasamos las variables globales
    actualizarColor(rojo, verde, azul)
})

//Actualizar color Verde
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value
    textoVerde.innerText = verde
    actualizarColor(rojo, verde, azul)
})

//Actualizar color Azul
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value
    textoAzul.innerText = azul
    actualizarColor(rojo, verde, azul)
})

/*/ Otra opción es usar la variable global en lugar del evento
// si sabemos dónde ocurrió el evento
inputRojo.addEventListener('change', () =>{
    //Acá cambiamos el e.target por la variable global que referencia al input
    rojo = inputRojo.value
    textoRojo.innerText = rojo
    actualizarColor(rojo, verde, azul)
})

inputVerde.addEventListener('change', () =>{
    verde = inputVerde.value
    textoVerde.innerText = verde
    actualizarColor(rojo, verde, azul)
})

inputAzul.addEventListener('change', () =>{
    azul = inputAzul.value
    textoAzul.innerText = azul
    actualizarColor(rojo, verde, azul)
})*/