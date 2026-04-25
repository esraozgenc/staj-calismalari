import { getCart } from "/pixel_store/services/cartService.js"
import { createOrder } from "/pixel_store/services/orderService.js"

// ELEMENTLER
const container = document.getElementById("checkout-items")
const totalEl = document.getElementById("checkout-total")
const completeBtn = document.getElementById("complete-order")

const cardName = document.getElementById("card-name")
const cardNumber = document.getElementById("card-number")
const cardExpiry = document.getElementById("card-expiry")
const cardCVV = document.getElementById("card-cvv")

// DATA
let cart = getCart()
const user = JSON.parse(localStorage.getItem("currentUser"))

//LOGIN CONTROL   
if (!user) {
    alert("Giriş yapmadan sipariş veremezsiniz")
    window.location.href = "/pixel_store/pages/auth.html"
}

//RENDER   
function renderCheckout() {
    if (!cart || cart.length === 0) {
        container.innerHTML = "<p>Sepet boş</p>"
        totalEl.textContent = ""
        completeBtn.style.display = "none"
        return
    }

    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" width="80"/>
            <div>
                <p>${item.name}</p>
                <p>${item.quantity} x ${item.price}₺</p>
            </div>
        </div>
    `).join("")

    updateTotal()
}

// TOTAL   
function updateTotal() {
    const total = cart.reduce((sum, item) => {
        const price = Number(item.price) || 0
        const quantity = Number(item.quantity) || 0
        return sum + (price * quantity)
    }, 0)

    totalEl.textContent = "Toplam: " + total.toLocaleString("tr-TR") + "₺"
}

//INPUT FORMAT   

// Kart numarası → 4'lü ayır
cardNumber.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")

    // max 16 hane
    value = value.slice(0, 16)

    // 4'lü format
    value = value.replace(/(.{4})/g, "$1 ").trim()

    e.target.value = value
})

// CVV sadece sayı
cardCVV.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "")
})

// AA/YY format
cardExpiry.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length >= 3) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4)
    }

    e.target.value = value
})

// VALIDATION   
function validatePayment() {
    if (!cardName.value.trim()) {
        alert("Kart üzerindeki isim boş olamaz")
        return false
    }

    const cleanCardNumber = cardNumber.value.replace(/\s/g, "")

    if (!/^\d{16}$/.test(cleanCardNumber)) {
        alert("Kart numarası 16 haneli olmalı")
        return false
    }

    if (!/^\d{2}\/\d{2}$/.test(cardExpiry.value)) {
        alert("Son kullanma tarihi AA/YY formatında olmalı")
        return false
    }

    if (!/^\d{3}$/.test(cardCVV.value)) {
        alert("CVV 3 haneli olmalı")
        return false
    }

    return true
}

//    ORDER   
completeBtn.addEventListener("click", () => {

    if (!validatePayment()) return

    // loading efekti
    completeBtn.disabled = true
    completeBtn.textContent = "Ödeme Yapılıyor..."

    setTimeout(() => {
        const order = createOrder(user.id)

        if (order) {
            alert(
                `Ödeme başarılı!

                Sipariş Numaranız: #${order.id}

                Siparişinizi profil sayfasından takip edebilirsiniz.`
                )
            setTimeout(() => {
                window.location.href = "/pixel_store/pages/profile.html"
            }, 500)
        } else {
            completeBtn.disabled = false
            completeBtn.textContent = "Ödemeyi Tamamla"
        }
    }, 1500)
})

// INIT
renderCheckout()