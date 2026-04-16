import { getCart, clearCart } from "pixel_store/services/cartService.js"

const ORDER_KEY = "orders"
const ORDER_ITEMS_KEY = "orderItems"

//Orders getir
function getOrders() {
    const data = localStorage.getItem(ORDER_KEY)

    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

// OrderItems getir
function getOrderItems() {
    const data = localStorage.getItem(ORDER_ITEMS_KEY)

    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

// Kaydet
function saveOrders(orders) {
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders))
}

function saveOrderItems(items) {
    localStorage.setItem(ORDER_ITEMS_KEY, JSON.stringify(items))
}

// Sipariş oluştur

export function createOrder(userId) {
    const cartData = getCart()

    if (!cartData || cartData.items.length === 0) {
        alert("Sepet boş!")
        return
    }

    const orders = getOrders()
    const orderItems = getOrderItems()

    const newOrderId = Date.now()

    let totalPrice = 0
    const newOrderItems = []

    cartData.items.forEach(item => {
        const itemTotal = item.price * item.quantity
        totalPrice += itemTotal

        newOrderItems.push({
            id: Date.now() + Math.random(),
            orderId: newOrderId,
            productId: item.productId,
            quantity: item.quantity,
            price: itemTotal
        })
    })

    const newOrder = {
        id: newOrderId,
        userId: userId,
        totalPrice: totalPrice,
        createdAt: new Date().toISOString().split("T")[0]
    }

    orders.push(newOrder)
    saveOrders(orders)

    const updatedItems = [...orderItems, ...newOrderItems]
    saveOrderItems(updatedItems)

    clearCart()

    return newOrder
}