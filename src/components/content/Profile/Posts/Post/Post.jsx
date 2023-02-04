

const Post = (props) => {
    return (
        <div className="post_container">
            <div className="text">{props.text}</div>
            <div className="likes">{props.likes}</div>
        </div>
    )
}

export default Post