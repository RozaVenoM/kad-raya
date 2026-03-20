const btn = document.getElementById("startBtn");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    btn.classList.add("slideUp"); // button hilang

    setTimeout(() => {
        overlay.style.display = "none"; // sembunyikan overlay
        container.classList.add("show"); // tunjuk container

        // Trigger animation semua layer
        document.querySelectorAll('.smoke, .logo, .border-biru, .galaxy, .masjid, .pattern, .awan, .awan1, .awan2, .text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8').forEach(el=>{
            el.classList.add('animate'); // start animasi masing-masing
        });

    }, 800); // delay sama dengan button slideUp
});