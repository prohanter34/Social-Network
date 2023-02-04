import { connect } from "formik"
import { sendLoginData } from "../../../store/authReduser"
import LoginPage from "./LoginPage"


let LoginPageComponent = (props) => {
    return (
        <LoginPage loginFunc={props.login}/>
    )
}

const mapDispathToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {dispatch(sendLoginData(email, password, rememberMe))}
    }
}

export default connect(null, mapDispathToProps)(LoginPageComponent)