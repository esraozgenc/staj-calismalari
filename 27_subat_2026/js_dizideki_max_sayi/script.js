//Verilen dizideki en büyük sayıyı bul

let numbers = [5, 12, 3, 21, 8]
let max = numbers[0]

numbers.forEach(function(number){
    if(number>max){
        max = number
    }
});
console.log("En büyük sayı " +max) //sadece en büyük sayıyı görmek istiyorsan döngü dışında yaz, tüm sayıları görmek istiyorsan döngünün içine