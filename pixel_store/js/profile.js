console.log("CURRENT USER:", localStorage.getItem("currentUser"))
import { isLoggedIn, getProfile, logout, updateProfile } from "/pixel_store/services/userService.js"

if (!isLoggedIn()) {
    window.location.href = "/pixel_store/pages/auth.html"
}

let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null")
if (!currentUser) {
    window.location.href = "/pixel_store/pages/auth.html"
}
let userData = null

const fields = [
    { span: "#userName", input: "#nameInput", key: "name" },
    { span: "#userEmail", input: "#emailInput", key: "email" },
    { span: "#userAddress", input: "#addressInput", key: "address" },
    { span: "#userPhone", input: "#phoneInput", key: "phone" }
]

const mapped = fields.map(f => ({
    span: document.querySelector(f.span),
    input: document.querySelector(f.input),
    key: f.key
}))

const editBtn = document.querySelector("#editBtn")
const saveBtn = document.querySelector("#saveBtn")
const cancelBtn = document.querySelector("#cancelBtn")

const ordersContainer = document.querySelector("#orders-container")

document.addEventListener("DOMContentLoaded", () => {
    // 1. Tüm siparişleri al
    const allOrders = JSON.parse(localStorage.getItem("orders")) || []

    console.log("TÜM SİPARİŞLER:", allOrders)

    // 2. Sadece mevcut kullanıcıya ait olanları filtrele
    // currentUser.id ile order.userId karşılaştırılıyor
    const userOrders = allOrders.filter(order => order.userId == currentUser.id)

    console.log("KULLANICIYA AİT SİPARİŞLER:", userOrders)

    mapped.forEach(f => {
        f.span.textContent = currentUser[f.key] || "-"
    })

    // 3. Sadece filtrelenmiş siparişleri ekrana bas
    renderOrders(userOrders)
})

// ORDERS UI
function renderOrders(orders) {
    ordersContainer.innerHTML = ""

    if (!orders.length) {
        ordersContainer.innerHTML = "<p>Henüz sipariş yok</p>"
        return
    }

    orders.forEach(order => {

        const div = document.createElement("div")
        div.classList.add("order-card")

        div.innerHTML = `
            <p>Sipariş ID: ${order.id}</p>
            <p>Toplam: ${order.totalPrice} ₺</p>
            <p>Tarih: ${order.createdAt}</p>
        `

        ordersContainer.appendChild(div)
    })
}

// EDIT
editBtn.addEventListener("click", () => {

    mapped.forEach(f => {
        f.input.value = f.span.textContent
        f.span.classList.add("hidden")
        f.input.classList.remove("hidden")
    })

    editBtn.classList.add("hidden")
    saveBtn.classList.remove("hidden")
    cancelBtn.classList.remove("hidden")
})

// CANCEL
cancelBtn.addEventListener("click", () => location.reload())

// SAVE
saveBtn.addEventListener("click", async () => {

    const updatedData = {}

    mapped.forEach(f => {
        updatedData[f.key] = f.input.value
    })

    const result = await updateProfile(currentUser.id, updatedData)

    if (!result || !result.success) {
        alert(result?.message || "Hata oluştu")
    } else {
        alert("Profil güncellendi")
        location.reload()
    }
})

// LOGOUT
document.querySelector("#logoutBtn").addEventListener("click", logout)