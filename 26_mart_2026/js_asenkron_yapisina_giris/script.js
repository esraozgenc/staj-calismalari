//ASENKRON VE SENNKRON
//Senkron ve asenkron programlama, kodun çalışma sırasını belirleyen iki temel yaklaşımdır.

//Senkron (Synchronous) programlama, işlemlerin sırasıyla ve birbirini bekleyerek gerçekleştirilmesidir.
//Bir işlem tamamlanmadan sonraki işlem başlatılmaz.

//Asenkron (Asynchronous) programlama ise işlemlerin birbirini beklemeden yürütülmesine olanak tanır.
// Uzun süren işlemler arka planda devam ederken, program diğer işlemleri gerçekleştirmeye devam eder.

//JavaScript senkron çalışan bir programlama dilidir.
//Fakat JS'in asenkron çalışmasına sebep olan bazı fonksiyonları vardır.
/*Bunlar:
1-Timing
2-Event(olay)
3-Http isteklerinde */

//Asenkron yapıları senkrona çevirip yöneten bazı işlemler vardır.
//Callback, promise, async & await gibi.

console.log("Esra")

setTimeout(() => {
    console.log("1000 ms sonra çalıştı")
}, 1000);

setTimeout(() => {
    console.log("750 ms sonra çalıştı")
}, 750);

setTimeout(() => {
    console.log("500 ms sonra çalıştı")
}, 500);

console.log("Özgenç")