function readStudent(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        try {
            xhr.addEventListener("readystatechange", ()=>{
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText))
            }
        })
        } catch (error) {
            reject(error)
        }

        xhr.open("GET",url)
        xhr.send()
    })
}

readStudent("student.json")
.then((data)=> console.log(data))
.catch((err)=> console.log(err))