let num1 = parseInt(prompt("Introduce el primer número entero:"));
let num2 = parseInt(prompt("Introduce el segundo número entero:"));

let resultado = num1 / num2;

if (num1 % num2 === 0) {
    alert("La división es exacta. Resultado: " + resultado);
} else {
    alert("La división no es exacta. Resultado: " + resultado);
}

