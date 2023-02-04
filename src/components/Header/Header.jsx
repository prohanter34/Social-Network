import React from "react";
import s from "./Header.module.css"
import HeaderLogin from "./login/HeaderLogin.jsx";

const Header = (props) => {
    return (

        <header className={s.header}>
            Header
            <HeaderLogin resultCode={props.resultCode} login={props.login}/>
        </header>

    )
}

export default Header