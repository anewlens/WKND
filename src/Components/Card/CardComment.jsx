import React from 'react'

const CardComment = ({comment: {author, text}}) => (
    <div className="card-comment">
        <h3 className="card-comment-author">{author}</h3>
        <p className="card-comment-text">{text}</p>
    </div>
)

export default CardComment