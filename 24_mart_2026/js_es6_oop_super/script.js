//super: Miras aldığın sınıfı(üst sınıfı) gösterir

class Person {
    firstname = "Esra"

    write(){
        console.log(this.firstname)
    }
}

class Student extends Person{
    write(){
        super.write()//bir üst sınıftaki metotlara erişemmizi sağlar.
    }
}

const student1 = new Student()
student1.write()