let mesaj = `Migros'a hoşgeldiniz. Money Kartınız var mı?
            1-Evet
            2-Hayır`

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat :  30
    },
    {
        urunIsmi : "Tahıl gevrek",
        fiyat :  200
    },
    {
        urunIsmi : "Muz",
        fiyat :  90
    }
]

let sonuc = confirm(mesaj) //confirm ile true veya false döner
let odenecekTutar

if(sonuc){
    //Money kartı vardır
    let isim = prompt("Adınızı giriniz: ")
    let soyisim = prompt("Soyadınızı giriniz: ")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar = musteri.hesapla()

    alert(`Müşteri Bilgileri: ${musteri.isim} ${musteri.soyisim}
           Ödenecek Tutar: ${odenecekTutar}`)

}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla()
    alert(`Ödenecek Tutar: ${odenecekTutar}`)

}