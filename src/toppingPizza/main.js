
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


