//Kullanıcıdan bir kelime al. Bu kelimenin palindrome (tersten okunuşu da aynı) olup olmadığını kontrol et.

let kelime = prompt("Lütfen bir kelime giriniz: ")

let i = 0
let j = kelime.length-1

while(i<j){
    if(kelime.charAt(i) !== kelime.charAt(j)){
        alert("palindrome değil")
        break
    }
    else{
        i++
        j--
    }
}
alert("palindrome")


