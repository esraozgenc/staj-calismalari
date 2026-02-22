//Mükemmel Sayı Uygulaması
//6,28,496 gibi

//6 sayısının bölenleri = 1,2,3,6
//6 sayısının bölenlerinin toplamı = 12 
//6'nın 2 katı = 6 sayısının bölenlerinin toplamı


//28 sayısının bölenleri = 1,2,4,7,14,28
//28 sayısının bölenlerinin toplamı = 56
//28'in 2 katı = 28 sayısının bölenlerinin toplamı

isPerfectNumber(6)

function isPerfectNumber(number){
    let toplam = 0
    for(let i=2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number

    if(toplam==number*2){
        console.log(number + " mükemmel sayıdır")
    }
    else{
        console.log(number + " mükemmel sayı değildir.")
    }
}