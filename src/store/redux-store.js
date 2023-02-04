import {applyMiddleware, combineReducers, createStore} from "redux"
import authReduser from "./authReduser"
import dialogReducer from "./dialogsReducer"
import peopleReducer from "./peopleReducer"
import profileReducer from "./profileReducer"
import thunkMW from "redux-thunk"

let reducers = combineReducers({
    profileState: profileReducer,
    dialogState: dialogReducer,
    peopleState: peopleReducer,
    auth: authReduser
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store

export default store