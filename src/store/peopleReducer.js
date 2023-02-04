import { peaopleAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_STATE = 'SET_STATE'
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER"

const initialState = {
    items: [],
    totalCount: 0,
    countOnPage: 10,
    pageSize: 3,
    currentPage: 1
}

const peopleReducer = (state = initialState, action) => {
    let copyState
    switch(action.type) {
        case FOLLOW:
            copyState = {...state}
            copyState.items = [...state.items]
            copyState.items.map((e) => {
                return {...e}
            })
            
            copyState.items.forEach((e) => {
                if (e.id === action.id) {
                    e.followed = true
                }
            })
            
            return copyState
        case UNFOLLOW:
            copyState = {...state}
            copyState.items = [...state.items]
            copyState.items.map((e) => {
                return {...e}
            })
            copyState.items.forEach((e) => {
                if (e.id === action.id) {
                    e.followed = false
                }
            })
            return copyState
        case SET_STATE:
            copyState = {...state}
            copyState.items = action.state.items
            copyState.totalCount = action.state.totalCount
            return copyState
        case SET_PAGE_NUMBER:
            copyState = {...state}
            copyState.currentPage = action.pageNumber
            return copyState
        default: 
            return state

    }
    
}



export const followCreator = (id) => {
    return {
        type: FOLLOW,
        id
    }
}

export const unfollowCreator = (id) => {
    return {
        type: UNFOLLOW,
        id
    }
}

export const setStateCreator = (state) => {
    return {
        type: SET_STATE,
        state
    }
}

export const setPageNumberCreator = (pageNumber) => {
    return {
        type: SET_PAGE_NUMBER,
        pageNumber
    }
}

export const getUsersThunk = (countOnPage, currentPage) => (dispatch) => {
    peaopleAPI.getUsers(countOnPage, currentPage)
    .then((state) => {dispatch(setStateCreator(state.data))})
}

export const followThunk = (id) => (dispath) => {
    peaopleAPI.follow(id)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispath(followCreator(id))
        }
    })
}

export const unfollowThunk = (id) => (dispath) => {
    peaopleAPI.unfollow(id)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispath(unfollowCreator(id))
        }
    })
}

export default peopleReducer