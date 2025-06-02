let cantidadListas = parseInt(prompt("¿Cuántas listas quieres crear?"));
let listas = [];

for(let i = 0; i < cantidadListas; i++){
    let nombre = prompt("Introduce un nombre para la lista " + (i+1));
    listas.push(nombre);
}

alert("Has creado las siguientes listas:\n" + listas.join(", "));
