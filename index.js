let musicaTocando = false;
function tocarMusica() {
  if (!musicaTocando) {
    const musica = document.getElementById('musica');
    musica.play().catch(() => {
      // Pode falhar se o usuário não interagir — por isso só tentar após clique
    });
    musicaTocando = true;
  }
}
