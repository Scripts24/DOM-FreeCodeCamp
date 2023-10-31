
//Seleccionar elementos del DOM
const boton = document.querySelector('button')
const color = document.getElementById('color')


// Función que maneja el proceso de generar un color hexadecimal aleatorio, pero no modifica el DOM
//para ello debe generarse la función asociada al evento que está abajo
function generarColorHexAleatorio() {

    //Cadena de caracteres con todas las opciones que tiene el sistema hexadecimal, son 16
    //pero como sabemos en javascript se empieza desde 0 por lo que el último índice es 15
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for (let i = 0; i < 6; i++) {

        // Usamos el método Math.random que nos va a generar un N° pseudoaleatorio entre 0 y 1 y lo multiplicamos po 16
        //El método Math.floor nos va a redondear el n° para  darnos el mayor n° entero que es menor o igual 
        //al resultado de Math.random() * 16, yendo desde el índice 0 al 15
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorHex += digitos[indiceAleatorio]
    }

    return colorHex;
}

// Asociamos la función con el evento click, dentro del cual definimos la función que actualiza el resultado en el DOM
boton.addEventListener('click', function () {

    //Llamamos a la función que genera el color aleatorio
    let colorAleatorio = generarColorHexAleatorio()
    //Actualizar el texto
    color.textContent = colorAleatorio
    //Actualizar color de fondo
    document.body.style.backgroundColor = colorAleatorio;
})