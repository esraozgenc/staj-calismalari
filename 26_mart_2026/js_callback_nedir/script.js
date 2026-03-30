//CALLBACK NEDİR?
//Callback: bir fonksiyonun parametresine, başka bir fonksiyon çağrılarak asenkron yapı senkron yapıya dönüştürülür.

console.log("--------Callback olmadan--------")
function getName(){
    setTimeout(() => {
        //servisten ismi getirildi.
        console.log("Esra")
    }, 1000);
}

function getSurname(){
    setTimeout(() => {
        //servisten soyisim getirildi.
        console.log("Özgenç")
    }, 500);
}

getName()
getSurname()

//Bu çıktıda callback kullanılmadığı için, ve setTimeOut'da(gerçek hayatta ise API'da) soyisim daha erken getirildiği için, soyisim çıktısı önce verildi.
//Bu sorunu çözmek için callback kullanacağız.

function getName2(callback){
    setTimeout(() => {
        console.log("--------Callback ile--------")
        //servisten ismi getirildi.
        console.log("Esra")
        callback()
    }, 2000);
}

function getSurname2(){
    setTimeout(() => {
        //servisten soyisim getirildi.
        console.log("Özgenç")
    }, 700);
}

getName2(getSurname2)

//callbacki parametreli olarak da kullanabiliriz

function getName3(callback){
    setTimeout(() => {
        console.log("--------Callback parametre ile--------")
        //servisten ismi getirildi.
        let name = "Esra"
        callback(name)//eğer getsurname'in a, b gibi kendi parametreleri olsaydı onları da a,b diye yazardık bu kısıma.
    }, 3000);
}

function getSurname3(name){ //yukarıda callback'e bir parametre atadık, callback buraya bağlanıyor bu durumda bu fonksiyonun da bir parametresi olmalı
    setTimeout(() => {
        //servisten soyisim getirildi.
        let surname = "Özgenç"
        console.log(name, surname)
    }, 500);
}

getName3(getSurname3)

//callbacki fonksiyonu tanımlarken de çağırabilirsin. name'e göre soyisim'i bulacağız.

function getName4(callback){
    setTimeout(() => {
        console.log("--Callback'in fonksiyonu çağırırken kullanımı--")
        //servisten ismi getirildi.
        let name = "Esra"
        callback(name)//eğer getsurname'in a, b gibi kendi parametreleri olsaydı onları da a,b diye yazardık bu kısıma.
    }, 4000);
}

function getSurname4(name,callback){ //yukarıda callback'e bir parametre atadık, callback buraya bağlanıyor bu durumda bu fonksiyonun da bir parametresi olmalı
    setTimeout(() => {
        //servisten soyisim getirildi.
        let surname = "Özgenç"//name'e göre soyisimi buldu.
        callback(surname)
    }, 500);
}

function age(name, surname, callback){
    setTimeout(() => {
        let age = 22 //İsmi Esra Soyisimi Özgenç olanın yaşını getirdi.
        callback(age)
    }, 300);
}
 getName4((name)=>{//get surname bizden parametre olarak bir callback yani aslında bir fonksiyon istiyor. Bizde bu fonksiyonu array function ile getName fonksiyonunu çağırırken alabiliriz.
    getSurname4(name, (surname)=>{//yine getSurname'in callback parametresi olduğu için burada tanımlıyoruz. Yukarıda callback'in parametresi surname olduğu için bizde surname veriyoruz.
        age(name, surname, (age)=>{
            console.log(name,surname,age)
        })
    } )
 })
