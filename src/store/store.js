import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    state: {
        profileState: {
            postsState: [
                { likes: "12", text: "girfirf", id: 1 },
                { likes: "2324", text: "gui", id: 2 },
                { likes: "354", text: "hui", id: 3 },
                { likes: "55", text: "kolin", id: 4 }
            ],
            newPostText: ''
        },
        dialogState: {
            dialogs: [
                {people: "Andrey", text: "frrf", id: 1, messages: [
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfryuhuhedefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    
                ]},
                {people: "rfrfey", text: "frr", id: 2, messages: [
                    {text: "rfri8uuhhhedefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    
                ]},
                {people: "jkiy", text: "nhnjn", id: 3, messages: [
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgro677redefrfr"},
                    
                ]},
                {people: "vanya", text: "edede", id: 4, messages: [
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfrgrredefrfr"},
                    {text: "rfrfr555555efrfr"},
                    {text: "rfrfrgrredefrfr"},
                    
                ]}
            ],
            newMessageText:""
        }
    },
    _callSubscriber() { alert("") },
    subscribe(observer) {store._callSubscriber = observer},
    dispatch(action) {
        profileReducer(this.state.profileState, action)
        dialogReducer(this.state.dialogState, action)
        this._callSubscriber(this.state)
    }
}
window.store = store;
export default store;