//Element Silmek

//? Todo 1'i ve Todo 4'ü silelim

//Yöntem 1:

const todoList = document.querySelector(".list-group") //ul'yi yani Todo 1'in olduğu listeyi aldık
const todo = todoList.children[0] //-Todo 1'i ul listesinin 0. indeksini çağırarak aldık 

//_ todo.remove()
//!-----------------------------------------------------------------------

//Yöntem 2: Listeden çağırarak silmek
const todos = document.querySelectorAll(".list-group-item") //ul'nin tüm ögelerini todos içinde aldık
console.log(todos) //bize liste olarak dönderdi ögeleri

//_ todos[0].remove() //-Todo 1'i sildik
//_ todos[1].remove() //-Todo 2'yi sildik. Todo 1 silinmiş olsa bile html üzerinden çağrıldığı için Todo 1'den sonraki ögelerin indeksi değişmez
//_ todos[todos.length-1].remove() // son Todo'yu sildik
//!------------------------------------------------------------------------

//Yöntem 3: Doğrudan elemanı çağırarak silmek
const todo1 = document.querySelector(".list-group-item") //-Todo 1'i aldık
//_ todo1.remove() //-Todo 1'i sildik

//!------------------------------------------------------------------------
//Yöntem 4: Parent üzerinden çağırarak silmek
let todoFirst = todos[0] //li'lerin içinden 0. indeksi aldık
todoList.removeChild(todoFirst) //Ul'nin çocuğunu silmesi için komut verdik. ve yukarıda atadığımız değişkenle 0. indeksine ulaştık.
//_ todoList.removeChild(todos[0]) //- Todo 1'i sildik

// let todoLast = todos[todos.length-1]
//_ todoList.removeChild(todoLast) //son Todo'yu 

todoList.removeChild(todoList.lastElementChild) //son Todo'yu sildik
