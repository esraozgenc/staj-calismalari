//HTML elementleri üzerinde gezinme

let todo = document.querySelector(".list-group-item")
const todoList = document.querySelector(".list-group")
const card = document.querySelector(".card")

//Anneden çocuklara erişmek
console.log(todoList)
console.log(todoList.children)
console.log(todoList.children[1])
console.log(todoList.children[todoList.children.length-1])
console.log("-------------------------------------")

console.log(todoList.children[3].textContent = "Değişti") //ul elemanlarından 3. indeksteki li elemanının text contextini değiştirdik
console.log("-------------------------------------")

todoListArray = Array.from(todoList.children)

todoListArray.forEach(function(todo){
    console.log(todo.textContent)
})
console.log("-------------------------------------")

//Çocuktan anneye erişmek

console.log(todo) //li
console.log(todo.parentElement) //ul
console.log(todo.parentElement.parentElement) //ananesini aldık //cardbody
console.log("-------------------------------------")

let li = todo
let ul = li.parentElement
let cardBody = ul.parentElement
let cardElement = cardBody.parentElement
let row = cardElement.parentElement
let container = row.parentElement

console.log(li)
console.log(ul)
console.log(cardBody)
console.log(cardElement)
console.log(row)
console.log(container)
console.log("-------------------------------------")

//Kardeşler arasında gezinmek
//ileri

console.log(todo.nextElementSibling.nextElementSibling) //2. indeksteki todoya ulaştık çünkü 2 kez nextElementSiblings kullandık
console.log("-------------------------------------")

let todoTwo = todo.nextElementSibling.nextElementSibling
let empty = todoTwo.nextElementSibling.nextElementSibling

console.log(empty) //null değeri geldi çünkü 3. indeksten sonra başka eleman yok
console.log("-------------------------------------")

//geri

let lastChild = document.querySelector(".list-group-item:nth-child(4)")
console.log(lastChild)

console.log(lastChild.previousElementSibling) //bir önceki kardeş elemana ulaştık yani todo 3
console.log("-------------------------------------")

//row'dan title'a

let title = row.children[0].children[3].children[0].textContent = "Todo Listesindeki Başlığı Değiştir"
console.log(title)
console.log("-------------------------------------")

//container'dan todo 3'ün özelliklerini değiştir.

let todo3 = container.children[0].children[0].children[2].nextElementSibling.children[2].children[2]
todo3.style.backgroundColor = "rgb(163, 196, 244)"
todo3.style.color = "#a60909"
todo3.style.fontStyle = "italic"
console.log(todo3)