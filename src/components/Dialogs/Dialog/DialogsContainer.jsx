import { connect } from "react-redux"
import { addNewMessageCreator, updateNewMessageCreator } from "../../../store/dialogsReducer"
import Dialogs from "../Dialogs"



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogState.dialogs,
        newMessageText: state.dialogState.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (e) => {dispatch(updateNewMessageCreator(e))},
        onClickMessage: (e) => {dispatch(addNewMessageCreator(e))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialogs)