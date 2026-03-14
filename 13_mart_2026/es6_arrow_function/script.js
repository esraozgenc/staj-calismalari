//normalde fonksiyon tanımlarken şu şekilde tanımlıyoruz
function yazdir(){
    console.log("Function")
}

yazdir()

//Arrow Function: Dikkat edilmesi gereken konu; arrow functionlar, bir değişkene atanır ve ancak o şekilde çağırılabilir.
//parametresiz
const yazdir2 = ()=>{
    console.log("Arrow Function")
}

yazdir2()

//parametreli
const yazdir3 = (firstName,lastName)=>{
    console.log("Merhaba",firstName,lastName)
}

yazdir3("Esra","Özgenç")

//eğer arrow fonksiyonumuz tek satırlık bir koddan oluşuyorsa süslü parantez kullanmana gerek kalmaz.
const yazdir4 = (number,school)=>console.log("Numara: ", number,",", "Okul: ", school)
yazdir4("220","MAKÜ")

//eğer arrow fonksiyonumuz tek parametreden oluşuyorsa oval parantezleri silebilirsin
const yazdir5 = age=>console.log("Yaş: ",age)
yazdir5("22")

//küp almak için bir arrow fonksiyonu oluşturalım
const kupAl = (x)=>{
    return x*x*x
}

console.log("Sayının küpü: ", kupAl(5))

//eğer tek satırlık bir işlem yapıyorsak ve return kullanıyorsak return'u de kaldırabiliriz
const kareAl = x=>x*x

console.log("Sayının karesi: ", kareAl(5)) 
