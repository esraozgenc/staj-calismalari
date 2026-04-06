const CART_KEY = "cart"

//localstorage'dan mevcut verileri alalım
function getCart(){
    let rawData = localStorage.getItem(CART_KEY)
    if(rawData===null){
        return []
    }else{
        return JSON.parse(rawData)
    }
}

//localstorage'a yeni veriyi kaydet
function saveCart(cart){
    let cartString = JSON.stringify(cart)
    localStorage.setItem(CART_KEY, cartString)
}

//sepete(cart'a) ürün ekler/günceller
function addToCart(productId){
    let cart = getCart()
    const existingItem = cart.find(item => item.productId === productId)
    if (existingItem){
        existingItem.quantity += 1
    } else{
        cart.push({productId, "quantity": 1})
    }
    saveCart(cart)
}