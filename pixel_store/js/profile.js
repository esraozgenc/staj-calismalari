//sayfa koruma
import { isLoggedIn } from "./userService.js"

if (!isLoggedIn()) {
    window.location.href = "/auth.html"
}

//profil ve sipariş bilgileri
import { getProfile } from "./userService.js"

document.addEventListener("DOMContentLoaded", async () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const result = await getProfile(currentUser.id)

    if (!result.success) {
        alert(result.message)
        return
    }

    const { user, orders } = result.data

    document.querySelector("#userName").textContent = user.name
    document.querySelector("#userEmail").textContent = user.email

    console.log("Siparişler:", orders)
})

//profil güncelleme
import { updateProfile } from "./userService.js"

document.querySelector("#updateForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const updatedData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        address: document.querySelector("#address").value,
        phone: document.querySelector("#phone").value
    }

    const result = updateProfile(currentUser.id, updatedData)

    if (!result.success) {
        alert(result.message)
    } else {
        alert("Profil güncellendi")
        location.reload()
    }
})

//çıkş yapma işlemi
import { logout } from "./userService.js"

document.querySelector("#logoutBtn").addEventListener("click", logout)

// siparişlerin listelenmesi
import { getOrders } from "../services/orderService.js"

const orders = getOrders()

const container = document.getElementById("orders-container")

if (orders.length === 0) {
    container.innerHTML = "Sipariş yok"
} else {
    container.innerHTML =
        orders.map(o => `Sipariş: ${o.id} - ${o.totalPrice} TL`).join("")
}