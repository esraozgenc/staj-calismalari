import { getAllProducts } from "../services/productService.js"
import { productCardHTML } from "../components/productCard.js"
import { getCategoryById } from "../services/categoryService.js"

async function initCategoryPage() {

    const title = document.querySelector("#category-title")
    const container = document.querySelector("#product-list")

    // URL'den kategori al
    const categoryId = Number(
        new URLSearchParams(window.location.search).get("category")
    )

    // kategori bilgisini çek
    const category = await getCategoryById(categoryId)

    // ürünleri çek
    const products = await getAllProducts()

    // filtrele
    const filtered = products.filter(p => p.categoryId === categoryId)

    // başlık (if-else)
    if (category) {
        title.textContent = category.name
    } else {
        title.textContent = "Kategori"
    }

    // render
    if (!categoryId) {
        container.innerHTML = "<p>Kategori seçilmedi</p>"
    } else if (filtered.length === 0) {
        container.innerHTML = "<p>Ürün bulunamadı</p>"
    } else {
        container.innerHTML = filtered.map(p => productCardHTML(p)).join("")
    }
}

initCategoryPage()