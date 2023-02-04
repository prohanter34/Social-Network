import s from "./StaticProfile.module.css"
import Status from "./Status/Status"


const StaticProfile = (props) => {
    const noneAva = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
    let contactsBase = []
    for (let key in props.contacts) {
        
        if (props.contacts[key] !== null && props.contacts[key] !== "") {
            contactsBase.push(
                <a key={key} href={props.contacts[key]} className={s.contacts}>{key}</a>
            )
        }
    }

    
    return (
        <div className={s.container}>
            <img alt="vvnor" className={s.ava} src={props.state.photos.small===null ? noneAva : props.state.photos.small} />
            <div className={s.info}>
                <div className={s.name}>{props.state.fullName}</div>
                <div className={s.status}>{props.state.aboutMe}</div>
                <Status 
                    status={props.state.status} 
                    getStatus={props.getStatus} 
                    id={props.id}
                    putStatus={props.putStatus}
                />
            </div>
            <div className={s.someInfo}>
                <div>Contacts:</div>
               <div className={s.contactsContainer}>{contactsBase}</div>
            </div>
        </div>
    )
}

export default StaticProfile