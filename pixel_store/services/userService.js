//Kullanıcı giriş kontrolü
function isLoggedIn(){
    let user = localStorage.getItem("currentUser")
    user = JSON.parse(user)
    if(user !== null){
        return true
    }else{
        return false
    }
}

//Kullanıcı giriş işlemi
async function login(email, password){
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
async function register(userData){
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