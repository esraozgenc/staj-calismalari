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
    let users = JSON.parse(localStorage.getItem("users"))

    // Eğer localStorage boşsa JSON'dan çek
    if (!users) {
        const response = await fetch("/pixel_store/data/users.json")
        users = await response.json()
        localStorage.setItem("users", JSON.stringify(users))
    }

    let user = users.find(user => user.email == email)

    if(user === undefined){
        return {
            success: false,
            message: "Kullanıcı bulunamadı. Lütfen kayıt olun."
        }
    }

    if(user.password !== password){
        return{
            success: false,
            message: "Şifreniz yanlış."
        }
    }

    localStorage.setItem("currentUser", JSON.stringify(user))

    return {
        success: true,
        user: user
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
    let existingUser = storedUsers.find(user => user.email == userData.email)
    if(existingUser !== undefined){
        return{
            success: false,
            message: "Bu email zaten kayıtlı."
        }
    }
    
    //unique ID
    newId = Date.now()

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
    localStorage.setItem("currentUser", JSON.stringify(newUser))
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
        const user = users.find(user => user.id == userId)
        if (!user) {
            return { success: false, message: "Kullanıcı bulunamadı." }
        }

        //orders al
        const ordersRes = await fetch("/pixel_store/data/orders.json")
        const orders = await ordersRes.json()

        //kullanıcıya ait siparişler
        const userOrders = orders.filter(order => order.userId == userId)

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
                .filter(item => item.orderId == order.id)
                .map(item => {
                    const product = products.find(product => product.id == item.productId)
                    return {
                        product: product,
                        quantity: item.quantity
                    }
                })
            const totalPrice = items.reduce((total, item) => {
                return total + (item.product.price * item.quantity)
            }, 0)

            return {
                ...order,
                items: items,
                totalPrice: totalPrice
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

//profil güncelleme
export async function updateProfile(userId, updatedData) {
    try {
        let users = JSON.parse(localStorage.getItem("users"))

        // Eğer users yoksa JSON'dan çek
        if (!users || users.length === 0) {
            const res = await fetch("/pixel_store/data/users.json")
            users = await res.json()
            localStorage.setItem("users", JSON.stringify(users))
        }

        console.log("USERS:", users)
        console.log("USER ID:", userId)

        const userIndex = users.findIndex(user => user.id == userId)

        console.log("INDEX:", userIndex)

        if (userIndex === -1) {
            return { success: false, message: "Kullanıcı bulunamadı" }
        }

        // güncelle
        users[userIndex] = {
            ...users[userIndex],
            ...updatedData
        }

        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))

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
    window.location.href = "/pixel_store/index.html"
}