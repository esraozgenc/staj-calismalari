export function headerHTML(){
    return`
        <header>
        <div class="header-top">
            <div class="logo">
                <a href="/pixel_store/index.html">
                    <img src="/pixel_store/assets/icons/pixel.png" alt="logo">
                </a>
            </div>

            <a href="/pixel_store/index.html">
                    <span>PIXEL</span>
            </a>
            <div class="user-actions">
                <button class="language-btn">TR</button>
                <a href="/pixel_store/pages/profile.html">
                    <img src="/pixel_store/assets/icons/profile.png">
                </a>
                <a href="/pixel_store/pages/cart.html">
                    <img src="/pixel_store/assets/icons/cart.png">
                </a>
            </div>
        </div>
        <div class="navbar">
            <div class="nav-links">
                <a href="/pixel_store/pages/category-computer.html">BİLGİSAYAR</a>
                <a href="/pixel_store/pages/category-tablet.html">TABLET</a>
                <a href="/pixel_store/pages/category-phone.html">TELEFON</a>
                <a href="/pixel_store/pages/category-tv.html">TELEVİZYON</a>
            </div>
            <div class="nav-search">
                <input type="text" class="search-input" placeholder="Ürün ara...">
            </div>
        </div>
    </header>
    `}