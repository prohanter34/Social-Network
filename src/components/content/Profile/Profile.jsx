import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import StaticProfile from "./StaticProfile/StaticProfile";

const Profile = (props) => {
    
    return (
        <div>
            <StaticProfile 
                state={props.staticProfile} 
                contacts={props.staticProfile.contacts}
                getStatus={props.getStatus}
                id={props.id}
                putStatus={props.putStatus}
            />
            <PostsContainer />
        </div>

    )
}

export default Profile