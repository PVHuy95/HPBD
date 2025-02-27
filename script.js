function playMusic() {
    var audio = document.getElementById("birthdaySong");
    audio.play();

    const fireworks = document.querySelector('.fireworks');
    fireworks.style.display = 'block';

    setTimeout(() => {
        fireworks.style.display = 'none';
    }, 10000);
}
