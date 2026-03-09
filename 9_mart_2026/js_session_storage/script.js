//Session Storage: Tarayıcıda verileri sekme açık kaldığı sürece geçici olarak saklayan web depolama alanıdır.
//Session Storage: Sekme kapatılınca veri silinir.
//Local Storage: Tarayıcı kapatılsa bile veri kalıcıdır.

//SESSION STORAGE

//Değer ekleme: Eklenen değer numeric girilse dahi string olarak döner.

sessionStorage.setItem("158","Esra")
sessionStorage.setItem("175","Beyza")
sessionStorage.setItem("173","Polad")
sessionStorage.setItem("168","Ahmet")

//Değer silme
sessionStorage.removeItem("158")

let value = sessionStorage.getItem("175") //getItem ile o key'in 'value' değerini alırız.
if(value ===null){
    console.log("Değer bulunamadı.")
}else{
    console.log("Değer bulundu: ",value)
}

//Session Storage'den hepsini silme
//sessionStorage.clear()

//Session Storage - Array Yazdırma

let names = ["Ali","Enes","Adem"] //bir array oluşturduk

//sessionStorage.setItem("names",names) //bu şekilde stringe benzer şekilde value değerleri gelir
sessionStorage.setItem("names",JSON.stringify(names)) //yine string olarak yazdı fakat array görünümde

let value2 = JSON.parse(sessionStorage.getItem("names")) //JSON parse kullanarak array'e çevirdik
console.log(value2)
value2.forEach(function(name){
    console.log(name)
})