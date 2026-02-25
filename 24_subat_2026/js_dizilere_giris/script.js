//DİZİLER

let sayilar = [1,2,3,4,6]
sayilar[sayilar.length-1] = "5" //son indeksteki değeri değiştirdik
console.log(sayilar[4])

console.log(sayilar[7]) //olmayan bir değeri çağırırsan tipi undefined olur.

let isimler = ["Esra","Beyza","Ahmet"]
isimler[2] = "Serap"
console.log(isimler)

let karisikDizi = [1,"Esra", false, undefined, "Beyza",null,7.5]
console.log(karisikDizi[6])

let tumDiziler = new Array(sayilar, isimler, karisikDizi, "esra") //new Array() ile nesne tanımlayarak dizi oluşturursun
console.log(tumDiziler[2])

console.log(typeof tumDiziler) //dizilerin tipi object veri tipindedir.