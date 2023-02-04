import Message from "./Message/Message"
import { NavLink } from "react-router-dom"
import s from "./Messages.module.css"


const Messages = (props) => {

    let dialogsBase = props.dialogs

    return(
        <div className="messages">

            {dialogsBase.map((e) => {
                return (
                    <NavLink to={"/messages/"+e.id} className={s.link}><Message people={e.people} text={e.text} key={e.id}/></NavLink>
                )
            })}

        </div>
    )
}

export default Messages