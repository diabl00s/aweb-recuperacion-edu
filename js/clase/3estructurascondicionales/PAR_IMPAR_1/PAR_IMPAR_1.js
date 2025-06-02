let numPar = parseInt(prompt("Introduce un número par:"));
let numImpar = parseInt(prompt("Introduce un número impar:"));

if (numPar % 2 === 0 && numImpar % 2 !== 0) {
    alert("Los números son correctos.");
} else {
    alert("Error: alguno de los números no cumple la condición.");
}
