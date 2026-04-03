//ASYNC AWAIT
//Promise then zincirine çözümdür.
//bir fonksiyonun başına async yazarsan çıktı promise döner.
//await yalnızca async ile kullanılabilir.
//awaitin anlamı şu: bulunduğun satırdaki işlem bitene kadar bir sonraki satırdaki kodu beklet.

//İlk olarak promise ile bir postu ve postun yorumlarını alalım

document.querySelector("#button1").addEventListener("click",()=>{
    console.log("-----PROMISE-----")
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post)=>{
        console.log(post)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json())
        .then((comments)=>console.log(comments))
    })
})

//async await ile bir postu ve postun yorumlarını alalım
document.querySelector("#button2").addEventListener("click",async ()=>{
    console.log("-----ASYNC AWAIT-----")
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post,comments)
})