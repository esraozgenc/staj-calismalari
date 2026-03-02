let now = new Date() // Şu anki tarih ve saat
let specific = new Date("2026-03-02")
let full = new Date(2026, 2, 2) // Ay 0'dan başlar (2 = Mart)

//get metotları
now.getFullYear() // Yıl (2026)
now.getMonth() // Ay (0-11 arası)
now.getDate() // Ayın günü (1-31)
now.getHours() // Saat
now.getTime() // 1970'ten beri geçen milisaniye, eğer belirli bir tarihten itibaren almak istersen specific gibi kullanmalısın.

//set metotları: değer değiştirmek için kullanılır.
now.setFullYear(2030)
now.setMonth(5)
now.setDate(15)
now.setHours(10)
now.setDate(now.getDate() + 1) //dinamik değer değiştirmek için

//formatlama metotları
now.toLocaleDateString() // Yerel tarih formatı
now.toLocaleTimeString()
now.toLocaleString() //date ve time'ı string olarak döndürür