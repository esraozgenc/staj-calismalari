let sayi = Number(prompt("Lütfen bir sayi giriniz: "))
let sonuc = true
for(let i=2; i<= Math.floor(sayi/2); i++){ //Math.floor, sayı bölündükten sonra sonuç virgülle gelirse, virgülü atıyor kökteki sayıyı yazıyor.
    if(sayi%i==0){
        sonuc=false
        break
    }
}
if(sonuc){
    alert(sayi + " asaldır.")
}
else{
    alert(sayi + " asal değildir.")
}