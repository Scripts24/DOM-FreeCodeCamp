
const botonInicioPausa = document.getElementById('boton-inicio-pausa')
const botonReiniciar = document.getElementById('boton-reiniciar')
const cronometro = document.getElementById('cronometro')


// Definimos tres variables y le asignamos el valor en un arreglo
let [horas, minutos, segundos] = [0, 0, 0]

// Intervalo que debe transcurrir para actualizar el cronómetro y establecer su estado 
let intervaloDeTiempo;

let estadoCronometro = 'pausado'

// Función que maneja cómo se va a actualizar el cronómetro y el tiempo que ha transcurrido
function actualizarCronómetro() {
    // De arranque sabemos que mínimo ha transcurrido un segundo por lo que aumentamos el valor de la variable 'segundos'
    segundos++

    // Para calcular que ha transcurrido un minuto luego de los 60 segundos
    // Si la variable segundos dividida * 60 es igual a 1 (es decir han pasado 60''), entonces los segundos se van a reiniciar a cero
    // y se van a ctualizar los minutos (incrementándose en uno)
    if (segundos / 60 === 1) {
        segundos = 0
        minutos++
        // Misma lógiga si pasaron 60 minutos, se reinician a cero y se aumenta en 1 la hora
        if (minutos / 60 === 1) {
            minutos = 0
            horas++
        }
    }


    // Para agregar un cero a la izquierda si no se ha llegado a dos dígitos 
    const segundosConFormato = asignarFormato(segundos)
    const minutosConFormato = asignarFormato(minutos)
    const horasConFormato = asignarFormato(horas)

    // Actualizamos el texto interno para que se muestre el formato que necesitamos
    cronometro.innerText = `${horasConFormato} : ${minutosConFormato} : ${segundosConFormato}`
}

// El parámetro pasado a la función refiere a la unidad de tiempo que se quiere presentar: horas, minutos o segundos
function asignarFormato(unidadDeTiempo) {

    // Si es menor a 10 se retorna el valor cero + la unidad de tiempo, cadena de caracteres y si no entonces retorna la unidad de tiempo
    // Por ej. si es 5 se concatena con el cero a la izquierda
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;

}

//*ACTUALIZAR ESTADO DE LOS BOTONES: depende del estado actual del cronómetro


botonInicioPausa.addEventListener('click', function () {

    // Primero verificamos el estado del cronómetro
    if (estadoCronometro === 'pausado') {

        // Configuramos el intervalo que debe pasar antes de actalizar el cronómetro con el método setInterval llamamos a la función
        // actualizar cronómetro cada 1 segundo (1000 ms)
        intervaloDeTiempo = window.setInterval(actualizarCronómetro, 1000)
        // Si se inicia o pausa el cronometro debemos actualizar el contenido que se muestra en el botón
        // play por pausar o a la inversa según el caso, actualizamos las clases y el estado del cronómetro
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
        botonInicioPausa.classList.remove('iniciar')
        botonInicioPausa.classList.add('pausar')
        estadoCronometro = 'andando'
    } else {
        // Primero con clearInterval eliminamos el tiempo transcurrido
        window.clearInterval(intervaloDeTiempo)
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
        botonInicioPausa.classList.remove('pausar')
        botonInicioPausa.classList.add('iniciar')
        estadoCronometro = 'pausado'
    }
})

botonReiniciar.addEventListener('click', function () {

    // Eliminamos el tiempo transcurrido
    window.clearInterval(intervaloDeTiempo)
    // Reiniciando todo a cero 
    horas = 0
    minutos = 0
    segundos = 0

    // Reemplazamos el texto interno por la hora inicial que tiene por defecto
    cronometro.innerText = '00:00:00'

    // Y por último actualizamos el botón de inicio-pausa (si se reinicia vuelve el botón de play), actualizamos las clases y estado del cronómetro
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonInicioPausa.classList.remove('pausar')
    botonInicioPausa.classList.add('iniciar')
    estadoCronometro = 'pausado'


})