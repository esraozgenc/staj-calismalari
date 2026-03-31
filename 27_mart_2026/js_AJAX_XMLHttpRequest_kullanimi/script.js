//AJAX(Asynchronous JavaScript and XML) nedir?
//Sayfayı yenilemeden (refresh yapmadan) sunucudan veri almayı sağlar.

//öncelikle URL hazırlama fonksiyonunu oluşturalım.
function prepareURL(url, id){//url, API(veri aldığın servis) adresini ifade ediyor. id ise API içindeki verileri filtreleyebilmek için.
    if(id===null){//eğer id belirtilmemişse URL'i olduğu gibi döndür
        return url
    }
    return `${url}?postId=${id}`//eğer id varsa, URL'e Query String (Sorgu parametresi) eklenir.
}

//AJAX işlemi yapan fonksiyon
function getComments(url,id){ //yorumları getiren fonksiyon
    let newURL = prepareURL(url,id) //URL hazırlanıyor
    const xhr = new XMLHttpRequest() //XMLHttpRequest, sunucuya istek gönderir ve cevabı alır
    xhr.addEventListener("readystatechange", ()=>{ //readystatechange: sunucuya gönderilen isteğin ne durumda olduğunu takip eder.
        //readyState, isteğin hangi aşamada olduğunu gösterir.
        //0 başlatılmadı, 1 istek açıldı, 2 istek ulaştı, 3 istek hazılanıyor, 4 tamamlandı

        //status, HTTP durum kodudur. 
        //200 başarılı, 404 sayfa bulunamadı, 500 sunucu hatası
        if(xhr.readyState===4 && xhr.status===200){//kısaca burada istek gönderiminin başarı durumu kontrol ediliyor
            console.log(JSON.parse(xhr.responseText)) //responseText sunucudan gelen verilerdir ve string tipindedir. JSON.parse ile veriler objeye dönüştürülür.
        }
    })

    xhr.open('GET',newURL) //istek bu kısımda oluşturulur. GET ile veriyi çekeriz. newURL hedef API adresi.
    xhr.send() //istek sunucuya gider.
}

function getData(url){
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open('GET', url)
    xhr.send()
}

getData("https://jsonplaceholder.typicode.com/users")

getComments("https://jsonplaceholder.typicode.com/comments",1) //fonksiyon çağırılır
//https://jsonplaceholder.typicode.com/comments?postId=1 gerçekte giden istek budur