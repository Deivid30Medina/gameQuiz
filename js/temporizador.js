let tiempoTotal = 10;
let tiempoRestante = tiempoTotal;
let temporizadorElemento = document.getElementById('timer');
let temporizadorId; // Almacena el ID del temporizador actual

function actualizarTemporizador() {
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;

  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  temporizadorElemento.textContent = minutos + ':' + segundos;
}

function startTemporizador() {
  // Cancelar el temporizador existente antes de iniciar uno nuevo
  clearTimeout(temporizadorId);

  tiempoRestante = tiempoTotal;
  comenzarTemporizador();
}

function comenzarTemporizador() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    actualizarTemporizador();
    temporizadorId = setTimeout(comenzarTemporizador, 1000);
  } else {
    // Si el tiempo llega a cero, reiniciar el temporizador
    startTemporizador(); // Reiniciar el temporizador
  }
}

export {
  startTemporizador
};
