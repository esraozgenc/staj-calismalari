import { getAllProducts } from "/pixel_store/services/productService.js"
import { productCardHTML } from "/pixel_store/components/productCard.js"
import { getCategoryById } from "/pixel_store/services/categoryService.js"
import { addToCart } from "/pixel_store/services/cartService.js"

let allProducts = []
let currentFilters = {
    minPrice: null,
    maxPrice: null,
    brands: [],
    sort: null
}
//sepete ekle butonun eventı
document.querySelector("#product-list").addEventListener("click", (e) => { 
    const btn = e.target.closest(".add-to-cart")
    if (!btn) return

    const productId = Number(btn.dataset.id)
    const productToAdd = allProducts.find(p => p.id === productId)

    if (productToAdd) {
        console.log("Sepete eklenen ürün:", productToAdd)
        addToCart(productToAdd)
    }
})

//Name'den marka ismini çıkarma işlemi
function getBrandFromName(name) {
    return name.split(" ")[0]
}

async function initCategoryPage() {
    const titleElement = document.querySelector("#category-title");
    const container = document.querySelector("#product-list");
    
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");
    const searchQuery = params.get("search");

    const products = await getAllProducts();

    if (searchQuery) {
        // Arama Modu
        const query = searchQuery.toLowerCase();
        allProducts = products.filter(p => p.name.toLowerCase().includes(query));
        titleElement.textContent = `Arama Sonucu: "${searchQuery}"`;
    } else if (categoryId) {
        // Kategori Modu
        const category = await getCategoryById(Number(categoryId));
        allProducts = products.filter(p => p.categoryId == Number(categoryId));
        titleElement.textContent = category ? category.name : "Kategori";
    } else {
        // Hiçbiri yoksa tüm ürünleri göster veya hata ver
        allProducts = products;
        titleElement.textContent = "Tüm Ürünler";
    }

    renderProducts();
    setupFilters();
    renderBrandFilters();
}

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", initCategoryPage);

//Ürünleri ekrana basar
function renderProducts(){
    let filtered = [...allProducts]

    //fiyat filtre
    if (currentFilters.minPrice){
        filtered = filtered.filter(p => p.price >= currentFilters.minPrice)
    }
    if (currentFilters.maxPrice){
        filtered = filtered.filter(p => p.price <= currentFilters.maxPrice)
    }

    //marka filtre
    if(currentFilters.brands.length > 0) {
        filtered = filtered.filter(p => {
            const brand = getBrandFromName(p.name)
            return currentFilters.brands.includes(brand)
        })
    }

    //sıralama
    if (currentFilters.sort === "asc") {
        filtered.sort((a, b) => a.price - b.price) //ucuzdan pahalıya
    }
    if (currentFilters.sort === "desc") {
        filtered.sort((a, b) => b.price - a.price) //pahalıdan ucuza sırala
    }

    //render işlemi
    const container = document.querySelector("#product-list")

    if (filtered.length === 0) {
        container.innerHTML = "<p>Ürün bulunamadı</p>"
    }else {
        container.innerHTML = filtered.map(p => productCardHTML(p)).join("")
    }
}

//Filtre eventlarını başlat
function setupFilters(){

    document.querySelector("#min-price").addEventListener("input", (e) => {
        currentFilters.minPrice = Number(e.target.value) || null // || bu sembolün sol tarafı false ise null kullan
        renderProducts()
    })

    document.querySelector("#max-price").addEventListener("input", (e) => {
        currentFilters.maxPrice = Number(e.target.value) || null
        renderProducts()
    })

    document.querySelector("#sort").addEventListener("change", (e) => {
        currentFilters.sort = e.target.value
        renderProducts()
    })
}

//Marka checkboxlarını oluştur
function renderBrandFilters() {
    const brandContainer = document.querySelector("#brand-filters") //marka alanı seçilir
    const brands = [...new Set(allProducts.map(p => getBrandFromName(p.name)))] //benzersiz markalar bir diziye dönüştürülür

    brandContainer.innerHTML = brands.map(brand => `
        <label>
            <input type="checkbox" value="${brand}">
            ${brand}
        </label>
        `).join("")

        brandContainer.addEventListener("change", (e) => {
            const value = e.target.value //seçilen marka alınır

            if (e.target.checked) {
                currentFilters.brands.push(value) //seçildiyse listeye ekle
            } else {
                currentFilters.brands = currentFilters.brands.filter(b => b !== value)
            }

            renderProducts()
        })
}
