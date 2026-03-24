//STATİC
//Class içinde bir özellik yada fonksiyon static olarak tanımlandıysa
//sadece CLASS ismi üzerinden erişilir.
//Static olarak tanımlanmadıysa NESNE üzerinden erişilir.
//Fakat bunlar çift yönlü erişilemez. Static tanımlanan yalnızca class ismi ile
//static tanımlanmayan yalnızca nesne ile erişilir.

class Matematik{
    topla(sayi1,sayi2){
        console.log(sayi1+sayi2)
    }
    static cikar(sayi1,sayi2){
        console.log(sayi1-sayi2)
    }
}

//static tanımlanmayan nesne üzerinden erişildi.
const matematik = new Matematik()
matematik.topla(10,5)
//matematik.cikar(10,5) //static tanımlandığı için "Uncaught TypeError: matematik.cikar is not a function at" hatasını verdi

//static tanımlanan class ismi üzerinden erişildi.
Matematik.cikar(8,4)
//Matematik.topla(8,4) //static tanımlanmadığı için "Uncaught TypeError: Matematik.topla is not a function at" hatasını verdi

console.log("----------------------------------")
//static bir özelliğin, nesne üzerinden ulaşılamadığını bir örnekle görelim

class Insan{
    static maas=60000

    constructor(isim,soyisim){
        this.isim = isim
        this.soyisim = soyisim
    }

    writeInfo(){
        console.log(this.isim,this.soyisim,this.maas)// maas static olduğu için undefined olarak döndü
    }
}

const insan1 = new Insan("İbrahim","Orhan")
insan1.writeInfo()
console.log(Insan.maas) //class üzerinden çağırdığımız için verdiğimiz değer döndü
