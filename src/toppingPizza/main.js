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

// Todos los elementos.
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

const tag = document.getElementById('titulo');
console.log(tag);

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