import {headerHTML} from "../components/header.js"
import {footerHTML} from "../components/footer.js"
import {getAllProducts} from "../services/productService.js"
import {addToCart} from "../services/cartService.js"
import {productCardHTML } from "../components/productCard.js"

document.querySelector("#header").innerHTML = headerHTML()
document.querySelector("#footer").innerHTML = footerHTML()

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