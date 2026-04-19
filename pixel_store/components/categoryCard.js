export function categoryCardHTML(category){
    return `
    <a href="./pages/category.html?category=${category.id}" class="category-card-a">
        <div class= "category-card">
            <img src="${category.image}" alt = "${category.name}" class="category-image">
            <h3 class="category-title">${category.name}</h3>
        </div>
    </a>
`}