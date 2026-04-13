//Kullanıcı giriş kontrolü
export function isLoggedIn(){
    let user = localStorage.getItem("currentUser")
    user = JSON.parse(user)
    if(user !== null){
        return true
    }else{
        return false
    }
}

//Kullanıcı giriş işlemi
export async function login(email, password){
    const response = await fetch("/pixel_store/data/users.json")
    const users = await response.json()
    let user = users.find(user => user.email === email)
    if(user === undefined){
        return "Kullanıcı bulunamadı lütfen kayıt olun."
    }else{
        if(user.password !== password){
            return{
                success: false,
                message: "Şifreniz yanlış"
            }
        }else{
            localStorage.setItem("currentUser", JSON.stringify(user))
            return {
                success: true,
                user: user
            }
        }
    }
}

//Kullanıcı kayıt işlemi
export async function register(userData){
    //mevcut database
    let storedUsers = JSON.parse(localStorage.getItem("users"))
    if(storedUsers === null){
        const initialResponse = await fetch("/pixel_store/data/users.json")
        const apiUsers = await initialResponse.json()
        localStorage.setItem("users",JSON.stringify(apiUsers))
        storedUsers = apiUsers
    }

    //kayıtlı bir kullanıcı olup olmadığının kontrolü
    let newId;
    let existingUser = storedUsers.find(user => user.email === userData.email)
    if(existingUser !== undefined){
        return{
            success: false,
            message: "Bu email zaten kayıtlı"
        }
    }
    
    //unique ID
    if(storedUsers.length === 0){
        newId = 1
    }else{
        newId = Math.max(...storedUsers.map(user => user.id)) + 1
    }    

    let newUser = { //kayıt edilecek kullanıcı
        id: newId,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        phone: userData.phone
    }

    storedUsers.push(newUser)

    //yeni database
    localStorage.setItem("users",JSON.stringify(storedUsers))

    return{
        success: true,
        data: newUser
    }
}

//Profil bilgileri
export async function getProfile(userId) {
    try {
        //users al (localStorage öncelikli)
        let users = JSON.parse(localStorage.getItem("users"))
        if (!users) {
            const res = await fetch("/pixel_store/data/users.json")
            users = await res.json()
        }

        //kullanıcıyı bul
        const user = users.find(user => user.id === userId)
        if (!user) {
            return { success: false, message: "Kullanıcı bulunamadı" }
        }

        //orders al
        const ordersRes = await fetch("/pixel_store/data/orders.json")
        const orders = await ordersRes.json()

        //kullanıcıya ait siparişler
        const userOrders = orders.filter(order => order.userId === userId)

        //orderItems al
        const itemsRes = await fetch("/pixel_store/data/orderItems.json")
        const orderItems = await itemsRes.json()

        //products al
        const productsRes = await fetch("/pixel_store/data/products.json")
        const products = await productsRes.json()

        //sipariş detayları
        const detailedOrders = userOrders.map(order => {
            // bu siparişe ait itemler
            const items = orderItems
                .filter(item => item.orderId === order.id)
                .map(item => {
                    const product = products.find(product => product.id === item.productId)
                    return {
                        product: product,
                        quantity: item.quantity
                    }
                })
            return {
                ...order,
                items: items
            }
        })
        //sonuç
        return {
            success: true,
            data: {
                user: user,
                orders: detailedOrders
            }
        }
    } catch (error) {
        console.log(error)
        return { success: false, message: "Bir hata oluştu" }
    }
}

//Profil güncelleme
export function updateProfile(userId, updatedData) {
    try {
        //users al
        let users = JSON.parse(localStorage.getItem("users")) || []

        //kullanıcıyı bul
        const userIndex = users.findIndex(user => user.id === userId)

        if (userIndex === -1) {
            return { success: false, message: "Kullanıcı bulunamadı" }
        }

        // email değişiyorsa kontrol et
        const emailExists = users.find(
            user => user.email === updatedData.email && user.id !== userId
        )

        if (emailExists) {
            return { success: false, message: "Bu email zaten kullanımda" }
        }

        //güncelleme (merge işlemi)
        users[userIndex] = {
            ...users[userIndex],
            ...updatedData
        }

        //localStorage’a kaydet
        localStorage.setItem("users", JSON.stringify(users))

        //eğer giriş yapan kullanıcıysa onu da güncelle
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))

        if (currentUser && currentUser.id === userId) {
            localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
        }

        //sonuç döndür
        return {
            success: true,
            data: users[userIndex]
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: "Bir hata oluştu" }
    }
}

//çıkış yapma
export function logout() {
    const confirmLogout = confirm("Çıkış yapmak istiyor musunuz?")
    if (!confirmLogout) return
    // kullanıcıyı sil
    localStorage.removeItem("currentUser")

    // ana sayfaya yönlendir
    window.location.href = "/index.html"
}