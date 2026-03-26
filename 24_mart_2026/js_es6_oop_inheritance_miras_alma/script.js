//INHERITANCE (MİRAS ALMA) KAVRAMI

class Person { //bu classın özelliklerini ve fonksiyonlarını bir sonraki class'a miras vereceğiz.
    firstname = "Esra"

    write() {
        console.log("Person Write: ", this.firstname)
    }
}

class Student extends Person{// extends classın_ismi şeklinde başka bir class'ın mirasını alabilirsin
    yaz() {
        console.log("Student Write: ",this.firstname) //Person class'ının özelliğini miras aldık.
        super.write(); //super miras alınan class'ın özelliklerine metotlarına ulaşmayı sağlar.
    }
}

const student1 = new Student() //student1 nesnesini oluşturduk
student1.yaz()