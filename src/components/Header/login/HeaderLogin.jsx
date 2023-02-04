import s from "./HeaderLogin.module.css";


const HeaderLogin = (props) => {
    
    return (
        <div className={s.container}>

            <button className={s.login}>{props.resultCode === 1 ? "login" : props.login}</button>

        </div>
    )
}

export default HeaderLogin