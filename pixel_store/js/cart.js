import { getCart, saveCart } from "../services/cartService.js"

const container = document.getElementById("cart-container")
const totalEl = document.getElementById("total")
const checkoutBtn = document.getElementById("go-checkout")

let cart = getCart() || []

// ---------------- RENDER ----------------
function renderCart() {
  console.log("Mevcut Sepet:", cart); // Sepetteki objelerin içini kontrol et
  container.innerHTML = ""
  if (!cart.length) {
    container.innerHTML = "<p>Sepet boş</p>"
    totalEl.textContent = ""
    return
  }

  cart.forEach(item => {
    const div = document.createElement("div")
    div.className = "cart-item"

    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price}₺</span>

      <div>
        <button data-id="${item.productId}" class="decrease">-</button>
        <span>${item.quantity}</span>
        <button data-id="${item.productId}" class="increase">+</button>
      </div>
    `

    container.appendChild(div)
  })

  updateTotal()
}

// ---------------- TOTAL (Daha Güvenli Hali) ----------------
function updateTotal() {
  const total = cart.reduce((sum, item) => {
    // Fiyatın sayı olduğundan emin ol, değilse 0 kabul et
    const price = Number(item.price) || 0; 
    const quantity = Number(item.quantity) || 0;
    return sum + (price * quantity);
  }, 0);

  // Toplamı binlik ayraçla daha güzel göstermek için:
  totalEl.textContent = "Toplam: " + total.toLocaleString('tr-TR') + "₺";
}

// ---------------- EVENTS ----------------
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

// ---------------- CHECKOUT ----------------
checkoutBtn.addEventListener("click", () => {
  if (!localStorage.getItem("user")) {
    location.href = "login.html"
    return
  }
  location.href = "checkout.html"
})

// init
renderCart()