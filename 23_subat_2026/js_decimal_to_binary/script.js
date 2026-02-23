//10'luk sistemi(decimal) 2'lik sisteme(binary) çevirme uygulaması

convertDecimalToBinary(10)

function convertDecimalToBinary(number){
    let binary = ""
    while(true){
        binary+=(number%2).toString() //+"" stringe çeviriyor
        number=Math.floor(number/2)
        if(number==1){ //Sayımız 1 e düşünce artık bölmemize gerek yok döngüden çıkacağız.
            binary+=1 
            break;
        }
    }
    let result = reverse(binary)
    console.log("Sonuç: " + result)
}

function reverse(binary){
    let reverseBinary = ""
    for(let i=binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i)
    }
    return reverseBinary
}