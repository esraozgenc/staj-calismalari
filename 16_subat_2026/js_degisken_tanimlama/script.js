var full_name = "Esra Ozgenc"
console.log(full_name)

console.log(hata) //degisken daha sonra verildigi icin "var" turunde undefined yazar.
var hata = 789;

//console.log(hata2) //let turunde konsol ekranına hatayı yazdırır.
//let hata2 = 567;

let tel_no = "12345" //eger matematiksel bir islem yapmayacaksan sayıları tırnak icine alabilirsin
console.log(tel_no)

tel_no = "54321" // let turunde degisken degistirilebilir
console.log(tel_no)

tel_no = tel_no + "99" //tell_no degiskenine ekleme yaptık ama bu uzun yontem
//  += yaparak tel_no yazmadan direkt ekleme yapabiliriz.
tel_no += "0" + " Telefon numarası"; //birlestirme ve degiskenin icine ekleme islemi
console.log(tel_no)

const tc_kimlik = "123456789" //const tanımlarken bir deger atamak zorundayız yoksa hata verir. 
// Ayrıca const ile atanan degerler degistirilemez.
console.log(tc_kimlik)

console.log("İsim Soyisim: ", full_name, "Telefon numarası: ", tel_no)

console.error("Hata olustu") //kırmızı(hata) ile yazılmasını istiyorsak console.error() kullanabiliriz.
console.warn("Uyarı") //sarı(uyarı) ile yazılmasını istiyorsak console.warn() kullanabiliriz.

//var ile aynı isimde tanımlanmış birden fazla değişken tanımlayabilirsin
var sayi = 5;
var sayi = 10;
console.log(sayi)

//let ile aynı isimde tanımlanmış birden fazla değişken tanımlayamazsın.
// let rakam = 5;
//let rakam = 10;
//console.log(rakam)

const user = {username : "esra", password: "1234"} //obje tanımlama yaptık
//const user = {age:21} // bu şekilde değişkenin değerini değiştiremezsin

user.username = "esraozgenc"
//ancak objenin icindeki değişkenlerin değerini değiştirebilirsin.
console.log(user)