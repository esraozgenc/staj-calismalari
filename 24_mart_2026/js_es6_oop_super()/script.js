//super() : bu bir metottur. miras aldığımız class'ın birden fazla özelliği varsa onları kolayca alabilmek için vardır.

class Person {

    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary)
    }
}

class Student extends Person{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary) //super() metodumuzu burada kullandık
    }

    writeInfo(){
        super.writeInfo()
    }
}

class Engineer extends Person{
    constructor(firstName, lastName, salary){
        super(firstName,lastName,salary)
    }

    writeInfo(){
        super.writeInfo()
    }
}

const student1 = new Student("Esra","Özgenç",150000)
const engineer1 = new Student("Elon","Musk",170000)
student1.writeInfo()
engineer1.writeInfo()