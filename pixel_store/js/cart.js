import { getCart, saveCart } from "../services/cartService.js"
import { cartCardHTML } from "../components/cartCard.js"

const container = document.getElementById("cart-container")
const totalEl = document.getElementById("total")
const checkoutBtn = document.getElementById("go-checkout")

let cart = getCart() || []

// RENDER    
function renderCart() {
    container.innerHTML = ""

    if (!cart.length) {
        container.innerHTML = "<p>Sepet boş</p>"
        totalEl.textContent = ""
        return
    }

    container.innerHTML = cart.map(item => cartCardHTML(item)).join("")

    updateTotal()
}

// TOTAL    
function updateTotal() {
    const total = cart.reduce((sum, item) => {
    // Fiyatın sayı olduğundan emin ol, değilse 0 kabul et
    const price = Number(item.price) || 0; 
    const quantity = Number(item.quantity) || 0;
    return sum + (price * quantity);
  }, 0);

  // Toplamı binlik ayraçla daha güzel göstermek için:
  totalEl.innerHTML = `<span>Toplam</span> : <strong>${total.toLocaleString('tr-TR')} ₺</strong>`;
}

// EVENTS    
container.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (!id) return
    const item = cart.find(i => i.productId == id)
    if (!item) return

    if (e.target.classList.contains("increase")) {
        item.quantity++
    }

    if (e.target.classList.contains("decrease")) {
        if (item.quantity > 1) {
            item.quantity--
        } else {
            cart = cart.filter(i => i.productId != id)
        }
    }

    saveCart(cart)
    renderCart()
})

// CHECKOUT
checkoutBtn.addEventListener("click", () => {
    if (!localStorage.getItem("currentUser")) {
        location.href = "/pixel_store/pages/auth.html"
        return
    }
    location.href = "/pixel_store/pages/checkout.html"
})

// init
renderCart()