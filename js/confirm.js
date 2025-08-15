const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesClickCount = 0;

// Klik tombol "TIDAK"
noBtn.addEventListener("click", () => {
    document.body.classList.add("horror");
    setTimeout(() => {
        document.body.classList.remove("horror");
        window.location.href = "index.html"; // ulang dari awal
    }, 5000);
});

// Klik tombol "IYAPSS"
yesBtn.addEventListener("click", () => {
    yesClickCount++;

    if (yesClickCount < 6) {
        moveButton();
    } else {
        // Tombol bergerak bebas selama 5 detik
        let moveInterval = setInterval(moveButton, 800);
        setTimeout(() => {
            clearInterval(moveInterval);
            yesBtn.style.position = "static";
            yesBtn.addEventListener("click", () => {
                window.location.href = "final.html";
            }, { once: true });
        }, 5000);
    }
});

function moveButton() {
    yesBtn.style.position = "absolute";
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
}
