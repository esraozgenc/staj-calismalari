//Ders ortalaması bulma
//vize1 %30, vize2 %30, final %40, geçme notu 50

let vize1 = Number(prompt("1. vize notunuz: "))
let vize2 = Number(prompt("2. vize notunuz: "))
let final = Number(prompt("Final notunuz: "))

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4)
console.log(ortalama)

if(ortalama>=50){
    alert("Dersten geçtiniz ortalamanız: " + ortalama)
}
else{
    alert("Dersten kaldınız ortalamanız: " + ortalama)
}