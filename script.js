// COUNTDOWN
const weddingDate = new Date("April 30, 2026 12:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    document.getElementById("days").innerHTML = Math.floor(gap / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((gap % (1000 * 60)) / 1000);
}, 1000);


// 🎵 MUSIC FIX (IMPORTANT)
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play().then(() => {
            btn.innerHTML = "⏸ Pause Music";
        }).catch(err => console.log(err));
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }
});