export function cartCardHTML(item) {
  return `
    <div class="product-card cart-card">
      
      <img src="${item.image}" alt="${item.name}" class="product-image">

      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>

        <p class="product-price">${item.price} TL</p>

        <div class="cart-controls">
          <button data-id="${item.productId}" class="decrease">-</button>
          <span>${item.quantity}</span>
          <button data-id="${item.productId}" class="increase">+</button>
        </div>
      </div>

    </div>
  `
}