//inputa girilen değer ne ise başlık da eş zamanlı olarak değişsin

const cardTitle = document.querySelectorAll(".card-title")[0] //2 tane card title olduğu için 1.sini seçtik
const input = document.querySelector("#todoName") //input girişini aldık

input.addEventListener("keyup",run)

function run(e){
    cardTitle.textContent = e.target.value //inputun html etiketini target ile çağırdık, ve içindeki değeri aldık
    //alınan değeri card title'ın text contentine atadık
}