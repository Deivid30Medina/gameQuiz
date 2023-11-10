const opcionRespuestaCorrecta = "Esta es correcta";
const opcionIncorrecta = [
    "Esta no es 0"
    ,"Esta no es 1"
    ,"Esta no es 2"
    ,"Esta no es 3"
    ,"Esta no es 4"
    ,"Esta no es 5"
    ,"Esta no es 6"
];

function randomQuestion(){
    let indice, answerIncorrectar;
    indice = ( Math.floor( Math.random() * (opcionIncorrecta.length) ) );
    answerIncorrectar = opcionIncorrecta[indice];
    deleteItemArray(indice);
    return answerIncorrectar;
}

function deleteItemArray(indice){
    opcionIncorrecta.splice(indice,1);
}

export {
    randomQuestion,
    opcionRespuestaCorrecta,
    deleteItemArray,
    opcionIncorrecta
};