import { headerHTML } from "/pixel_store/components/header.js"
import { footerHTML } from "/pixel_store/components/footer.js"
import { autoTranslatePage } from "/pixel_store/js/i18n.js";

// 1. Header ve Footer'ı HTML'e bas
document.querySelector("#header").innerHTML = headerHTML();
document.querySelector("#footer").innerHTML = footerHTML();

// 2. Sayfa Yüklendiğinde Çalışacak İşlemler
document.addEventListener("DOMContentLoaded", async () => {
    // Hafızadaki dili kontrol et, yoksa 'tr' kabul et
    const savedLang = localStorage.getItem("selectedLang") || "tr";
    
    // Eğer dil Türkçe değilse, sayfayı JSON sözlüğüne göre otomatik çevir
    if (savedLang !== "tr") {
        const langBtn = document.querySelector(".language-btn");
        if (langBtn) langBtn.innerText = savedLang.toUpperCase();
        await autoTranslatePage(savedLang);
    }

    // Profil ikonuna tıklama olayı
    const profileIcon = document.getElementById("profileIcon");
    if (profileIcon) {
        profileIcon.addEventListener("click", () => {
            window.location.href = "/pixel_store/pages/profile.html";
        });
    }

    // Arama kutusunda Enter'a basma olayı
    document.addEventListener("keypress", (e) => {
        if (e.target.classList.contains("search-input") && e.key === "Enter") {
            const query = e.target.value.trim();
            if (query) {
                window.location.href = `/pixel_store/pages/category.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
});

// 3. Dil Değiştirme Butonu Event Listener (Global)
document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("language-btn")) {
        const btn = e.target;
        const currentLang = btn.innerText.toLowerCase();

        // TR -> EN -> ES -> TR döngüsü
        let nextLang;
        if (currentLang === "tr") nextLang = "en";
        else if (currentLang === "en") nextLang = "es";
        else nextLang = "tr";

        // Buton metnini hemen güncelle
        btn.innerText = nextLang.toUpperCase();

        // Seçilen dili tarayıcı hafızasına (localStorage) kaydet
        localStorage.setItem("selectedLang", nextLang);

        // i18n.js içindeki otomatik JSON tarayıcıyı çalıştır
        await autoTranslatePage(nextLang);
    }
});