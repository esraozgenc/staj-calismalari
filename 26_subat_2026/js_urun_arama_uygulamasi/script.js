//Ürün arama uygulaması
let urun1 = {//object oluşturduk. objectler süslü parantezlerle oluşturulur.
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6000
}

let urun2 = {
    isim: "ACER Nitro",
    kategori: "Teknoloji",
    fiyat: 15000
}

let urun3 = {
    isim: "ACER Gaming",
    kategori: "Teknoloji",
    fiyat: 14000
}

let urun4 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4000
}

let urun5 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4500
}

let urunler = [urun1,urun2,urun3,urun4,urun5]
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz: ")
let filtreliUrunler = []

filtreliUrunleriDoldur(urunler)
filtreliUrunlerYazdir(filtreliUrunler)

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){ 
            //0. indeksten başla, kullanıcının verdiği ürün ismini büyük harflere çevir, ürünün ismi urunler dizisinin isim elemanın içinde var mı(isim elemanları da büyük harfe çevrilmiş)
            filtreliUrunler.push(urun) //eğer varsa filtreliUrunler dizisine bu urunu ekle
        }
    })
}

function filtreliUrunlerYazdir(filtreliUrunler) {
    filtreliUrunler.forEach(function(urun){
        console.log("------------------------------------------")
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori)
        console.log("------------------------------------------")
    })
}