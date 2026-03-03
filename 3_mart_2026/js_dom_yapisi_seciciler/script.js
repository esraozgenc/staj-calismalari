//Seçiciler ile html etiketlerine ulaşma yolları
//classname, id, tagname

//getElementById: id'ye göre elementi yakalar

const button = document.getElementById("todoAddButton")

console.log(button)
console.log(button.id)
console.log(button.getAttribute("id")) // getAttribute buttonun özelliklerini verir. Örneğin id,type,class
console.log("------------------------------------")
console.log(button.className)
console.log(button.getAttribute("class"))
console.log("-------------------------------------")
const classListesi3 = button.classList[3]
console.log(classListesi3)

const classListesi = button.classList
console.log(classListesi)
console.log("---------------------------------------")
classListesi.forEach(function(className){
    console.log(className)
})
console.log("----------------------------------------")
let buttonText = button.textContent
console.log(buttonText)

//.innerHTML .textContent'den farkı içine "<b>Todo Ekleyin </b>" yazdığında <b> etiketini algılar ve yazıyı kalın yapar.
let buttonText2 = button.innerHTML
button.innerHTML = "<b>Todo Ekleyin</b>"
console.log(buttonText2)
console.log("-----------------------------------------")

//getElementByClassName: class'a göre elementi yakalar

const todoList = Array.from(document.getElementsByClassName("list-group-item"))
console.log(todoList)
console.log("-----------------------------------------")

todoList.forEach(function(todo){
    console.log(todo.textContent)    //console.log(todo.className) de yazılabilir
})
console.log("-----------------------------------------")

//getElementByTagName: element ismine göre yakalar

const forms = Array.from(document.getElementsByTagName("form"))//forEache de kullanabilmek için array'e çeviriyoruz 
console.log(forms)
console.log("-----------------------------------------")

console.log(forms[1])
console.log(forms[1].id)
console.log(forms[1].name)
console.log("-----------------------------------------")

forms.forEach(function(form){
    console.log(form)
})

console.log("-----------------------------------------")
const todoListTag = document.getElementsByTagName("li")
console.log(todoListTag)

console.log("-----------------------------------------")

//querySelector - querySelectorAll : css'de seçer gibi seçiyoruz

const clearButton = document.querySelector("#todoClearButton") //Tüm Todoları Temizleyin butonunu seçtik
console.log(clearButton)
console.log("-----------------------------------------")

const todoListQuery = document.querySelector(".list-group")//ul'nin class ismini girdik ve ul'yi seçtik
console.log(todoListQuery)
console.log("-----------------------------------------")

const todoListItem = document.querySelector(".list-group-item") //class birden fazla kez kullanılmışsa querySelectAll kullan. Yoksa sadece 1 classı getirir
console.log(todoListItem)//listenin elemanlarından 1. sini çağırdık
console.log("-----------------------------------------")

const todoListItemAll = document.querySelectorAll(".list-group-item")
console.log(todoListItemAll)//tüm liste elemanlarını çağırdık
console.log("-----------------------------------------")

console.log(todoListItemAll[2])//tüm liste elemanlarından 2. indeksteki elemanı çağırdık
console.log("-----------------------------------------")

console.log(todoListItemAll[todoListItemAll.length-1])//tüm listede sonuncu elemanı çağırdık
console.log("-----------------------------------------")

const list = document.querySelectorAll("li:last-child") //li elemanlarından son elemanı çağırır
console.log(list)

const list1 = document.querySelectorAll("li:first-child")//li elemanlarından ilk elemanı çağırır
console.log(list1)

const list2 = document.querySelectorAll("li:nth-child(2)")//li elemanlarından 2. elemanı çağırır
console.log(list2)

console.log("-----------------------------------------")

const odd = document.querySelectorAll("li:nth-child(odd)")//li elemanlarında tek sayılı olanları seçer
console.log(odd)

const even = Array.from(document.querySelectorAll("li:nth-child(even)"))//li elemanlarında çift sayılı olanları seçer
console.log(even)

even.forEach(function(li){
    li.style.backgroundColor = "lightgrey" //çift olan lilerin arkaplan rengini açık gri yaptık
})


