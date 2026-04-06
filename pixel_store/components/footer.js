function footerHTML(){
    return`
    <footer>
        <div class="footer-brand">
            <h4>PIXEL</h4>
            <p>Detay arttıkça PIXEL büyür.</p>
        </div>
        <div class="footer-links">
            <h4>Hızlı Linkler</h4>
            <div class="footer-links-list">
                <a href="/pixel_store/index.html">Anasayfa</a>
                <a href="/pixel_store/pages/cart.html">Sepet</a>
                <a href="/pixel_store/pages/profile.html">Profil</a>
                <a href="/pixel_store/pages/category-computer.html">Bilgisayar</a>
                <a href="/pixel_store/pages/category-tablet.html">Tablet</a>
                <a href="/pixel_store/pages/category-phone.html">Telefon</a>
                <a href="/pixel_store/pages/category-tv.html">Televizyon</a>
            </div>
        </div>
        <div class="footer-contact">
            <h4>İletişim</h4>
            <a href="mailto:destek@pixelstore.com">destek@pixelstore.com</a>
        </div>
        <div class="footer-copyright">
            <p>© 2026 Pixel</p>
        </div>
    </footer>
    `}

document.querySelector("#footer").innerHTML = footerHTML()