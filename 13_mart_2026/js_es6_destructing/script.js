//eskiden bir dizi içindeki değerleri yan yana string tipinde yazdırmak için şunu kullanabilirdik
const fruits = ["Banana","Orange","Apple","Mango"]
let banana = fruits[0]
let orange = fruits[1]
let apple = fruits[2]
let mango = fruits[3]
console.log(banana,orange,apple,mango)

//Destructing yöntemi: nesnelerden veya dizilerden değerleri ayrı değişkenlere ayıklamanıza olanak tanıyan bir özelliktir.
//dizilerde
const langs = ["HTML","C","JavaScript"]
let [HTML,C,JavaScript] = langs
console.log(HTML,C,JavaScript)

//Bir fonksiyon dizi döndürdüğünde yapı bozma (destructuring) oldukça kullanışlıdır:
const dateInfo = dat=> {
    const d = dat.getDate()
    const m = dat.getMonth()
    const y = dat.getFullYear()

    return [d, m, y]
}
const [date, month, year] = dateInfo(new Date())
console.log("Tarih: ", date,month,year)

//Nesnelerden değerleri çıkarmak için yapı bozma (destructuring) yöntemini kullanabilirsiniz:
const person = {
    firstName: "Esra",
    lastName: "Özgenç",
    school: "MAKÜ"
}
let {firstName:isim,lastName,school} = person; //verecğim isimler objenin keyleriyle aynı olmak zorunda veya firstName: isim şeklinde tanımlaman gerek ve isim diye çağırmak zorundasın
console.log(isim,lastName,school)