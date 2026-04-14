import {headerHTML} from "../components/header.js"
import {footerHTML} from "../components/footer.js"
import {getAllProducts} from "../services/productService.js"
import {addToCart} from "../services/cartService.js"
import {productCardHTML } from "../components/productCard.js"
import {getCategories} from "../services/categoryService.js"
import {categoryCardHTML} from "../components/categoryCard.js"

document.querySelector("#header").innerHTML = headerHTML()
document.querySelector("#footer").innerHTML = footerHTML()

//ürünleri veritabanından getirip ekrana yazdıran fonksiyon
async function renderProducts() {
    const products = await getAllProducts()
    const container = document.querySelector("#products")

    container.innerHTML = products.map(productCardHTML).join("")
}

renderProducts()

//click event (add to cart)
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add-to-cart")) {
        const productId = Number(e.target.dataset.id)
        addToCart(productId)
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
import { isLoggedIn } from "./userService.js"

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