let cantidad = parseInt(prompt("¿Cuántos números vas a introducir?"));
let negativos = 0;

for(let i = 0; i < cantidad; i++){
    let num = parseFloat(prompt("Introduce un número:"));
    if(num < 0){
        negativos++;
    }
}

alert("Has introducido " + negativos + " números negativos.");
