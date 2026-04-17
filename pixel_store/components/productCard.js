export function productCardHTML(product){
    return `
    <div class= "product-card">
        <img src="${product.image}" alt = "${product.name}" class="product-image">

        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price} ₺</p>        
            <button class="add-to-cart" data-id="${product.id}">Sepete Ekle</button>
        </div>
    </div>
    `}