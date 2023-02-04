import { connect } from "react-redux"
import withAuthRedirect from "../../HOCs/withAuthRedirect"
import Messages from "./Messages"



const mapStateToProps = (state) => {
    return{
        dialogs: state.dialogState.dialogs
    }
}


export default withAuthRedirect(connect(mapStateToProps)(Messages))