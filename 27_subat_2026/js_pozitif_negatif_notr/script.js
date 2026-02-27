//Kullanıcıdan bir sayı al. Bu sayının pozitif, negatif veya sıfır olduğunu bulan algoritmayı yaz.

let number = Number(prompt("Lütfen bir sayı giriniz: "))

if (number<0){
    alert(number + " negatiftir")
}
else if(number>0){
    alert(number + " pozitiftir")
}
else{
    alert(number + " nötr")
}