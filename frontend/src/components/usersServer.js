const API_URL = "http://127.0.0.1:8000/api/crud/usersLists"
const API_URL_POST = "http://127.0.0.1:8000/api/crud/CrearUSer"
const API_URL_GETUSER = "http://127.0.0.1:8000/api/crud/updatedeUser/"

export const listUSers = async() => {

    return await fetch(API_URL)
}
export const getUser = async(userId) => {

    return await fetch(`${API_URL_GETUSER}${userId}`)
}

let fecha = "2022-01-03T09:05:06Z";

export const agregaruser = async(newUser) => {

    return await fetch(API_URL_POST , {
        method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
             "name":String(newUser.name).trim(),
             "last_name":String(newUser.last_name).trim(),
             "username":String(newUser.username).trim(),
             "email":String(newUser.username).trim(),
             "status":String(newUser.status).trim(),
             "created_at":String(fecha),
             "updated_at":String(fecha),
        })
    })
}

export const edituser = async(newUser, userId) => {

    return await fetch(`${API_URL_GETUSER}${userId}` , {
        method: 'PUT', 
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
             "name":String(newUser.name).trim(),
             "last_name":String(newUser.last_name).trim(),
             "username":String(newUser.username).trim(),
             "email":String(newUser.username).trim(),
             "status":String(newUser.status).trim(),
             "created_at":String(fecha),
             "updated_at":String(fecha),
        })
    })
}