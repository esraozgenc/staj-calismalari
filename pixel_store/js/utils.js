import { headerHTML } from "../components/header.js"
import { footerHTML } from "../components/footer.js"

document.querySelector("#header").innerHTML = headerHTML()
document.querySelector("#footer").innerHTML = footerHTML()