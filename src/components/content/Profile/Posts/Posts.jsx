import React from "react"
import Post from "./Post/Post"
import s from "./Posts.module.css"




const Posts = (props) => {
    
    
    
    let postsElements = props.postsState.map((e) => {

        return <Post likes={e.likes} text={e.text} key={e.id} />
    })

    
    let onChangePost = (e) => {
        
        props.updateNewPost(e.target.value)
        
    }
    
    return (
        
        <div className="post_container">

            {postsElements}
            <textarea 
                className={s.input} 
                value={props.newPostText}
                onChange={ onChangePost }> 
            </textarea>
            <button onClick={props.addNewPost}>Add post</button>

        </div>

    )
    
}

export default Posts