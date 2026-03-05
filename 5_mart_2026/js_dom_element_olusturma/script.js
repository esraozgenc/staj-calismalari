//Dinamik olarak element oluşturmak

//Tüm Todoları Temizle butonunun yanına Youtube'a giden linki ekle
const link = document.createElement("a")
link.id = "goYoutube"
link.className = "btn btn-dark btn-sm mt-3"
link.href = "https://www.youtube.com/"
link.target = "_blank"
link.innerHTML = "Youtube"

const cardBody = document.querySelectorAll(".card-body")[1] //2 tane card-body classı vardı. 2. sini çağırdık. Çünkü butonu 2. sinin sonuna ekleyeceğiz.
cardBody.appendChild(link) //card-body'nin son indeksine linki ekle dedik

//Ul etiketinin içine Todo 5'i ekle

/* ORNEK LI YAPISI
<li class="list-group-item d-flex justify-content-between">Todo 4
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li>
*/
const todo = document.createElement("li")
const todoLink = document.createElement("a")
const ikon = document.createElement("i")

todo.className = "list-group-item d-flex justify-content-between"
todo.innerHTML = "Todo 5"
todoLink.href = "#"
todoLink.className = "delete-item"
ikon.className = "fa fa-remove"

const ul = document.querySelector(".list-group")
console.log(ul)

todoLink.appendChild(ikon)
todo.appendChild(todoLink)
ul.appendChild(todo)

