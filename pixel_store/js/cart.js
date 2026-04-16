import { getCart } from "pixel_store/services/cartService.js"

const container = document.getElementById("cart-container")
const checkoutBtn = document.getElementById("go-checkout")

// Sepeti göster
const cart = getCart()

if (cart && cart.items.length > 0) {
    container.innerHTML = cart.items.map(item => `
        <div>
            Ürün ID: ${item.productId} - Adet: ${item.quantity}
        </div>
    `).join("")
} else {
    container.innerHTML = "Sepet boş"
}

// Checkout kontrol
checkoutBtn.addEventListener("click", () => {
    if (!localStorage.getItem("user")) {
        location.href = "login.html"
        return
    }
    location.href = "checkout.html"
})