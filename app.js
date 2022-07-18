"use strict"

// Written by Daniel Tejada-Hernández
// Saturday, July 9th 2022
// Course: From Zero to Hero - Women Who Code


/* Cronograma
1. Object oriented programming: Class, objects, attriby¿utes y methods. 
2. Serie Fibonacci o Numeros primos, ambos hasta 50. 

*/

// number
console.log(typeof 5);

// string
console.log(typeof "5");

// object
console.log(typeof null);

// undefinied
console.log(typeof undefined);

// booleanconsole.log(typeof true);

// Doble igual: valor
// Triple igual: valor y tipo de dato
console.log(true==1);
console.log(true===1);

console.log(typeof [1,2,3]);

// Declarar un objeto
let nombre = [];


// Definir un objeto
let obj2 = new Object();
obj2.name = "Daniel"
obj2.lastName = 'Tejada'
console.log(obj2.name,obj2.lastName);
console.log(obj2.name+' '+obj2.lastName);

console.log(`Hola ${obj2.name} ${obj2.lastName}`);

/*
Scope: decide a qué variables tienes acceso en cada parte del código. 
 Pueden ser globales o locales
 -Globales: están por fuera de un ciclo, condicional, función... (var, variables de 
    windows)
 -Locales: definidas al interior 
 */

 /* Tipos de variables
-var: Permite declarar una variable varias veces en el mismo código.

-let: Solo permite declarar una vez en el código, pero si puede asignarlo varias veces. 

-const: Son variables que no cambian, son CONSTANTES. Siempre se deben declarar y asignar,
si no se hace de este modo, retorna un ERROR. 
 */


  




