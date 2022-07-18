let carros = ['BMW', 'Chevrolet','Jeep']

for (const i in carros) {
    console.log( i, carros[i] );
}

console.log('---------------');   

for (let pos = 0; pos < carros.length; pos++) {
    console.log(pos,carros[pos]);   
}

/* Objeto Array
Filter, find, findIndezOf, some, every, map
*/
console.log('---------------');   
const women = ['Maleja', 'Paula', 'Daniela'];

const comunidad = women.map(function(woman){
    return woman +' pertence a WWCode';
});

console.log(comunidad);
console.log('---------------');   

const numeros = [1,2,3,4];

const cuadrados = numeros.map( function(numero){
     cuadrado =  numero**2;
    return cuadrado;
})
console.log(cuadrados);


console.log('---------------');   

console.log('---Números Impares------');   

const numeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const resultados = numeros2.filter( function(numero) {
    if (numero % 2 !== 0) {
        return numero;
    }
}
);

console.log(resultados);

//foreach, push, every