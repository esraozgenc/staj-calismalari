//Bir dizideki en büyük sayıyı bul. Bu sayının dizide kaç kez tekrar ettiğini bul.

let numbers = [5,1,5,2,5,3,1,5]
max = numbers[0]

numbers.forEach(function(number){
    if(number>max){
        max = number
    }
});

count = 0
for(i=0; i<numbers.length; i++){
    if(max == numbers[i]){
        count++
    }
}

console.log("En büyük sayı: " + max + ", Tekarı: " + count)