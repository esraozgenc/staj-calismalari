//DİZİLERDE DÖNGÜ KULLANIMI

//forEach ile
let sehirler = ["Konya","Antalya","Bursa","Eskişehir","Ankara"]
sehirler.forEach(function(sehir){
    console.log(sehir)
})

console.log("-----------------------------")

//for ile
let yemekler = ["Etliekmek","Mantı","İskender","Yağlama","Lahmacun"]
for(let i=0; i<yemekler.length; i++){//dizilerde i her zaman 0'dan başlar. //koşul kısmında <= kullanırsan öyle bir indeks olmadığı için hata alırsın
    console.log(yemekler[i])
}

console.log("-----------------------------")

//while ile
let bilgisayarlar = ["ASUS","HP","MIS","DELL","CASPER","MONSTER"]
sayac = 0
while(sayac<bilgisayarlar.length){
    console.log(bilgisayarlar[sayac])
    sayac++
}