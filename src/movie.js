document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playTrailer');
    const playerSection = document.getElementById('moviePlayer');
    const playerContainer = document.getElementById('playerContainer');

    playButton.addEventListener('click', () => {
        // Mostra a seção do player
        playerSection.style.display = 'block';

        // Remove qualquer vídeo anterior
        playerContainer.innerHTML = '';

        // Cria o elemento de vídeo
        const video = document.createElement('video');
        video.src = './dist/video/clip.mp4'; // caminho do vídeo local
        video.controls = true;
        video.autoplay = true;
        video.muted = false; // coloque true se quiser autoplay sem som
        video.loop = false;

        // Adiciona o vídeo ao container
        playerContainer.appendChild(video);

        // Rola suavemente até o player
        playerSection.scrollIntoView({ behavior: 'smooth' });
    });
});
