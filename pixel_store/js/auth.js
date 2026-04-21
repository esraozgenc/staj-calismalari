import { login, register } from "../services/userService.js"

//login
document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.querySelector("#loginEmail").value
    const password = document.querySelector("#loginPassword").value

    const result = await login(email, password)

    if (!result.success) {
        alert(result.message)
    } else {
        window.location.href = "/pixel_store/pages/profile.html"
    }
})

//register
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
        window.location.href = "/pixel_store/pages/profile.html"
    }
})

//event
const showLogin = document.querySelector("#showLogin")
const showRegister = document.querySelector("#showRegister")
const loginForm = document.querySelector("#loginForm")
const registerForm = document.querySelector("#registerForm")

showLogin.addEventListener("click", () => {
    loginForm.classList.remove("hidden")
    registerForm.classList.add("hidden")
    showLogin.classList.add("active")
    showRegister.classList.remove("active")
})

showRegister.addEventListener("click", () => {
    registerForm.classList.remove("hidden")
    loginForm.classList.add("hidden")
    showRegister.classList.add("active")
    showLogin.classList.remove("active")
})