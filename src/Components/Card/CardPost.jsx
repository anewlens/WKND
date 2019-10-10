import React from 'react'

const CardPost = ({post: {author, text, commentsNum}}) => (
    <div className="card-post">
        <h3 className="card-post-author">{author}</h3>
        <p className="card-post-text">{text}</p>
        <div className="card-post-comments">
            <p className="card-post-comments-num">{commentsNum} comments</p>
        </div>
    </div>
)

export default CardPost