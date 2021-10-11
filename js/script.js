const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
playPause.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        playPause.querySelector(".container").classList.toggle("hide");
        playPause.querySelector(".container").classList.toggle("hide");
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector(".container").classList.toggle("hide");
        playPause.querySelector(".container").classList.toggle("hide");

    }
}
);