import { Route, Routes } from "react-router-dom";
import Dialog from "./Dialog/Dialog";



const Dialogs = (props) => {
    let routeDialogsBase = props.dialogs;
    let dialogs = routeDialogsBase.map((e) => {
       
        return(
            (<Route path={"/messages/" + e.id}
                    element={<Dialog dialogs={props.dialogs}
                    onClickMessage={props.onClickMessage}
                    onChangeMessage={props.onChangeMessage}
                    newMessageText={props.newMessageText}
                    id={e.id}
                    key={e.id} />} />)
        )
    })
    
    return (
        <Routes>
            {dialogs}
        </Routes>
    )
}

export default Dialogs