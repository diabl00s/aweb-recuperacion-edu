let a = parseInt(prompt("Introduce el primer número:"));
let b = parseInt(prompt("Introduce el segundo número:"));
let c = parseInt(prompt("Introduce el tercer número:"));

if (a === b && b === c) {
    alert("Los tres números son iguales.");
} else if (a === b || b === c || a === c) {
    alert("Hay dos números iguales.");
} else {
    alert("Los tres números son distintos.");
}
