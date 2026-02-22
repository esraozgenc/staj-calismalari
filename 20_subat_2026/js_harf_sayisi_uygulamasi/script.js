//Harf sayısı uygulaması
let metin = "Mehmet Akif Ersoy Üniversitesi"

let harf = prompt("Metin: " + metin + " Harfi giriniz: ")
let sonuc = bul(harf) //return olmayan versiyonda silinir
alert("Harf sayısı: " + sonuc) //return olmayan versiyonda silinir

//bul("a")
//bul("e")

function bul(harf){
    let toplam = 0
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1
        }
    }
    return toplam //console.log("Harf sayısı: " +toplam) return yerine gecer
}

