import { getAllProducts } from "../services/productService.js"
import { productCardHTML } from "../components/productCard.js"
import { getCategoryById } from "../services/categoryService.js"

let allProducts = []
let currentFilters = {
    minPrice: null,
    maxPrice: null,
    brands: [],
    sort: null
}

//Name'den marka ismini çıkarma işlemi
function getBrandFromName(name) {
    return name.split(" ")[0]
}

async function initCategoryPage() {

    const title = document.querySelector("#category-title")
    const categoryId = Number(new URLSearchParams(window.location.search).get("category"))
    const category = await getCategoryById(categoryId)
    const products = await getAllProducts()

    allProducts = products.filter(p => p.categoryId == categoryId)
    
    if (category) {
        title.textContent = category.name
    }else {
        title.textContent = "Kategori"
    }

    renderProducts() //ürünleri ekrana bas
    setupFilters() //filtre eventlarını başlat
    renderBrandFilters() //marka checkboxlarını oluştur
}

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

    document.querySelector("#max-price").addEventListener("change", (e) => {
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

initCategoryPage()
