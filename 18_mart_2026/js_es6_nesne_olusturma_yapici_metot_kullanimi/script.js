//OOP(Nesneye Yönelik Programlama)
//Nesne oluşturma ve yapıcı metot kullanımı

class Insan{ //sınıf

    /*Bir sınıfın içinde neler olur:
        1-özellikler(properties)
        2-yapıcı metot(constructor)
        3-fonksiyon(function)
    */

    constructor(isim,soyisim,yas,maas){ //yapıcı metot
        //özellikleri this ile tanımlıyoruz.
        this.isim = isim //yapıcı metot içindeki isim parametresini, isim adlı özellikte tanımladık.
        this.soyisim = soyisim
        this.yas = yas
        this.maas = maas
    }

    bilgileriGoster(){
        console.log(
            `
            İsim: ${this.isim}
            Soyisim: ${this.soyisim}
            Yaş: ${this.yas}
            Maaş: ${this.maas}
            `
        )
    }

}

//nesne oluşturmak
const insan1 = new Insan("Esra","Özgenç",22,80000)
const insan2 = new Insan("Beyza","Özgenç",24,100000)

insan1.bilgileriGoster()//nesne oluşturmadan fonksiyonu çağıramayız.
insan2.bilgileriGoster()

console.log(insan1.isim) //bu şekilde tek bir özelliğe de ulaşabilirsin.
console.log(insan2.isim)