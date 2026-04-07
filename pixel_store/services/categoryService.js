async function getCategories() {
    try {
        const response = await fetch("../data/categories.json")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}

async function getCategoryById(id) {
    const category = await getCategories()
    return category.find(item => item.id === id) || null
    
}

async function getCategoryBySlug(slug) {
    const category = await getCategories()
    return category.find(item => item.slug === slug) || null
}