let cantidadNum = parseInt(prompt("¿Cuántos números vas a introducir?"));
let numeros = [];

for(let i = 0; i < cantidadNum; i++){
    let num = parseFloat(prompt("Introduce un número:"));
    numeros.push(num);
}

let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);
let sumaTotal = numeros.reduce((acum, val) => acum + val, 0);
let media = sumaTotal / cantidadNum;

alert("Máximo: " + maximo + "\nMínimo: " + minimo + "\nMedia: " + media);
