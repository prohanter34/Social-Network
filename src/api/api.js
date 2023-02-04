import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY" : "4d5e77ae-9e8e-4816-a5d9-27882a23a05d"}
})

export const peaopleAPI = {
    getUsers(countOnPage, currentPage) {
        
        return instance.get(`users?count=${countOnPage}&page=${currentPage}`)
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    putStatus(status) {
        
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    sendLoginCookie() {        
        return instance.get("auth/me")
    },
    loginApi(email, password, rememberMe) {
        debugger
        return instance.post("auth/login", {email, password, rememberMe})
    }
}