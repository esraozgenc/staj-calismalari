//Local Stroage: Tarayıcıda verileri tarayıcı kapatılsa bile silinmeyen şekilde kalıcı olarak saklayan web depolama alanıdır.

//Değer ekleme

localStorage.setItem("kitap","yazar")
localStorage.setItem("Dava","Franz Kafka")
localStorage.setItem("Devlet","Plüton")
localStorage.setItem("Kürk Mantolu Madonna","Sabahattin Ali")

//Değer alma
let yazar = localStorage.getItem("Dava")
console.log(yazar)

//Değer silme
localStorage.removeItem("kitap")
//session storage'de kodu silince veritabanından siliniyordu 
//fakat local storage'de removeItem kullanılmazsa kod silinse bile veritabanında kayıtlı

//Tüm değerleri temizleme
//localStorage.clear()

//Array
let yazarlar = ["Franz Kafka","Plüton","Sabahattin Ali"]

localStorage.setItem("yazarlar",JSON.stringify(yazarlar))
console.log(yazarlar)
let value = JSON.parse(localStorage.getItem("yazarlar"))
value.forEach(function(yazar){
    console.log(yazar)
})