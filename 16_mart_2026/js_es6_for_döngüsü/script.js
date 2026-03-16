//For in(indeksi verir) - For of(değeri verir) Döngüleri

let names = ["Esra","Beyza","Yasemin","Serap"]

console.log("-------For Each---------")
//For Each ile döngü

names.forEach(name=>console.log(name))

console.log("---------For in----------")
//For in ile hem indeksi hem değeri alalım
//değişkenTanımlama, in, diziİsmi
for(let name in names){
    console.log(name, names[name])
}

console.log("----------For of---------")
//For of ile hem değeri hem indeksi alma
for(let isim of names){
    console.log(isim, names.indexOf(isim))
}

