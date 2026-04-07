function productCardHTML(product){
    return `
    <div class= "product-card">
        <img src="${product.image}" alt = "${product.name}">
        <h3 class="title">${product.name}</h3>
        <p class="product-price">${product.price} TL</p>
        <button class="add-to-cart" data-id="${product.id}">Sepete Ekle</button>
    </div>
    `}

const container = document.querySelector("#product-card")
products.forEach(product => {container.innerHTML += productCardHTML(product)});