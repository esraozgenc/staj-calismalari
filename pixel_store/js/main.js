import { headerHTML } from "../components/header.js"
import { footerHTML } from "../components/footer.js"
import { getAllProducts } from "../services/productService.js"
import { addToCart } from "../services/cartService.js"
import { productCardHTML } from "../components/productCard.js"
import { getCategories } from "../services/categoryService.js"
import { categoryCardHTML } from "../components/categoryCard.js"
import { isLoggedIn } from "../services/userService.js"

document.querySelector("#header").innerHTML = headerHTML()
document.querySelector("#footer").innerHTML = footerHTML()

let products = []
//ürünleri veritabanından getirip ekrana yazdıran fonksiyon
async function renderProducts() {
    products = await getAllProducts()

    const container = document.querySelector("#products")
    container.innerHTML = products.map(productCardHTML).join("")
    
}

renderProducts()

//click event (add to cart)
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add-to-cart")) {

        if (!products.length) return

        const productId = Number(e.target.dataset.id)
        const product = products.find(p => p.id === productId)

        if (!product) return

        addToCart(product)
    }
})

//categorileri veritabanından getirip ekrana yazdıran fonksiyon
async function renderCategories(){
    const categories = await getCategories()
    const container = document.querySelector("#categories")

    container.innerHTML = categories.map(categoryCardHTML).join("")
}

renderCategories()

//click event (category-card)
document.addEventListener("click", (e) => {
    const card = e.target.closest(".category-card")

    if(card){
        const slug = card.dataset.slug
        window.location.href = `/pixel_store/pages/category-${slug}.html`
    }
})

//userService.js işlemleri (navbar/profile icon)

document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.querySelector("#profileIcon")

    if (!profileIcon) return

    profileIcon.addEventListener("click", () => {
        if (isLoggedIn()) {
            window.location.href = "/profile.html"
        } else {
            window.location.href = "/auth.html"
        }
    })
})