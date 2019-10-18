import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../redux/posts/posts.actions'
import CardHeader from './CardHeader'
import CardForm from './CardForm';
import './card.scss'

const Card = ({day, children, addNewPost}) => {
    const [newPost, setNewPost] = useState('')

    const handleSubmit = e => {
        e.preventDefault() 

        if (newPost) {
            const post = {
                day,
                author: 'Robbie',
                text: newPost,
                commentsNum: 0,
                comments: []
            }
    
            addNewPost(post)
            setNewPost('')
        }
    }
    
    return (
        <div className='card' id={day}>
            <CardHeader day={day} />
            {children}
            <CardForm 
                onSubmit={handleSubmit} 
                className='card-form-post' 
                value={newPost} 
                onChange={setNewPost} 
                label='post' />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNewPost: post => dispatch(addPost(post)),
})

export default connect(null, mapDispatchToProps)(Card)