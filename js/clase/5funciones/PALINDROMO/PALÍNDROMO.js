let frase = prompt("Introduce una frase:");


let fraseSinEspacios = "";
for(let i = 0; i < frase.length; i++){
    if(frase[i] !== " "){
        fraseSinEspacios += frase[i];
    }
}

let fraseInvertida = "";
for(let i = fraseSinEspacios.length - 1; i >= 0; i--){
    fraseInvertida += fraseSinEspacios[i];
}

if(fraseSinEspacios === fraseInvertida){
    alert("La frase es palíndroma.");
} else {
    alert("La frase no es palíndroma.");
}
