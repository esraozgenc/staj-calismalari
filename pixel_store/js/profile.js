import { isLoggedIn, getProfile, logout, updateProfile } from "/pixel_store/services/userService.js"

if (!isLoggedIn()) {
    window.location.href = "/auth.html"
}

let currentUser = JSON.parse(localStorage.getItem("currentUser"))
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

document.addEventListener("DOMContentLoaded", async () => {

    const result = await getProfile(currentUser.id)

    if (!result.success) {
        alert(result.message)
        return
    }

    const { user, orders } = result.data
    userData = user

    // USER BAS
    mapped.forEach(f => {
        f.span.textContent = user[f.key] || "-"
    })

    // ORDERS BAS
    renderOrders(orders)
})

// ORDERS UI
function renderOrders(orders) {
    ordersContainer.innerHTML = ""

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