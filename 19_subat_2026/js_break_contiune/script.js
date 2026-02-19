let sayac = 0;
while(sayac<=10){
    sayac++
    if(sayac>10){
        break //sayac 10'dan büyük bir sayı olduğunda o kısımdan kodları kırdı ve döngüden çıktı.
    }
    if(sayac==8){
        continue // 1'den 10'a kadar sayıları yazdırdık ama burada continue kullandığımız için 
        // o koddan son süslü parantezden sonrasını okumadı ve döngüye devam etti. dolayısıyla 8 ekrana yazılmadı.
    }
    console.log(sayac)
}