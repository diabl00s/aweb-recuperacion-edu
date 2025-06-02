let cantidadPos = parseInt(prompt("¿Cuántos números positivos vas a introducir?"));
let positivosContados = 0;

while(positivosContados < cantidadPos){
    let num = parseFloat(prompt("Introduce un número:"));
    if(num > 0){
        positivosContados++;
    }
}

alert("Has introducido " + cantidadPos + " números positivos.");
