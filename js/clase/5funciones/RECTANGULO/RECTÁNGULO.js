let ancho = parseInt(prompt("Introduce la anchura del rectángulo:"));
let alto = parseInt(prompt("Introduce la altura del rectángulo:"));

let resultado = "";

for(let i = 0; i < alto; i++){
    let fila = "";
    for(let j = 0; j < ancho; j++){
        fila += "*";
    }
    resultado += fila + "\n";
}

alert(resultado);
