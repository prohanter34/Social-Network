import React from "react"
import { connect } from "react-redux"
import { getAuthStateThunk } from "../../../store/authReduser"
import { getStatusThunk, getUserProfileThunk, putStatusThunk } from "../../../store/profileReducer"
import withAuthRedirect from "../../HOCs/withAuthRedirect"
import Profile from "../Profile/Profile"


class myProfileContainer extends React.Component {

    componentDidMount() {
        if (this.props.authState.id !== null) {
            this.props.getMyProfile(this.props.authState.id)
        }
    }

    componentDidUpdate() {
        if (this.props.authState.id !== null) {
            this.props.getMyProfile(this.props.authState.id)
        }
    }

    render() {
        
        return(
            <Profile 
                staticProfile={this.props.staticProfile} 
                contacts={this.props.staticProfile.contacts}
                getStatus={this.props.getStatus}
                id={this.props.authState.id}
                putStatus={this.props.putStatus}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth.data,
        staticProfile: state.profileState.staticProfile

    }
}

const mapDispathToProps = (dispath) => {
    return {
        getMyProfile: (id) => {dispath(getUserProfileThunk(id))},
        sendLoginCookie: () => {dispath(getAuthStateThunk())},
        getStatus: (id) => {dispath(getStatusThunk(id))},
        putStatus: (status) => {dispath(putStatusThunk(status))}
    }
}

export default withAuthRedirect(connect(mapStateToProps, mapDispathToProps)(myProfileContainer))