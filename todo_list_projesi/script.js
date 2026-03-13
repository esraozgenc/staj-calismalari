const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoName")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearButton = document.querySelector("#todoClearButton")
let todos = []

runEvents()

function runEvents(){
    form.addEventListener("submit",addTodo) //form'da submit butonuna basıldığında addTodo metodunu uygUIa
    document.addEventListener("DOMContentLoaded",pageLoaded) //sayfa yüklendiğinde local storage'dan verileri arayüze yazdırma işlemi
    secondCardBody.addEventListener("click", removeTodoToUI) //-todo silme işlemi
    clearButton.addEventListener("click",allTodosEverywhere) //tüm todoları temizle
}

function pageLoaded(){
    checkTodosFromStorage()
    todos.forEach(function(todo){
        addTodoToUI(todo)
    })
}

function allTodosEverywhere(){
    const todoListesi = document.querySelectorAll(".list-group-item") //-todolar li'nin içinde olduğu için tüm li'leri seçtik
    if(todoListesi.length>0){//eğer li varsa
        //Ekrandan silme
        todoListesi.forEach(function(todo){ //bu li elementlerinin üzerinde dön
            todo.remove() //li elementlerini sil
        })
        //Storage'dan silme
        todos=[] //-globaldeki todos'u boş diziye çevir
        localStorage.setItem("todos",JSON.stringify(todos)) //boş diziyi, dizi görünümde storage'a ekle
        showAlert("success","başarılı bir şekilde tüm todolar silindi")
    }else{
        showAlert("warning","Silmek için en az bir todo olmalıdır")
    }
}

function removeTodoToUI(e){//-todoyu silme işlemi
    
    if(e.target.className === "fa fa-remove"){ //i etiketine basarsa i'nin ananesi olan li'yi sil.
        //arayüzden silme
        const todo = e.target.parentElement.parentElement
        todo.remove()

        //storage'dan silme
        removeTodoToStorage(todo.textContent) //arayüzden silinen todo'nun text contentine uygulanacak metot
        showAlert("success", "Todo başarıyla silindi")
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage() //storage'da ki todoları aldık
    todos.forEach(function(todo,index){ //dizide tüm todo'nun hangi indeksi olduğunu ve tüm todo'yu dönderir
        if(removeTodo===todo){//arayüzden silinen todo, todosların içinde var ise(hem indeksini hem todo'yu verir bize)
            todos.splice(index,1)//Belirtilen indeksten başla(silinecek todo'nun indeksini aldık if ile) ve 1 tane elemanı sil
            //bir diziden eleman silmek için splice metodunu kullanıyoruz.
        } 
    })
    localStorage.setItem("todos",JSON.stringify(todos)) //güncel todos'u storage'a dizi görünümde ekledik.
}

function addTodo(e){
    const inputText = addInput.value.trim() //inputun içine yazılan değeri al ve kenarlarındaki fazla boşukları sil.

    if(inputText == null || inputText == ""){ //eğer inputun içine bir şey yazılmadıysa uyarı ver
        showAlert("warning", "Lütfen boş bırakmayınız!")
    }
    else{//inputun içine bir şey yazıldıysa arayüze ve local storage'a ekle
        addTodoToUI(inputText) //arayüze todo ekleme metodu
        addTodoToStorage(inputText) //local storage'a todo ekleme metodu
        showAlert("success", "Todo eklendi!")
    }

    e.preventDefaUIt() //submit butonunun varsayılan değerini engelle
}

function addTodoToUI(newTodo){ //arayüze ekleme metodu
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
    todoList.appendChild(li) //bu elementleri UI'nin içine yerleştir

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

function showAlert(type, message){//-todonun başarılı bir şekilde eklendiğini veya boş bırakıldığını gösteren uyarı
    /*//boostrap'den uyarı vermek için bir kalıp aldık. Bu örneğe göre bir div oluşturacağız.
    <div class="alert alert-warning" role="alert">This is a warning alert-check it out!</div>
    */
    const div = document.createElement("div")
    div.className = "alert alert-"+type //uyarının tipi(warning,succsess,danger) dinamik olması için bu şekilde tanımladık
    //div.className = `alert alert-${type}` //literal template ile de yazabilirsin ` (backtick) yaparken alt tuşuna basılı tut ve numlock'dan 96'ya bas.
    div.textContent = message //verilecek uyarının içindeki mesajı da dinamik yaptık

    firstCardBody.appendChild(div)

    setTimeout(function(){//belli bir süre sonra uyarının kalkmasını sağlamak için setTimeout kUIlandık
        div.remove()
    },3500)//3 buçuk saniye sonra kalkacak
}