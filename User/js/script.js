const buttons = document.querySelectorAll("[data-carousel-button]"); // Mengambil semua elemen button yang memiliki atribut data-carousel-button

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1; // Menentukan arah offset berdasarkan atribut data-carousel-button
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]"); // Mengambil elemen ul dengan atribut data-slides yang terdekat
        const activeSlide = slides.querySelector("[data-active]"); // Mengambil elemen slide yang sedang aktif
        let newIndex = [...slides.children].indexOf(activeSlide) + offset; // Menghitung indeks baru untuk slide berikutnya atau sebelumnya

        if (newIndex < 0) newIndex = slides.children.length - 1; // Jika indeks kurang dari 0, atur ke indeks slide terakhir
        if (newIndex >= slides.children.length)  newIndex = 0; // Jika indeks lebih besar atau sama dengan jumlah slide, atur ke indeks pertama

        slides.children[newIndex].dataset.active = "true"; // Mengatur atribut data-active pada slide baru
        activeSlide.removeAttribute("data-active"); // Menghapus atribut data-active dari slide yang sedang aktif
    });
});
