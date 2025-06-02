let x = parseInt(prompt("Introduce el primer número entero:"));
let y = parseInt(prompt("Introduce el segundo número entero:"));

if (x <= 0 || y <= 0) {
    alert("Error: los números deben ser positivos y distintos de cero.");
} else {
    let mayor = x > y ? x : y;
    let menor = x > y ? y : x;

    if (mayor % menor === 0) {
        alert("El mayor es múltiplo del menor.");
    } else {
        alert("El mayor no es múltiplo del menor.");
    }
}

