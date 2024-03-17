function playSound(audioSource) {
    var audio = document.getElementById('audio');
    audio.src = audioSource;
    audio.play();
}