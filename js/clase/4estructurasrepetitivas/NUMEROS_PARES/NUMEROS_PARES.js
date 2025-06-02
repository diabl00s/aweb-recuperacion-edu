let respuesta = "S";

while(respuesta === "S" || respuesta === "s"){
    let num = parseInt(prompt("Introduce un número par:"));
    if(num % 2 === 0){
        alert("Número par correcto: " + num);
    } else {
        alert("El número no es par.");
    }
    respuesta = prompt("¿Quieres introducir otro número par? (S/N)");
}
