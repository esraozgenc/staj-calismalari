function headerHTML(){
    return`
        <header>
        <div class="header-top">
            <div class="logo">
                <a href="/pixel_store/index.html">
                    <img src="/pixel_store/assets/icons/pixel.png" alt="logo">
                </a>
                <a href="/pixel_store/index.html">
                    <span>PIXEL</span>
                </a>
            </div>
            <div class="user-actions">
                <a href="/pixel_store/pages/cart.html">
                    <img src="/pixel_store/assets/icons/cart.png">
                </a>
                <a href="/pixel_store/pages/profile.html">
                    <img src="/pixel_store/assets/icons/profile.png">
                </a>
            </div>
        </div>
        <nav>
            <a href="/pixel_store/pages/category-computer.html">Bilgisayar</a>
            <a href="/pixel_store/pages/category-tablet.html">Tablet</a>
            <a href="/pixel_store/pages/category-phone.html">Telefon</a>
            <a href="/pixel_store/pages/category-tv.html">Televizyon</a>
        </nav>
    </header>
    `}

document.querySelector("#header").innerHTML = headerHTML()