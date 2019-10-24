import React, {useState} from 'react'
import { connect, useSelector } from 'react-redux'
import CardComment from './CardComment'
import { addComment } from '../../redux/comments/comments.actions'
import CardForm from './CardForm'
import commentsServices from '../../services/comments.services'

const CardPost = ({post: {id, author, text}, comments, addComment}) => {

    const [expanded, setExpanded] = useState(false)
    const [newComment, setNewComment] = useState('')
    const user = useSelector(state => state.user)

    const handleSubmit = e => {
        e.preventDefault()

        if (newComment) {
            const comment = {
                text: newComment,
                user_id: user.id,
                post_id: id,
                group_id: user.group_id
            }
            
            console.log("COMMENT", user)

            commentsServices.addComment(comment, user)
                .then(() => {
                    addComment({...comment, author: user.name})
                    setNewComment('')
                })
        }
    }

    return (
        <div className="card-post">
            <h3 className="card-post-author">{author}</h3>
            <p className="card-post-text">{text}</p>
                <button onClick={() => setExpanded(prev => !prev)} className="card-post-comments-num">
                    {comments.length} comments
                </button>
            <div className='card-post-comments'>
                <div className="card-post-comments_list">
                    {
                        expanded && comments.map(comment => <CardComment key={comment.id} comment={comment} />)
                    }
                </div>
                <CardForm
                    onSubmit={handleSubmit} 
                    className='card-form-comment' 
                    value={newComment} 
                    onChange={setNewComment} 
                    label='comment' />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment))
})

export default connect(null, mapDispatchToProps)(CardPost)