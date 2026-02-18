//Çoklu if yapısı

//if else: 2 seçenek varsa kullanılır.
//if else if else: 2'den fazla seçenek varsa kullanılır.
//if if if: her bir koşulun ayrı ayrı çalışması demektir. Bir koşula bakıyorsa diğerine de bakmak zorundadır.
//          her biri ayrı bir koşuldur. her birini de ayrı ayrı değerlendirir.

//Koşullar: ad boş geçilemez, tckn 11 haneli olmak zorundadır
let ad = prompt("Lütfen isminizi giriniz: ")
let tckn = prompt("Lütfen tckn giriniz: ")

//kontrolEt1(ad,tckn)
kontrolEt2(ad,tckn)

//yöntem-1: if else if else ile
function kontrolEt1(ad, tckn){
    if(ad!=""){
        if(tckn.length==11){
            console.log("Ad ve Tckn dogru girilmistir")
        }
        else{
            console.log("Lutfen 11 haneli giriniz")
        }
    }
    else{
        console.log("Lütfen isim alanını bos bırakmayın")
    }
    
}

//yöntem-2: if if if ile
function kontrolEt2(ad,tckn){
    if(ad==""){
        console.log("Lütden isminizi boş bırakmayın")
        return;
    }
    if(tckn.length!=11){
        console.log("Lütfen tckn 11 haneli girin")
        return;
    }
     console.log("İsim ve tckn basarili")

}