let inicio = parseInt(prompt("Introduce el primer número entero:"));
let fin = parseInt(prompt("Introduce el segundo número entero:"));

let suma = 0;
let desde = Math.min(inicio, fin);
let hasta = Math.max(inicio, fin);

for(let i = desde; i <= hasta; i++){
    suma += i;
}

alert("La suma de los números desde " + desde + " hasta " + hasta + " es: " + suma);
