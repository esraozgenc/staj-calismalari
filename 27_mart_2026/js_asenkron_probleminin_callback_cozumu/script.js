//ASENKRON PROBLEMİ
//http(api) istekleri
//Gerçek bir HTTP isteğinin gecikmesini simüle etmek amacıyla, 
//asenkron çalışma mantığını göstermek için setTimeout kullanılmıştır.
//bu örnekte setTimeOut'u kaldırırsan problem çözülür
//fakat gerçek bir api isteğinde her halükarda bir miktar bekleyeceksin.
//bu sorunu api isteklerini; asenkrondan, senkrona çevirerek çözeceğiz.
//callback - promise - async await kullanacağız.

const users = [{userId:5,post:"Esra post 1"},
               {userId:5,post:"Esra post 2"},
               {userId:5,post:"Esra post 3"},
               {userId:6,post:"Beyza post 1"},
               {userId:7,post:"Serap post 1"}
            ]//normalde bu kısımda http servisine bağlanılır fakat biz bir örnek üzerinden ilerleyeceğiz.

//user id'den postları çekme işlemi
//önce userId'yi alıcaz, sonra alınan userId ile onun postlarını alıcaz

function getUserId(callback){ //userId alma işlemi
    setTimeout(() => {//1 saniye sonra sonucu dön
        //servise gittik ve cevabı aldık
        let userId = 5
        callback(userId)
    }, 1000);
}

function getPostByUserId(userId){ //userId üzerinden postları alma işlemi
    //gerçek hayatta bir rest api'a istek atacaksın setTimeout falan yok.
    setTimeout(() => { //0.5 saniye sonra sonucu dön
        users.forEach((user)=>{ //users dizisinin elemanları içinde dönüyoruz
            if(user.userId===userId){ //servisten aldığımız id, users dizimizde var ise
                console.log(user.post) //ekrana o userId'nin postlarını yazdır.
            }
        })
    }, 500);
}

getUserId(getPostByUserId)
//toplam 1500 ms'de çıktı verildi.