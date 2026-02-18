//JavaScript ile beden kitle indexi hesaplama

let kilo = Number(prompt("Lütfen kilonuzu giriniz: "))
let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz: "))

sonuc = kilo/(boy**2)

if (sonuc<18.5){
    console.log("İdeal kilonun altındasınız. Sonuç: " + sonuc)
}
else if (sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kilodasınız. Sonuç: " + sonuc)
}
else if (sonuc>=25 && sonuc<=29.9){
    console.log("İdeal kilonun üstündesiniz. Sonuç: " + sonuc)
}
else if (sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstündesiniz(obez). Sonuç: " + sonuc)
}
else if(sonuc>40){
    console.log("İdeal kilonun çok üstündesiniz(morbid obez). Sonuç: " + sonuc)
}