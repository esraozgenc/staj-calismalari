const CART_KEY = "cart"

//localstorage'dan mevcut verileri alalım
function getCart(){
    const rawData = localStorage.getItem(CART_KEY)
    if(rawData===null){
        return []
    }else{
        return JSON.parse(rawData)
    }
}

//localstorage'a yeni veriyi kaydet
function saveCart(cart){
    const cartString = JSON.stringify(cart)
    localStorage.setItem(CART_KEY, cartString)
}

//sepete ürün ekler veya adet sayısnı artırır
function addToCart(product){
    if (!product) return
    let cart = getCart()
    const existingItem = cart.find(item => item.productId == product.id)
    if (existingItem){
        existingItem.quantity += 1
    } else{
        cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
})
    }
    saveCart(cart)
}

//ürünü sepetten silmek
function removeFromCart(productId){
    let cart = getCart()
    const filteredCart = cart.filter(item => item.productId !== productId) //item cart içindeki her ürün
    saveCart(filteredCart)
}

//ürün adet sayısını azaltmak
function decreaseQuantity(productId){
    let cart = getCart()
    const item = cart.find(item => item.productId === productId)
    if(!item) return;

    if(item.quantity >1){
        item.quantity -= 1
        saveCart(cart)
    }else{
        removeFromCart(productId)
    }
}

function clearCart() {
    localStorage.removeItem("cart")
}

export {getCart, saveCart, addToCart, removeFromCart, decreaseQuantity, clearCart}