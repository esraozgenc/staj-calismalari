//this: bulunduğun classı ifade eder
console.log("----------THIS-----------")
console.log(this) //bu şekilde yazarsak window objesini bize getirir çünkü herhangi bir sınıfa dahil değil.

//aslında oluşturulan her class, objecti miras alır fakat bu görünmezdir. Bir class'ta objenin metotlarını da kullanabilirsin bu yüzden. 
class Person /*extends Object*/{

    constructor(firstname){
        this.firstname = firstname
    }

    write(){
        console.log(this) //this diyerek bu class'ın özelliklerini, metotlarını her neyi varsa yazdırmış olduk. 
    }
}

const person = new Person("Esra")
person.write() //Bize bir obje olarak çıktısını verdi.
