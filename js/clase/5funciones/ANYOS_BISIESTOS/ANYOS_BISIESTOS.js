let año1 = parseInt(prompt("Introduce el primer año:"));
let año2 = parseInt(prompt("Introduce el segundo año:"));

let inicio = Math.min(año1, año2);
let fin = Math.max(año1, año2);

let contadorBisiestos = 0;

for(let año = inicio; año <= fin; año++){
    if((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)){
        contadorBisiestos++;
    }
}

alert("Hay " + contadorBisiestos + " años bisiestos entre " + inicio + " y " + fin);
