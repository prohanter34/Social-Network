import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthStateThunk } from "../../store/authReduser";


class HeaderContainer extends React.Component {

    componentDidMount() {
        
        this.props.getAuth()
    }

    render() {
        
        return (
            <Header resultCode={this.props.resultCode} login={this.props.login} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        resultCode: state.auth.resultCode,
        login: state.auth.data.login,
        // authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAuth: () => {dispatch(getAuthStateThunk())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

