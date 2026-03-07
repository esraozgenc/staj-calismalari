//MOUSE EVENTS

//DOMContentLoaded ve load: sayfa açıldığında yapılmasını istediğimiz işlemi yapar

document.addEventListener("DOMContentLoaded",run) //HTML hazır 

function run(){
    alert("DOMContentLoaded ile Sayfa Yüklendi")
}

window.addEventListener("load",run2) //Sayfadaki her şey hazır

function run2(){
    alert("load ile Sayfa Yüklendi")
}

//click: seçilen elemana tıklandığında yapılacak işlemi gerçekleştirir

const cardTitle = document.querySelectorAll(".card-title")[1]

cardTitle.addEventListener("click",run3)

function run3(e){
    console.log(e.type)
}

const cardTitle1 = document.querySelectorAll(".card-title")[0]

cardTitle1.addEventListener("dblclick",run3) //seçilen elemana 2 kez tıklanması gerekir

//mouseover: seçilen elementin üzerine ve içindeki elementlerin üzerine geldiğinde mouseover eventı tetiklenir
const cardBody = document.querySelectorAll(".card-body")[1]

cardBody.addEventListener("mouseover",run3)

//mouseout: tam tersi seçilen elementin üzerinden ve içindeki elementlerden dışarı çıkıldığında tetiklenir
const cardBody1 = document.querySelectorAll(".card-body")[0]

cardBody1.addEventListener("mouseout",run3) 

//mouseenter: seçilen elementin üzerine gelindiğinde tetiklenir, içindeki elementler tetikleyemez

cardBody.addEventListener("mouseenter",run3)

//mouseleave: seçilen elementin dışına çıkıldığında tetiklenir, içindeki elementler tetiklenmez

cardBody1.addEventListener("mouseleave",run3)


