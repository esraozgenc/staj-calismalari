//Dom yapısında style özelliği

const todo = document.querySelectorAll(".list-group-item")[0]
const todoList = document.querySelector(".list-group")
const clearButton = document.querySelector("#todoClearButton")

console.log(todo)
todo.style.backgroundColor = "rgb(221, 132, 132)"
todo.style.color = "#fff"
todo.style.fontStyle = "italic"
todo.style.paddingLeft = "50px" 

todoList.style.marginTop = "30px"

clearButton.style.backgroundColor = "rgb(190, 48, 32)"
clearButton.style.borderRadius = "15px"
clearButton.style.padding = "15px"
clearButton.style.fontWeight = "500"