// final.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Fungsi ganti slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    // Tampilkan slide pertama
    showSlide(currentSlide);

    // Ganti slide setiap 3 detik
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);

    // Efek hati mengapung
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(heart);

        // Hapus hati setelah 5 detik
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Buat hati setiap 400ms
    setInterval(createHeart, 400);

    // Musik romantis
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.5; // Set volume 50%
        music.play().catch(() => {
            console.log("Autoplay musik dicegah, user harus klik dulu.");
        });
    }
});
