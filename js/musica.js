const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

btn.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btn.textContent = "🔊 Pausar música";
  } else {
    musica.pause();
    btn.textContent = "🔈 Tocar música";
  }
});
