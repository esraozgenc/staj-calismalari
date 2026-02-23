//İkilik sistemden 10'luk sisteme çevirme uygulaması

let binary = "11010"

function convertBinaryToDecimal(binary){
    let toplam=0
    let ust=0
    
    for(let i=binary.length-1; i>=0; i--){
        if(Number(binary.charAt(i))!=0){ //0 yutan eleman olduğu için ve toplama eklememizin anlamı olmadığı için
            toplam+= Number(binary.charAt(i) * Math.pow(2,ust))
        }
        ust++
    }
    console.log("Sonuç: "+toplam)
}

convertBinaryToDecimal(binary)