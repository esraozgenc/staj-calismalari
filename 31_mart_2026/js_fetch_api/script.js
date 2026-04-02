//FETCH API
//fetch apı bize promise döner. Fakat response tipinde promise döner. 
//Bu yüzden içindeki veriyi alabilmek için, dönen response'u JSON'a dönüştürmemiz gerekir. 
// Json'da bize promise döndüğü için tekrar then kullanmamız gerekir. Bundan dolayı da 2 kez then kullanırız.

//yerel dosya ile kullanımı
function getStudents(url){
    fetch(url)
        .then((response) => response.json()) //response'u json'a dönüştürdük.
        .then((data) => console.log(data)) //JSON ile gelen verilerimizi yakaladık
        .catch((err) => console.log(err))
}

getStudents("student.json")


//rest api ile kullanımı
function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err=> console.log(err)))
}

getData("https://jsonplaceholder.typicode.com/albums")

//Bir veriyi post etmek için fetch api'yi şu şekilde kullanabilirsin
//Şu an bizim bir rest apimiz olmadığı için POST işlemi yapamıyoruz

function saveStudents(){
    fetch("https://jsonplaceholder.typicode.com/users", { //post edilecek adres
        method: "POST", //post işlemini gerçekleştiren metot
        headers: {"Content-Type" : "application/json"}, //verilerin json tipinde gideceğini gösteren ibare
        body: JSON.stringify({ //gönderilecek verilerin olduğu kısım
            "id" : 5,
            "firstname" : "Zeynep",
            "lastname" : "Melsa"
        })
        //then ve catch işlemleri
    })

}