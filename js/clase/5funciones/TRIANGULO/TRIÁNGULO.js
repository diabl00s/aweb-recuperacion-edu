let num1 = parseInt(prompt("Introduce un número entero:"));
let num2 = parseInt(prompt("Introduce otro número entero:"));

let inicio = Math.min(num1, num2);
let fin = Math.max(num1, num2);

let lista = "";
for(let i = inicio; i <= fin; i++){
    lista += i + " ";
}

alert("Números entre " + inicio + " y " + fin + ": " + lista);
