//login
import { login } from "./userService.js"

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.querySelector("#loginEmail").value
    const password = document.querySelector("#loginPassword").value

    const result = await login(email, password)

    if (!result.success) {
        alert(result.message)
    } else {
        window.location.href = "/profile.html"
    }
})

//register
import { register } from "./userService.js"

document.querySelector("#registerForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const userData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        address: document.querySelector("#address").value,
        phone: document.querySelector("#phone").value
    }

    const result = await register(userData)

    if (!result.success) {
        alert(result.message)
    } else {
        alert("Kayıt başarılı")
        window.location.href = "/profile.html"
    }
})
