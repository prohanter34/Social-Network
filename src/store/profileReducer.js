import { peaopleAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_PROFILE_STATE = "SET_PROFILE_STATE";
const SET_STATUS = "SET_STATUS" 
const PUT_STATUS = " PUT_STATUS"

let initialState = {

    staticProfile: {
        photos: { small: "", large: "" },
        fullName: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        aboutMe: "",
        lookingForAJob: true,
        status: null

    },

    postsState: [
        { likes: "12", text: "girfirf", id: 1 },
        { likes: "2324", text: "gui", id: 2 },
        { likes: "354", text: "hui", id: 3 },
        { likes: "55", text: "kolin", id: 4 }
    ],
    newPostText: ''

}

let profileReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case ADD_NEW_POST:
            cloneState = { ...state }
            cloneState.postsState = [...state.postsState]
            cloneState.postsState.push({ likes: 0, text: cloneState.newPostText, id: 5 });
            cloneState.newPostText = "";
            return cloneState
        case UPDATE_NEW_POST_TEXT:
            cloneState = { ...state }
            cloneState.newPostText = action.text;
            return cloneState
        case SET_PROFILE_STATE:
            cloneState = { ...state }
            cloneState.staticProfile = { ...action.state}
            cloneState.staticProfile.status = state.staticProfile.status
            return cloneState
        case SET_STATUS:
            cloneState = {...state}
            cloneState.staticProfile.status = action.status
            return cloneState
        case PUT_STATUS:
            debugger
            cloneState = {...state}
            cloneState.staticProfile.status = action.status
            return cloneState
        default:
            return state
    }


}

export let updateNewPostCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            text
        }
    )

}

export let addNewPostCreator = () => {
    return (
        {
            type: ADD_NEW_POST
        }
    )
}

export let setProfileState = (state) => {
    return {
        type: SET_PROFILE_STATE,
        state
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export let putStatus = (status) => {
    return {
        type: PUT_STATUS,
        status
    }
}

export const getUserProfileThunk = (id) => (dispath) => {
    peaopleAPI.getProfile(id)
    .then((data) => {dispath(setProfileState(data.data))})
}

export const getStatusThunk = (id) => (dispath) => {
    peaopleAPI.getStatus(id)
    .then((status) => {dispath(setStatus(status.data))})
}

export const putStatusThunk = (status) => (dispath) => {
    debugger
    peaopleAPI.putStatus(status)
    .then(
        (data) => {
            debugger
            if (data.resultCode === 0) {
            dispath(putStatus(status))
            }
        }
    )
}

export default profileReducer