//Event
//addEventListener()

const clearButton =  document.querySelector("#todoClearButton")

clearButton.addEventListener("click", changeTitle) //butona tıklandığında changeTitle isimli fonksiyonu çalıştır.

/*butona tıklandığında başlık değişir
function changeTitle(){
    document.querySelectorAll('.card-title')[1].textContent = "Todo Başlığını Değiştir"
}
*/

function changeTitle(e){
console.log(e.type) //click dönderir
console.log(e.target) //bulunduğu html etiketini verir target
console.log(e.target.textContent) //bulunduğu html etiketinin text contentini verir
console.log(e.target.className) //bulunduğu html etiketinin classını verir target
}