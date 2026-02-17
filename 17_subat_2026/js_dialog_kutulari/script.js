//DİALOG KUTULARI
//alert(),prompt(),confirm()
//bunların hepsi window seviyesindedir

//ALERT
alert("İşleminize devam etmeden önce kaydetmelisiniz!") //kullanıcıyı bilgilendirme veya uyarı verme amaçlı kullanılır.

//PROMPT
let isim = prompt("İsminizi Giriniz: ") //kullanıcıdan değer almak için kullanılır
let yas = prompt("Yaşınızı Giriniz: ") 
console.log("İsim: " + isim + " Yaş: " + yas )

//kullanıcının girdiği her değer string tipinde olur
console.log(typeof isim)
console.log(typeof yas) 

//CONFİRM
let sonuc = confirm("Silmek istediğinize emin misiniz?") //confirm boolean tipinde değer döndürür
console.log(sonuc)