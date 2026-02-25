//JavaScript'de dizilerde uygulanan metotlar

let rapper = ["Eminem", "NF", "Kendrick Lamar","Kanye West"]
console.log(rapper)
console.log("Rapper count: " + rapper.length)

//push metodu: son diziye yeni değer ekler
var rapperLength = rapper.push("Doja Cat")
console.log(rapper)
console.log("Rapper count: " + rapperLength)

//unshift metodu: ilk diziye yeni değer ekler
rapperLength = rapper.unshift("2Pac")
console.log(rapper)
console.log("Rapper count: " + rapperLength)

//pop metodu: son indeksteki değeri siler
var removedRapper = rapper.pop()
console.log(rapper)
console.log("Removed rapper: " + removedRapper)

//shift metodu: ilk indeksteki değeri siler
var removedRapper = rapper.shift()
console.log(rapper)
console.log("Removed rapper: " + removedRapper)

//splice metodu: istediğin indeksteki değeri silebilir veya istediğin indekse yeni değer ekleyebilirsin
rapper.splice(2,0,"Nicki Minaj") //hangi indeks,silinecek değer sayısı,yeni değer. Eğer ekleme yapıyorsak ortaya 0 yazıyoruz.
console.log(rapper)

rapper.splice(3,2) //3. indeksten başla, 3 ve 4. indeksi sil
console.log(rapper)

rapper.splice(2,1,"Kendrick Lamar") //2. indeksi sil yerine yeni değer ekle
console.log(rapper)
