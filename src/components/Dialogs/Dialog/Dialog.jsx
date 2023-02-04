import s from "./Dialog.module.css"

const Dialog = (props) => {

    let messageBase 
    props.dialogs.forEach((e) => {
        if (e.id === props.id) {
            messageBase = e.messages
        }
    });
    
    let messagesElement = messageBase.map((e) => {
        
        return(
            <p key={e.id}>{e.text}</p>
        )
    })
    
    return(
    <div>
        {messagesElement}
        <textarea placeholder="Your message"
            className={s.text} 
            onChange={(e) => {props.onChangeMessage(e.target.value)}}
            value={props.newMessageText}></textarea>
        <button onClick={() => {props.onClickMessage(props.id)}}>Send</button>
    </div>  
    )
}

export default Dialog