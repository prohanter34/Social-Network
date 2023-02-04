import { authAPI } from "../api/api";

const SET_AUTH_STATE = "SET_AUTH_STATE"; 


let initialState = {
    resultCode: 1,
    data: {
        id: null,
        email: null,
        login: null
    }
}

let authReduser = (state = initialState, action) => {
    let cloneState
    
    switch (action.type) {
        case SET_AUTH_STATE:
            cloneState = {...state}
            cloneState = action.state
            
            return cloneState
        default:
            return state
    }
}



export const setAuthState = (state) => {
    
    return {
        type: SET_AUTH_STATE,
        state: state
    }
}

export const getAuthStateThunk = () => (dispath) => {
    authAPI.sendLoginCookie()
    .then((data) => { dispath(setAuthState(data.data))})
}

export const sendLoginData = (email, password, rememberMe) => (dispath) => {
    authAPI.loginApi(email, password, rememberMe)
    .then((data) => {
        debugger
        if (data.data.resultCode === 0) {
            dispath(getAuthStateThunk())
        }
    })
}

export default authReduser