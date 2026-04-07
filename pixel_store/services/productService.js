//Tüm ürünleri getir
async function getAllProducts(){
    try {
        const response = await fetch("/pixel_store/data/products.json")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}

//Bir ürünü ID ile getir
async function getProductById(productId){
    const product = await getAllProducts()
    return product.find(item => item.id === productId) || null
}

//Kategorideki ürünleri getir
async function getProductsByCategory(categoryId) {
    const products = await getAllProducts()
    return products.filter(item => item.categoryId === categoryId)
}

export {getAllProducts, getProductById, getProductsByCategory}