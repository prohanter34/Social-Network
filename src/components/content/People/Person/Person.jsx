import { Link } from "react-router-dom"
import s from "../Person/Person.module.css"

const Person = (props) => {

    return (
        <div className={s.person_wrapper}>
            <Link to={`/profile/${props.id}`}>
                <img src={props.smallPhoto === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png" : props.smallPhoto} alt="" className={s.img} />
                <div className={s.name}>{props.name}</div>
                <div className={s.status}>{props.status}</div>
            </Link>
            <button onClick={() => { props.followed ? props.unfollowOnClick(props.id) : props.followOnClick(props.id) }}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>

    )
}

export default Person