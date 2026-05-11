export async function autoTranslatePage(targetLang) {
    // 1. JSON sözlüğünü yükle
    const response = await fetch(`/pixel_store/locales/${targetLang}.json`);
    const dictionary = await response.json();

    // 2. Sayfadaki tüm metin içerebilecek etiketleri seç
    const elements = document.querySelectorAll("h1, h2, h3, h4, p, a, span, button, li, input[placeholder], label, option, #category-title");

    elements.forEach(el => {
        // Input placeholder kontrolü
        if (el.tagName === "INPUT" && el.placeholder) {
            const key = el.placeholder.trim();
            if (dictionary[key]) el.placeholder = dictionary[key];
        }

        // Metin içeriği kontrolü
        // Sadece en içteki metni alıyoruz ki HTML yapısı ve görseller bozulmasın
        for (let node of el.childNodes) {
            if (node.nodeType === 3) { // 3 = Saf metin düğümü
                const text = node.textContent.trim();
                if (dictionary[text]) {
                    node.textContent = node.textContent.replace(text, dictionary[text]);
                }
            }
        }
    });
}