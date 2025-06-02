let segundosTotales = parseInt(prompt("Escriba una cantidad de segundos:"));

let horas = Math.floor(segundosTotales / 3600);
let minutos2 = Math.floor((segundosTotales % 3600) / 60);
let segundosFinales = segundosTotales % 60;

alert(segundosTotales + " segundos son " + horas + " horas, " + minutos2 + " minutos y " + segundosFinales + " segundos");
