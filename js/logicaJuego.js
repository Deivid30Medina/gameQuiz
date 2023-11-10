import {crearGame} from '../js/insertQuestion.js'

let estadoJuego = {
    answerCorrecta: ""
};
let btnSeleccionado;


// JavaScript para manejar el clic en los botones
document.querySelectorAll('.classBtnQuestion').forEach(function(btn) {
btn.addEventListener('click', function() {
    // Obtén el valor de data-text-number del botón clickeado
    btnSeleccionado = this.getAttribute('data-text-number');
    validarRespuesta(btn);
});
});

function removerEstilos(btn){
    btn.classList.remove("classBtnIncorrecto");
    btn.classList.remove("classBtnCorrecto");
}


function esperarTiempoCrearNuevoJuego(btn){
    setTimeout(function() {
        crearGame();
        removerEstilos(btn);
    }, 500);
}

function validarRespuesta(btn){
    if(estadoJuego.answerCorrecta == btnSeleccionado){
        alert("Es correcto");
        btn.classList.add("classBtnCorrecto");
    }else{
        alert("Es incorrecto");
        btn.classList.add("classBtnIncorrecto");
    }
    esperarTiempoCrearNuevoJuego(btn);
}

export {
    estadoJuego,
    btnSeleccionado
};
