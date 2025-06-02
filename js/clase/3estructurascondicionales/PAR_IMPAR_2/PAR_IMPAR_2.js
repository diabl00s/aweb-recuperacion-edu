let numPar2 = parseInt(prompt("Introduce un número par:"));

if (numPar2 % 2 !== 0) {
    alert("Error: el primer número no es par.");
} else {
    let numImpar2 = parseInt(prompt("Introduce un número impar:"));
    if (numImpar2 % 2 === 0) {
        alert("Error: el segundo número no es impar.");
    } else {
        alert("Los números son correctos.");
    }
}
