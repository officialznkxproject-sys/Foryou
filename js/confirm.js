// main.js

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitName");

    submitBtn.addEventListener("click", function () {
        const inputName = nameInput.value.trim().toLowerCase();
        
        if (inputName === "susanti") {
            // Simpan nama di localStorage (jika mau dipakai di halaman lain)
            localStorage.setItem("userName", nameInput.value.trim());
            // Pindah ke halaman konfirmasi
            window.location.href = "confirm.html";
        } else {
            alert("Nama tidak dikenali! Coba lagi 💕");
            nameInput.value = "";
            nameInput.focus();
        }
    });

    // Enter key juga bisa untuk submit
    nameInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            submitBtn.click();
        }
    });
});
