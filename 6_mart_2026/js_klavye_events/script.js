//KLAVYE EVENTLARI

//keypress: harf ve sayılarda tetiklenen event.
//document.addEventListener("keypress",run)


//keydown: harf ve sayılar ile birlikte capslock, yön tuşları shift gibi tüm tuşlarda da tetiklenir. Tuşa bastığımızda çalışır.
//document.addEventListener("keydown",run)

//keyup: tuştan elini kaldırdığında çalışan eventtır. Tüm tuşlarda çalışır. f
document.addEventListener("keyup",run)

function run(e){
    console.log(e.key) //key özelliği döküman üzerinde basılan karakterleri verir
    console.log(e.keyCode) //karakterin ascii tablosundaki değerini verir. keyCode yerine which kullanabilirsin
}

