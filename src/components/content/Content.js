import { Route, Routes } from "react-router-dom"
import s from "./Content.module.css"
import MessagesContainer from "./Messages/MessagesContainer"
import DialogsContainer from "../Dialogs/Dialog/DialogsContainer"
import PeopleContainer from "./People/PeopleContainer"
import ProfileContainer from "./Profile/ProfileContainer"
import MyProfileContainer from "./myProfile/myProfileContainer"
import LoginPage from "./LoginPage/LoginPage"

const Content = (props) => {
    
    return (
        <main className={s.green}>
            <div className={s.container}>
                <Routes>

                    <Route path="/profile/:userId" element={<ProfileContainer />}></Route>
                    <Route path="/profile/" element={<MyProfileContainer />}></Route>
                    <Route path="/messages" element={<MessagesContainer />}></Route>
                    <Route path="/people/:nuberPage" element={<PeopleContainer />}></Route>
                    <Route path="/login/" element={<LoginPage />}></Route>
                    
                </Routes>

                <DialogsContainer />
                
            </div>
        </main>
    )
}

export default Content