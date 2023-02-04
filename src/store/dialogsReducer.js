let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
let ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

const initialState = {
    dialogs: [
        {
            people: "Andrey", text: "frrf", id: 1, messages: [
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfryuhuhedefrfr" },
                { text: "rfrfrgrredefrfr" },

            ]
        },
        {
            people: "rfrfey", text: "frr", id: 2, messages: [
                { text: "rfri8uuhhhedefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },

            ]
        },
        {
            people: "jkiy", text: "nhnjn", id: 3, messages: [
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgro677redefrfr" },

            ]
        },
        {
            people: "vanya", text: "edede", id: 4, messages: [
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfrgrredefrfr" },
                { text: "rfrfr555555efrfr" },
                { text: "rfrfrgrredefrfr" },

            ]
        }
    ],
    newMessageText: ""
}

let dialogReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            cloneState = { ...state }
            cloneState.newMessageText = action.text;
            return cloneState
        case ADD_NEW_MESSAGE:
            cloneState = { ...state }
            cloneState.dialogs = [...state.dialogs]
            cloneState.dialogs.forEach((e) => {
                e.messages = [...e.messages]
            })

            cloneState.dialogs.forEach((e) => {
                if (e.id === action.id) {
                    e.messages.push({ text: state.newMessageText })
                }
            })
            cloneState.newMessageText = "";
            return cloneState
        default:
            return state
    }
   
}

export let updateNewMessageCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_TEXT,
            text
        }
    )
}

export let addNewMessageCreator = (id) => {
    return (
        {
            type: ADD_NEW_MESSAGE,
            id
        }
    )
}

export default dialogReducer