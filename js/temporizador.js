let tiempoTotal = 10;
let tiempoRestante = tiempoTotal;
let restarTiempo = 1000;
let temporizadorElemento = document.getElementById('timer');

function actualizarTemporizador() {
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;

  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  temporizadorElemento.textContent = minutos + ':' + segundos;
}

function startTemporizador(){
  restarTiempo = 0;
  tiempoRestante = tiempoTotal;
  tick(); // Comienza el nuevo temporizador
}

function comenzarTemporizador(){
  restarTiempo = 1000;
  if (tiempoRestante > 0) {
    tiempoRestante--;
    actualizarTemporizador();
    setTimeout(tick, restarTiempo);
  } else {
    // Si el tiempo llega a cero, reiniciar el temporizador
  }
}
function tick() {
  comenzarTemporizador();
}


export {
  startTemporizador
};