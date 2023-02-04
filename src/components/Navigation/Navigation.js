import React from "react";
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (      
        <nav className={s.red}>
            <div className={s.item_conteiner}>    
                <NavLink to="/profile" className={({isActive}) => isActive ? s.active : s.item} >Profile</NavLink>
                <NavLink to="/messages" className={({isActive}) => isActive ? s.active : s.item} >Massege</NavLink>
                <NavLink to="/people/1" className={({isActive}) => isActive ? s.active : s.item} >Peoples</NavLink>                    
                <NavLink to="/music" className={({isActive}) => isActive ? s.active : s.item} >Music</NavLink>

            </div>
        </nav> 
    )
}

export default Navigation