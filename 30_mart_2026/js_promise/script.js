//PROMISE
//Asenkron yapıları senkrona çevirmek için kullanıyoruz.
//CALLBACK'lerin alternatifi

let check = false
function createPromise(){
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("Promise'te herhangi bir sıkıntı yok")
        }else{
            reject("Sıkıntı büyük")
        }
    })
}

createPromise() //burada henüz fonksiyon çalışmadı. then ve catch ile promise'i yakalamamız gerek
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("Her zaman çalışır"))