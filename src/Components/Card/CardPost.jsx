import React from 'react'

const CardPost = ({post: {author, text, commentsNum}}) => (
    <div className="card-post">
        <h3 className="card-post-author">{author}</h3>
        <p className="card-post-text">{text}</p>
        <p className="card-post-comments">{commentsNum} comments</p>
    </div>
)

export default CardPost