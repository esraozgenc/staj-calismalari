function getUsers(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
                
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send()
    })
}
function getCommentsByUserID(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
                
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send()
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    console.log(data)
    console.log("Daha sonra farklı asenkron kodları çalıştırılabilir.")
    data.forEach(user => {
        console.log(user.name)
    });
})
.catch((err)=> console.log(err))
.finally(()=> console.log("Her zaman çalışır."))

//id'si 3 olan kullanıcının bilgilerini getir
getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data) => {
    console.log(data)
    })
.catch((err)=> console.log(err))
.finally(()=> console.log("Her zaman çalışır."))

//id'si 2 olan kullanıcının bilgilerini ve yorumlarını getir
getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data) => {
    console.log(data)
    return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((res)=>console.log(res)) //59. satırdaki return'un then işlemi. iç içe then kullanımına örnektir.
.catch((err)=> console.log(err))
.finally(()=> console.log("Her zaman çalışır."))

//Promise.all kavramı
const p1 = Promise.resolve("birinci promise başarılı")
const p2 = Promise.resolve("ikinci promise başarılı")
const p3 = new Promise((resolve,reject)=>{
    resolve("üçüncü promise başarılı")
})
const p4 = Promise.reject("Hata var")

Promise.all([p1,p2,p3])
.then((res)=>{//3 ü de resolve ise buraya girer
    //for(let value of res){
        console.log(value)
    //}
})
.catch((err)=>console.log(err))//bir tanesi bile reject ise buraya girer

