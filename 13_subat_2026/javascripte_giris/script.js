//Çıktı verme yöntemleri

//1) document.writeln
document.writeln("Esra Özgenç <br>"); //<br> etiketi alt satıra geçmesini sağlıyor.
document.write(42 + "<br>"); // + sembolü de ilk girilen değer int olduğu için.
document.writeln(5.5);
document.writeln(true);

//2) console.log(): Web sitesinde inceleye basınca konsol kısmında bu loglar görünür.
console.log("Hello World");
console.log("Esra Özgenç");
console.log(27.5);
console.log(false);
console.log({name:"Esra" , surname:"Özgenç"});

//console.clear()

let a = 5;
let b = 10;

console.log(a+b);
console.log("iki sayının toplamı: ",a+b);
console.log("iki sayının toplamı: " + (a+b));

//3) alert

alert("iki sayının toplamı: "+ (a+b));
alert("Lütfen f5 tuşuna basmayınız!");