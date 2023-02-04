import s from "./Message.module.css"


const Message = (props) => {
    return (
        <div className={s.message}>

            <div className={s.ava}>ava</div>
            <div className={s.people}>{props.people}</div>
            <div className={s.text}>{props.text}</div>

        </div>
    )
}

export default Message