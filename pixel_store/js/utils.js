import { headerHTML } from "../components/header.js"
import { footerHTML } from "../components/footer.js"

document.querySelector("#header").innerHTML = headerHTML()
document.querySelector("#footer").innerHTML = footerHTML()

document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.getElementById("profileIcon")

    if (profileIcon) {
        profileIcon.addEventListener("click", () => {
            window.location.href = "/pixel_store/pages/profile.html"
        })
    }

document.addEventListener("keypress", (e) => {
    if (e.target.classList.contains("search-input") && e.key === "Enter") {
        const query = e.target.value.trim()
        if (query) {
            window.location.href = `/pixel_store/pages/category.html?search=${encodeURIComponent(query)}`
        }
    }
})
})