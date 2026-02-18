//swift-case ile atm uygulaması
//1- bakiye görüntüleme
//2- para çekme
//3- para yatırma
//4-çıkış


let bakiye = 1000
const yeniSatir = "\r\n" 
let metin = "1- Bakiyenizi görüntüleyin" + yeniSatir
           +"2- Para çekin" +yeniSatir
           +"3- Para yatırın" +yeniSatir
           +"4- Çıkış yapın" +yeniSatir
           + "Lütfen bir islem seçin: "

let secim = Number(prompt(metin))

switch(secim)
{
    case 1:
        alert("Bakiyeniz: " + bakiye)
        break

    case 2:
        let paraCek = Number(prompt("Çekmek istediğiniz tutarı girin: "))
        if (paraCek<bakiye){
            alert("Paranız başarıyla çekilmiştir. Kalan bakiyeniz: " + (bakiye-paraCek))
        }
        else{
            alert("Çekeceğiniz para bakiyenizden yüksek olamaz." +yeniSatir
                 +"Bakiyeniz: " + bakiye + " Çekeceğiniz tutar: " + paraCek) 
        }
        break

    case 3:
        let paraYatır = Number(prompt("Yatırmak istediğiniz tutarı girin: "))
        bakiye += paraYatır
        alert("Paranız başarıyla yatırılmıştır. Güncel bakiyeniz: " + bakiye)
        break

    case 4:
        alert("Sistemden çıkış yapıldı")
        break

    default:
        alert("Lütfen 1 - 4 arasında sayı giriniz")
        break

}