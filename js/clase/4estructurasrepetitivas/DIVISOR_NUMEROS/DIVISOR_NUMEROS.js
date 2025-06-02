let n = parseInt(prompt("Introduce un número entero mayor que cero:"));

let divisores = [];
for(let i = 1; i <= n; i++){
    if(n % i === 0){
        divisores.push(i);
    }
}

alert("Los divisores de " + n + " son: " + divisores.join(", "));
