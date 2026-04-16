import { createOrder } from "pixel_store/services/orderService.js"

document.getElementById("pay-btn").addEventListener("click", () => {
    const user = JSON.parse(localStorage.getItem("user"))
    createOrder(user.id) // userId
    alert("Sipariş oluşturuldu")
    location.href = "orders.html"
})