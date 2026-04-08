export function categoryCardHTML(category){
    return `
    <div class= "category-card" data-slug="${category.slug}">
        <img src="${category.image}" alt = "${category.name}" class="category-image">
        <h3 class="category-title">${category.name}</h3>
    </div>
    `}