const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".confirm-container");

let yesClickCount = 0;

// Klik tombol "TIDAK"
noBtn.addEventListener("click", () => {
    document.body.classList.add("horror");
    setTimeout(() => {
        document.body.classList.remove("horror");
        window.location.href = "index.html";
    }, 5000);
});

// Klik tombol "IYAPSS"
yesBtn.addEventListener("click", () => {
    yesClickCount++;

    if (yesClickCount < 6) {
        moveButton();
    } else {
        // Gerak otomatis selama 5 detik
        let moveInterval = setInterval(moveButton, 500);
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
    const x = Math.random() * (container.offsetWidth - yesBtn.offsetWidth - 20);
    const y = Math.random() * (container.offsetHeight - yesBtn.offsetHeight - 20);
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
}
