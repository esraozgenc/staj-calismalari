//map ---> key(anahtar), value(değer)
//mapler bir dizi türüdür. bana göre objedir.

const map1 = new Map()
console.log("----------MAP------------")
//Mapin içine değer koymak için SET metodunu kullanıyoruz. SET bir key, bir value değeri alır.
map1.set("07","Antalya")
map1.set("34","İstanbul")
map1.set("06","Ankara")
map1.set("42","Konya")
console.log(map1)

console.log("-----------GET-----------")
//GET metodu ile keye atanan value değerini yakalayabiliriz.
console.log(map1.get("06"))
console.log(map1.get("42")) //get değer dönderir o yüzden istersen bir değişkene atayabilirsin

console.log("----------SIZE------------")
//SIZE map'in içinde ne kadar değer var öğrenebiliriz
console.log("Map'in boyutu: ", map1.size)

console.log("---------DELETE-----------")
//DELETE key'i verirsin değeri siler. Boolean dönderir
console.log(map1.delete("34")) //mapte o key varsa true döner yoksa false
console.log(map1.delete("34")) 
console.log("Size: ", map1.size)

console.log("----------HAS------------")
//HAS: map şöyle bir değere sahip mi diye sorar
console.log("Ankara var mı?", map1.has("06"))
console.log("Burdur var mı?", map1.has("15"))

console.log("-----FOR OF ile MAP ÜZERİNDE DÖNME(DESTRUCTİNG İLE)-----")
//For Of ile map üzerinde dönebiliriz.
for(let [key,value] of map1){ //[key,value] kullanarak destructing yönetmini kullandık
    console.log(key,value)
    //zaten dizi şeklinde tanımlandığı için 1. sini key'e 2.sini value'ye ata diyoruz.
}
console.log("-----FOR OF ile MAP ÜZERİNDE DÖNME(DEĞER İLE)-----")

for(let value of map1){//destructing kullanmayınca değerler dizi halinde döner
    console.log(value)
}

console.log("-----MAP'I ARRAY'E ÇEVİRME(foreach key,value)-----")

const keys = Array.from(map1.keys())

keys.forEach((key)=>{
    console.log(key, map1.get(key))
})

console.log("-----FOR OF İLE KEY ÜZERİNDE DÖNME-----")
for(let key of map1.keys()){
    console.log(key)
}

console.log("-----FOR OF İLE VALUE ÜZERİNDE DÖNME-----")
for(let values of map1.values()){
    console.log(values)
}

console.log("-----ARRAY'İ MAP'E ÇEVİRME-----")
const array2 = [
    ["07","Antalya"],
    ["34","İstanbul"],
    ["06","Ankara"],
    ["42","Konya"]
]
const map2 = new Map(array2)
console.log(map2)


console.log("-----REFERANS TİPLİ DEĞER ÇAĞIRMA-----")
//map1.set([1,2,3],"Sayılar") //burada [1,2,3] ü almak istesek referans tip olduğu için undefined dönecek
//bu yüzden referans tipli bir key veya value varsa önce onu bir değişkene atamalı daha sonra map'e set etmeliyiz
let key = [1,2,3]
map1.set(key, "Array")
console.log(map1.get(key))
