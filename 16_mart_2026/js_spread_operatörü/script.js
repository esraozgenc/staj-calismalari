//Spread(dilimleme) Operatörü ...

let numbers = [10,20,30,40]

function add(a,b,c,d){
    console.log(a+b+c+d)
}

//Dizinin 1.indeksi a'ya, 2. indeksi b'ye gelsin vs.

//Eski yöntem
add(numbers[0],numbers[1],numbers[2],numbers[3])

//Yeni yöntem Spread ile
add(...numbers)//bir metotta eşit sayıda parametre varsa kullanabilirsin


const diller1 = ["java","C#"]
let diller2 = ["php","python"]
console.log(diller2)

//diller1'i diller 2'ye nasıl koyarız? yani 2 diziyi birbirine nasıl bağlarız?

//eski yöntem ile
diller2 = ["php","python",diller1[0],diller1[1]]
console.log(diller2)

//spread ile
diller2 = ["php","python",...diller1]
console.log(diller2)

//örnek
const sayilar = [1,2,3,4,5,6,7,8]

let [a,b, ...kalanSayilar] = sayilar //destructing yöntemini de kullanmış olduk

console.log(a,b,kalanSayilar)

//bir diziyi başka bir diziye kopyalamak istediğinde spread kullanabilirsin

const array1 = ["Esra","Serap","Beyza","Kardelen"]
let array2 = []

//eski yöntem
array2[0] = array1[0]
array2[1] = array1[1]
array2[2] = array1[2]
array2[3] = array1[3]

console.log(array2)

//spread ile
array2 = [...array1] //direkt array1 diye yazarsan array1 diye dönüyor ama böyle yapınca açık açık içindeki değerleri görebiliyoruz
console.log(array2)

//kısaca ...array1 ile array1[0], array1[1], array1[2], array1[3] aynı kapıya çıkar.