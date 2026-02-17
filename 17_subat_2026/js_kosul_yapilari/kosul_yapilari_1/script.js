//KOŞUL YAPILARI
//ehliyet alma koşulunu hesaplama

let yas = Number(prompt("Yaşınız: ")) //girilen veriler her zaman string tipinde olduğu için onları number tipine dönüştürdük.
let para = Number(prompt("Paranız: "))
console.log(typeof yas + typeof para)

if(yas>=18 && para>=3000){
    alert("Ehliyet sınavına katılabilirsiniz")
}
else{
    alert("Ehliyet sınavına katılamazsınız")
}