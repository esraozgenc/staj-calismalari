//Palindrome kelime: tersten okunduğunda yine aynı kelimeyse palindrome'dur.

let kelimeniz = prompt("Kelimenizi giriniz: ")

palindrome(kelimeniz)

function palindrome(kelime){
    kelime = kelime.toLowerCase()
    let son_indeks = kelime.length - 1
    let ilk_indeks = 0
    while(ilk_indeks < son_indeks){
        if(kelime.charAt(son_indeks) != kelime.charAt(ilk_indeks)){
            alert("Palindrome değildir")
            return
        }
        son_indeks--
        ilk_indeks++
    }
    alert("Palindrome kelimedir")
}

