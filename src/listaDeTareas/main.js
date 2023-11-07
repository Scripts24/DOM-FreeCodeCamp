
//* Se agrega LocalStorage y Toastify 

const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

// Cargar tareas y su estado desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', cargarTareas);

function agregarTarea() {
    // Verificar si existe un valor ingresado en el input, una cadena de caracteres
    // Devuelve true o false
    if (input.value) {
        // Crear tarea
        let nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');

        // Texto agregado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;// Value permite extraer lo que ingresó el usuario
        nuevaTarea.appendChild(texto);

        // Crear y agregar contenedor de íconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        nuevaTarea.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        // append permite agregar varios elementos
        iconos.append(completar, eliminar);

        // Agregar nueva tarea a la lista
        listaDeTarea.appendChild(nuevaTarea);

        // Llamamos a la función guardarTarea para Guardar la tarea y su estado en localStorage
        guardarTarea(input.value, false);

        input.value = '';

    } else {
        // Para el caso que no se haya ingresado ninguna tarea
        Toastify({
            text: "Por favor ingresa una tarea!",
            duration: 2000,
            gravity: "top",
            position: "center",
            style: {
                background: "#F2D95C",
                color: "black",
                marginTop: "70px",
                padding: "20px",
                fontSize: "22px",
                borderRadius: "8px"
            },
        }).showToast();
    }
}

function completarTarea(e) {
    // Obtener el objeto del evento 
    let tarea = e.target.parentNode.parentNode;
    // Toggle permite alternar una clase, si el elemento en el DOM ya tiene la clase entonces se la quita y si no la tiene entoces se la agrega
    tarea.classList.toggle('completada');
    // Actualizar el estado de la tarea en localStorage
    actualizarEstadoTareaEnLocalStorage(tarea.textContent, tarea.classList.contains('completada'));
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
    // Eliminar la tarea de localStorage
    eliminarTareaDeLocalStorage(tarea.textContent);
}

//* EVENTOS 

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

//* FUNCIONES PARA MANEJAR EL LOCAL STORAGE

// Función para guardar una tarea y su estado en localStorage
function guardarTarea(tarea, completada) {
    let tareas = obtenerTareasLocalStorage();
    tareas.push({ tarea, completada });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para obtener las tareas almacenadas en localStorage
function obtenerTareasLocalStorage() {
    let tareas;
    if (localStorage.getItem('tareas') === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    return tareas;
}

// Función para cargar tareas y su estado desde localStorage al cargar la página
function cargarTareas() {
    let tareas = obtenerTareasLocalStorage();
    tareas.forEach(function (tareaData) {
        // Crear tarea y agregarla a la lista
        let nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerText = tareaData.tarea;
        nuevaTarea.appendChild(texto);

        if (tareaData.completada) {
            nuevaTarea.classList.add('completada');
        }

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        nuevaTarea.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);
        listaDeTarea.appendChild(nuevaTarea);
    });
}

// Función para actualizar el estado de una tarea en localStorage
function actualizarEstadoTareaEnLocalStorage(tarea, completada) {
    let tareas = obtenerTareasLocalStorage();
    tareas.forEach(function (tareaData) {
        if (tareaData.tarea === tarea) {
            tareaData.completada = completada;
        }
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para eliminar una tarea de localStorage
function eliminarTareaDeLocalStorage(tarea) {
    let tareas = obtenerTareasLocalStorage();
    tareas = tareas.filter(function (tareaData) {
        return tareaData.tarea !== tarea;
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
