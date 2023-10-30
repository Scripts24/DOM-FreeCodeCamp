
//! SELECCIONAR ELEMENTOS

// Seleccionar elemento por id.

// Contenedor
const contenedor = document.getElementById('contenedor')
console.log(contenedor);
console.log(contenedor.innerHTML);
console.log(typeof contenedor.innerHTML);

// Titulo Principal
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerText);
console.log(typeof titulo.innerText);
console.log(titulo.tagName);
console.log(typeof titulo.tagName);



// Seleccionar elementos por clase.
const toppings = document.getElementsByClassName('topping')
console.log(toppings[0].id)

// Todos los elementos
console.log(toppings);

// Elementos individuales.
console.log(toppings[0]);
console.log(toppings[1]);
console.log(toppings[2]);
console.log(toppings[3]);

// Atributos de un elemento.
const aceitunas = toppings[0];

console.log(aceitunas.tagName);

// Texto
console.log(aceitunas.innerText);
console.log(aceitunas.textContent);

// Elementos
console.log(aceitunas.childElementCount);
console.log(aceitunas.children);

// Nodos
console.log(aceitunas.hasChildNodes());
console.log(aceitunas.childNodes);

// Clases
console.log(aceitunas.classList);
console.log(typeof aceitunas.classList);
console.log(aceitunas.className);
console.log(typeof aceitunas.className);

// Seleccionar elementos por etiqueta HTML.

const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

console.log(document.body);

// Seleccionar solo el primer elemento que cumpla el criterio
// de un selector CSS.

const ingrediente = document.querySelector('#albahaca');
console.log(ingrediente);

const topping = document.querySelector('.topping');
console.log(topping);

const primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);

const elPrimerToppingNaranja = document.querySelector('ul li.fondo-naranja');
console.log(elPrimerToppingNaranja);

const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);

// Seleccionar todos los elementos con un selector CSS.
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja);
console.log(toppingsNaranja.length);
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]);
console.log(typeof toppingsNaranja); // Object

//! ASIGNAR ESTILOS

const primerTopping = document.querySelector('.topping')
console.log(primerTopping.style)//Con esto se puede ver todas las propiedades que se pueden personalizar

primerTopping.style.backgroundColor = 'blue'
primerTopping.style.color = '#22aa8f'
primerTopping.style.textTransform = 'uppercase'

//! ACCEDER AL TEXTO

const listaDeToppings = document.getElementById('lista-toppings')

console.log('>innerText')
console.log(listaDeToppings.innerText)//Texto interno

console.log('>textContent')
console.log(listaDeToppings.textContent)//Muestra el texto con el espacio que aparecen en el documento HTML

console.log('>innerHTML')
console.log(listaDeToppings.innerHTML)//Retorna la estructura interna del elemento


//! MODIFICAR EL TEXTO

const cambiarTitulo = document.getElementById('titulo')

//cambiarTitulo.innerText = "Pizzas favoritas" 

//! ATRIBUTOS 

const enlaces = document.getElementsByTagName('a')


console.log('>Acceder al atributo de un elemento')
console.log(enlaces[0].getAttribute('href'))//acá usammos notación de punto porque getElementsByTagName devuelve euna colección HTML


console.log('>Remover el atributo de un elemento')
//console.log(enlaces[0].removeAttribute('href'))

console.log('>Actualizar valor del atributo de un elemento')
console.log(enlaces[0].setAttribute('href', 'https://www.instagram.com/pizzeriaguerrin/?hl=es-la'))


//! AGREGAR Y ELIMINAR CLASES

const elPrimerTopping = document.querySelector('.topping')

console.log(elPrimerTopping)
console.log(elPrimerTopping.classList)//Lista de todas las clases que tiene ese elemento y se accede con notación de puntos a cada uno

//agregar una clase
elPrimerTopping.classList.add('clase-agregada')

//Verificar si existe una clase
console.log('>Verificar si existe una clase')//retorna true o false, útiles para los if
console.log(elPrimerTopping.classList.contains('fondo-marron'))

//Remover una clase
elPrimerTopping.classList.remove('topping')

//! CREAR y REMOVER ELEMENTOS

const listaToppings = document.getElementById('lista-toppings')// referencia a dónde queremos agregar el elemento

// Crear un elemento
const toppingNuevo = document.createElement('li')// qué elemento queremos crear

// Para que se muestre antes de apendearlo debemos asignarle estilos y texto
toppingNuevo.classList.add('topping', 'fondo-marron')
toppingNuevo.innerText = 'Queso extra'

listaDeToppings.append(toppingNuevo)//agrega un nodo dentro de otro elemento

// Remover un elemento
toppingNuevo.remove()

// Remover todos los elementos
//listaToppings.remove()

// Crear un elemento con el método appendChild
listaToppings.appendChild(toppingNuevo)

//! RECORRER EL DOM

const listaTopping = document.getElementById('lista-toppings')

//  Elementos y nodos padres
console.log('>Para obtener el elemento padre de algún elemento HTML')
console.log(listaTopping.parentElement)

console.log('>Podemos ir más arriba en la jerarquía encadenando')
console.log(listaTopping.parentElement.parentElement)

console.log('>Para obtener el nodo padre de algún elemento HTML')
console.log(listaTopping.parentNode)

// Elementos y nodos hijos

console.log('>Para obtener el elemento hijo de algún elemento HTML')
console.log(listaTopping.children)//devuelve una colección HTML

console.log('>Este método trabaja con nodos')
console.log(listaTopping.firstChild)//por lo que cuenta también los espacios que tenemos en el documento

console.log('>Así mejor usamos children con el índice correspondiente')
console.log(listaTopping.children[0])

console.log('>Este método trabaja con nodos')
console.log(listaTopping.lastChild)//= que firstChild cuenta los espacios


console.log('> Método más practico')
console.log(listaTopping.firstElementChild)
console.log(typeof listaTopping.firstElementChild)
console.log(listaTopping.lastElementChild)
console.log(typeof listaTopping.lastElementChild)

console.log('> También se pueden encadenar para ir más adentro en la jerarqía')
console.log(listaTopping.firstElementChild.firstElementChild)


// Elementos y nodos hermanos

console.log('>Para obtener el elemento hermano de algún elemento HTML')
console.log(listaTopping.previousElementSibling)
console.log(listaTopping.nextElementSibling)

console.log('>Para obtener el nodo hermano de algún elemento HTML')
console.log(listaTopping.previousSibling)
console.log(listaTopping.nextSibling)

//! EVENTOS DEL DOM

//CONCEPTOS IMPORTANTES:
// - Elemento Target: es el que recibe la acción que desencadena el evento
// - Trigger: acción que desencadena el evento
// - Event Handler: Función que va a manejar lo que ocurra cuando se desencadena el evento
// - Event Listener: escuchador del evento, conexión entre el evento y la función que lo va a manejar

// EVENTOS MÁS USADOS/IMPORTANTES:
// - lOS QUE INTERACTÚAN CON EL MOUSE
// - LOS QUE INTERACTÚAN CON EL TECLADO

//* EVENTO ONCLICK
// Se establece sobre uno o varios elemento/s en el documento html y aquí ejecutamos la función

/*<ul id="lista-toppings">
            <li onclick ="mostrarClic('aceitunas')" class="topping fondo-marron" id="aceitunas">Aceitunas</li>
            <li onclick ="mostrarClic('cebolla')" class="topping fondo-naranja">Cebolla</li>
            <li onclick ="mostrarClic('albahaca')" class="topping fondo-marron" id="albahaca">Albahaca</li>
            <li onclick ="mostrarClic('champiñones')" class="topping fondo-naranja">Champiñones</li>
            <!-- Para mostrar como seleccionar por etiqueta. -->
            <!-- <li>Queso Extra</li> -->
        </ul>
 */

/*function mostrarClic(){
    console.log('Clic')
}

//Se pueden personalizar los valores pasandole un parámetro a la función y estableciendo el argumento en el onclick del html
function mostrarClic(topping){
    console.log(topping)
}*/

//* addEventListener

console.log('>Evento para un elemento específico del HTML')
const albahaca = document.getElementById('albahaca')

function mostrarClic(e){
    console.log(e)// Nos muestra un PointerEvent con todas sus propiedades
}

function mostrarClic(e){
    console.log(e.target)//nos muestra el objeto del evento
}

function mostrarClic(e){
    console.log(e.target.innerText)//pudiendo ser cada vez más específicos
}

albahaca.addEventListener('click', mostrarClic)

console.log('>Evento para varios elementos del HTML -colección html')
const cadaTopping = document.getElementsByClassName('topping')

function mostrarClic(e){
    console.log(e.target.innerText)
}

for(const topping of cadaTopping){
    console.log(topping)
}

for(const topping of cadaTopping){
    topping.addEventListener('click', mostrarClic)
}

// Se puede definir la función dentro del ciclo

for(const topping of cadaTopping){
    topping.addEventListener('click', (e) =>{
        console.log(e.target.innerText)
    })
}







