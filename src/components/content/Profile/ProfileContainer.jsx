import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { getStatusThunk, getUserProfileThunk} from "../../../store/profileReducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.location.userId)
    }
    render() {
        
        return (
            <Profile staticProfile={this.props.staticProfile} getStatus={this.props.getStatus} id={this.props.location.userId}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        staticProfile: state.profileState.staticProfile,
        
    }
}

const mapDispathToProps = (dispath) => {
    return {
        getUserProfile: (id) => (dispath(getUserProfileThunk(id))),
        getStatus: (id) => (dispath(getStatusThunk(id)))
    }
}

function ProfileURLContainer(props) {
    let location = useParams();
    
    return (
        <ProfileContainer {...props} location={location} />
    )
}

export default connect(mapStateToProps, mapDispathToProps)(ProfileURLContainer)