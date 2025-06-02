let segundos = parseInt(prompt("Escriba una cantidad de segundos:"));

let minutos = Math.floor(segundos / 60);
let seg_restantes = segundos % 60;

alert(segundos + " segundos son " + minutos + " minutos y " + seg_restantes + " segundos");
