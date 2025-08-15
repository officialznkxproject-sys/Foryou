// confirm.js

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const horrorOverlay = document.getElementById("horrorOverlay");
    let yesClickCount = 0;
    let yesMovingInterval = null;
    let yesLocked = false;

    // Fungsi untuk memindahkan tombol ke posisi acak
    function moveYesButton() {
        const maxX = window.innerWidth - yesBtn.offsetWidth - 20;
        const maxY = window.innerHeight - yesBtn.offsetHeight - 20;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        yesBtn.style.position = "absolute";
        yesBtn.style.left = `${randomX}px`;
        yesBtn.style.top = `${randomY}px`;
    }

    // Event klik "TIDAK"
    noBtn.addEventListener("click", function () {
        document.body.classList.add("horror");
        horrorOverlay.classList.remove("hidden");

        setTimeout(() => {
            document.body.classList.remove("horror");
            horrorOverlay.classList.add("hidden");
            window.location.href = "index.html";
        }, 5000);
    });

    // Event klik "IYAPSS"
    yesBtn.addEventListener("click", function () {
        if (yesLocked) return;

        yesClickCount++;

        if (yesClickCount <= 5) {
            moveYesButton();
        } else if (yesClickCount === 6) {
            // Mulai bergerak terus selama 5 detik
            let duration = 5000;
            yesLocked = true;
            yesMovingInterval = setInterval(moveYesButton, 500);

            setTimeout(() => {
                clearInterval(yesMovingInterval);
                yesLocked = false;
                // Pindah-berhenti setiap 2 detik selamanya sampai klik
                yesMovingInterval = setInterval(() => {
                    moveYesButton();
                    setTimeout(() => {}, 2000);
                }, 2000);
            }, duration);
        } else {
            // Klik terakhir berhasil → pindah ke halaman final
            window.location.href = "final.html";
        }
    });
});
