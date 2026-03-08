//f5 tuşuna basıldığında sayfa yenilemeyi engelle

document.addEventListener("keydown",run)

function run(e){
    console.log(e.keyCode)
    if(e.keyCode === 116){// 116 f5'in ascii karşılığı
        alert("Sayfa yenileme engellendi.")
    }

    e.preventDefault()//varsayılan eylemin gerçekleşmemesini sağlar
}