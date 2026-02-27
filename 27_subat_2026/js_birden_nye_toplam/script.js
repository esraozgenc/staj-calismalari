//Kullanıcıdan bir sayı al.1’den o sayıya kadar olan sayıların toplamını hesapla.

let number = Number(prompt("Lütfen bir sayı giriniz: "))
let toplam = 0 //Birikimli işlem yapılacaksa değişken döngü dışında tanımlanır.

for(i=1; i<=number; i++){
    toplam += i
}
alert("Toplam = " + toplam)