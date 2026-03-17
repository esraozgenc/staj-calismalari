//SET: Map ile benzer yapıdadır, tek fark her bir değer yalnızca 1 kez tutulabilir.
//key ve value yok yalnızca tek değer tanımlanabiliyor

const set = new Set()

//ADD

set.add(true)
set.add(3.14)
set.add("Esra")
set.add("Esra")
set.add("Esra")
set.add(7)
set.add({username:"esra", password:"123"})
set.add([1,2,3])

//size
console.log(set.size) //örneğin "Esra" değerinden 3 tane olmasına rağmen 1 tane varmış gibi gösteriyor.

//delete
set.delete(true)
console.log(set.size)
//referans tiplerini silerken bir değere atayıp o değeri silmelisin


//has
console.log(set.has("Esra"))
console.log(set.has("Ayşe"))
//referans tiplerinde has kullanırken bir değere atayıp o değeri has ile kullanmalısın

//for of döngüsü
console.log("---FOR OF-----")
for(let value of set){
    console.log(value)
}

//array'e dönüştürme ve foreach ile dönme
console.log("---FOR EACH---")
const values = Array.from(set)
values.forEach(value=>console.log(value))

//set'e dönüştürme
console.log("---SETE DÖNÜŞTÜRME---")

let array = [1,"Esra",true,["15,20,30"]]
const newSet = new Set(array)
console.log(newSet)
