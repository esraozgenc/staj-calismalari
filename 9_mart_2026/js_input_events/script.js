//INPUT EVENTS

const todo = document.querySelector("#todoName")

function run(e){
    console.log(e.type)
}

//focus ve blur: input tıkladığımızda focus, inputtan çıktığımızda blur çalışır

todo.addEventListener("focus",run)
todo.addEventListener("blur",run)

//copy,paste,cut: eğer input içindeki değeri kopyalarsan, yapıştırırsan veya kesersen bu eventlar tetiklenir

todo.addEventListener("copy",run)
todo.addEventListener("paste",run)
todo.addEventListener("cut",run)

//select: input'un içindeki bir değeri sadece seçmen yeterlidir çalışması için

todo.addEventListener("select",run)


