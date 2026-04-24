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
})