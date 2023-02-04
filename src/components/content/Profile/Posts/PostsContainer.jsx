import { connect } from "react-redux"
import { addNewPostCreator, updateNewPostCreator } from "../../../../store/profileReducer"
import Posts from "./Posts"




    
    const mapStateToProps = (state) => {
        return {
            postsState: state.profileState.postsState,
            newPostText: state.profileState.newPostText
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            addNewPost: (e) => {dispatch(addNewPostCreator(e))},
            updateNewPost: (e) => {dispatch(updateNewPostCreator(e))}
        }
    }

    
   
    export default connect(mapStateToProps, mapDispatchToProps)(Posts)
   

