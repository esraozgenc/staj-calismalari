const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoName")
const todoList = document.querySelector(".list-group")

runEvents()

function runEvents(){
    form.addEventListener("submit",addTodo)
}

function addTodo(e){
    const inputText = addInput.value.trim()
    if(inputText == null || inputText == ""){
        alert ("Lütfen bir todo giriniz!")
    }
    else{
        addTodoUl(inputText)
    }

    e.preventDefault()
}

function addTodoUl(newTodo){
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between"
    li.textContent = newTodo

    const a = document.createElement("a")
    a.href = "#"
    a.className = "delete-item"

    const i = document.createElement("i")
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)
    todoList.appendChild(li)

    addInput.value = ""
}