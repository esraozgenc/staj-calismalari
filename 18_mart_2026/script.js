//TEMPLATE LİTERALS

//Eski yöntem + operatörü ile
console.log("----Artı operatörü ile----")
function write(firstName, lastName){
    console.log("İsim: " + firstName + ", Soyisim: " + lastName)
}

write("Esra", "Özgenç")

//Template Literals ile
console.log("----Template Literals----")
const write2 = (firstName,lastName)=>{
    //alt + numlock'tan 96 ya basarsan ` bu sembolü oluşturursun.
    console.log(`İsim: ${firstName}, 
Soyisim: ${lastName}`) }//alt alta yazarsan alta geçtiğini de algılar
write2("Esra","Özgenç")

console.log("--------------------------------")
//örnek
function getUserById(userId){
    console.log(`http://localhost:8080/users/${userId}`)
}
getUserById(10)
getUserById(5)