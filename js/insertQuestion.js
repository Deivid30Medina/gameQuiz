import {randomQuestion, opcionRespuestaCorrecta} from '../js/banco-de-preguntas.js'

const posicionPalabras = ["0","1","2"];

function generarRandom(){
    let indice, valorColocar;
    indice = ( Math.floor( Math.random() * (posicionPalabras.length) ) );
    valorColocar = posicionPalabras[indice]
    deleteItemArrayQuestion(indice);
    return valorColocar;
}

function deleteItemArrayQuestion(indice){
    posicionPalabras.splice(indice,1);
}

function obtenerElementoP(indice){
    let elementosP = document.querySelectorAll('.classTextQuestion');
    let elementoEspecifico = Array.from(elementosP).find(elemento => elemento.dataset.textNumber === indice);
    return elementoEspecifico;
    // Encuentra el elemento p con data-text-number igual a "0"
}

function insertWord(elementoP, palabra){    
    elementoP.textContent = palabra;

}

function crearGame(){
    let posicionInsertPalabra, palabra, elementoP;

    for(let i = 0; i < 2; i++){
        posicionInsertPalabra = generarRandom();
        elementoP = obtenerElementoP(posicionInsertPalabra);
        palabra = randomQuestion();  
        insertWord(elementoP, palabra);
    }

    insertWord(obtenerElementoP(posicionPalabras[0]), opcionRespuestaCorrecta);
}

export {
    crearGame
};