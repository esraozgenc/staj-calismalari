//Document Objesine Giriş

console.log(window) //document objesi, window objesinin içinde yer alır.
 


//Document objesi de kendi içinde birçok metot barındırır.


//location metotuyla başlayalım
console.log(document.location) //gördüğünüz gibi location özellikleri gösteriliyor

//bir de location içindeki özelliklere ulaşalım

//href
console.log(document.location.href) //üzerinde çalıştığımız sayfanın adresini bize verdi

//hostname
console.log(document.location.hostname) //şu an kendi bilgisayarımızda çalıştığımız için localhostun numarası geldi. esra.net gibi bir host adresi de olabilirdi.
//örneğin host adresi x ise, z mailine mail at gibi kullanılabilir.

//port
console.log(document.location.port)

//pathname
console.log(document.location.pathname) //çalıştığımız klasörün isminden bahsediyor


//document objesinde all özelliği

console.log(document.all) //sayfada kullanılan tüm html etiketlerini verir

console.log(document.all[5]) //sayfada kullanılan 5. indeksteki html etiketini getirir


//characterSet
console.log(document.characterSet) //HTML dosyasında kullanılan charseti getirir

//title
console.log(document.title)//dosyanın başlığını yani sekme adını çağırdık

//a etiketlerini çağırmak için
console.log(document.links)

console.log(document.links[3]) //3. indeksteki a etiketini getirdi
console.log(document.links.item(4)) //4. indeksteki a etiketini getirdi

console.log(document.links.item(4).id) //4. indeksteki a etiketinin id'sini getirdi
console.log(document.links.item(4).getAttribute("id")) //4. indeksteki a etiketinin id'sini getirdi

console.log(document.links.item(4).getAttribute("class")) //4. indeksteki a etiketinin classlarını getirdi
console.log(document.links.item(4).classList) //4. indeksteki a etiketinin class listesini getirdi
console.log(document.links.item(4).classList[3]) //4. indeksteki a etiketinin 3. indeksteki classını getirdi

console.log(document.forms) //sayfadaki form etiketlerini getir 
console.log(document.forms.item(1)) //sayfadaki form etiketlerinden 1. indeksteki form etiketini getir 
console.log(document.forms.item(1).id) //sayfadaki form etiketlerinden 1. indeksteki formun id'sini getir 

console.log(document.forms.item(1).children) // sayfadaki 1. indeksteki formun çocuklarını getirdi: input, hr


console.log(document.domain) //host adresini getirdi
console.log(document.contentType) //text/html geldi
