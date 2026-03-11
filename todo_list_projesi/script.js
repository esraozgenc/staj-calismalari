const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoName")
const todoList = document.querySelector(".list-group")

let todos = []

runEvents()

function runEvents(){
    form.addEventListener("submit",addTodo) //form'da submit butonuna basıldığında addTodo metodunu uygula
}

function addTodo(e){
    const inputText = addInput.value.trim() //inputun içine yazılan değeri al ve kenarlarındaki fazla boşukları sil.

    if(inputText == null || inputText == ""){ //eğer inputun içine bir şey yazılmadıysa uyarı ver
        alert ("Lütfen bir todo giriniz!")
    }
    else{//inputun içine bir şey yazıldıysa arayüze ve local storage'a ekle
        addTodoToUl(inputText) //arayüze todo ekleme metodu
        addTodoToStorage(inputText) //local storage'a todo ekleme metodu
    }

    e.preventDefault() //submit butonunun varsayılan değerini engelle
}

function addTodoToUl(newTodo){ //arayüze ekleme metodu
    const li = document.createElement("li") //inputa bir değer girildiğinde li elementi oluştur ve attribute oluştur
    li.className = "list-group-item d-flex justify-content-between"
    li.textContent = newTodo //inputa yazılan değeri li'nin text contenti yap

    const a = document.createElement("a") //a elementi oluştur
    a.href = "#"
    a.className = "delete-item"

    const i = document.createElement("i") //i elementi oluştur
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)
    todoList.appendChild(li) //bu elementleri ul'nin içine yerleştir

    addInput.value = "" //butona basıldıktan sonra inputun içindeki yazıyı temizle
}

function addTodoToStorage(newTodo){//local storage'a ekleme metodu
    checkTodosFromStorage() //-todos elementinin boş olup olmadığını kontrol et
    todos.push(newTodo) //inputa yazılan değeri todos'un içine ekle
    localStorage.setItem("todos", JSON.stringify(todos)) //local storage'a güncel todos'u stringfy ile array görünümünde ekle
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos")==null) //-todos diye bir key yoksa todos boş dizi olarak kalsın 
        todos = []
    else{
        todos = JSON.parse(localStorage.getItem("todos")) //-todos diye bir key varsa array olarak todos'a ekle
    }
}