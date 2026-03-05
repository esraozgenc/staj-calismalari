//Elementleri Değiştirmek

//-Todo Listesi başlığını h2 etiketi ile değiştirerek büyütelim

const cardBody = document.querySelectorAll(".card-body")[1] //1. indeksteki card-body'yi aldık

/*GUNCEL BAŞLIK KODU
<h5 class="card-title">Todo Listesi</h5>
*/

const newTitle = document.createElement("h2")
newTitle.className = "card-title"
newTitle.textContent = "Todo Listesi - Yeni"
newTitle.style.color = "Red"

cardBody.replaceChild(newTitle, cardBody.childNodes[1]) //değiştirlecek etiketi node tipinde istediği için childNodes kullandık.
