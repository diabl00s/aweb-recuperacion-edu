let n1 = parseInt(prompt("Introduce el primer número entero:"));
let n2 = parseInt(prompt("Introduce el segundo número entero:"));

if (n2 === 0) {
    alert("Error: no se puede dividir por cero.");
} else {
    let res = n1 / n2;
    if (n1 % n2 === 0) {
        alert("La división es exacta. Resultado: " + res);
    } else {
        alert("La división no es exacta. Resultado: " + res);
    }
}

