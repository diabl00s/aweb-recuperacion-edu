let pies = parseFloat(prompt("Escriba una cantidad de pies:"));
let pulgadas = parseFloat(prompt("Escriba una cantidad de pulgadas:"));

let cm2 = (pies * 12 + pulgadas) * 2.54;

alert(pies + " pies y " + pulgadas + " pulgadas son " + cm2 + " cm");
