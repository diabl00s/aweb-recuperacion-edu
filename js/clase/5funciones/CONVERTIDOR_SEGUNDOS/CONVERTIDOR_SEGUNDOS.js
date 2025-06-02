let dias = parseInt(prompt("Introduce número de días:"));
let horas = parseInt(prompt("Introduce número de horas:"));
let minutos = parseInt(prompt("Introduce número de minutos:"));
let segundos = parseInt(prompt("Introduce número de segundos:"));

let totalSegundos = segundos + minutos*60 + horas*3600 + dias*86400;

alert("El total de segundos es: " + totalSegundos);
