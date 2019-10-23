import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../redux/posts/posts.actions'
import CardHeader from './CardHeader'
import CardForm from './CardForm';
import './card.scss'
import postsServices from '../../services/posts.services';

const Card = ({day, children, addNewPost}) => {
    const [newPost, setNewPost] = useState('')

    const submitPost = e => {
        e.preventDefault() 

        if (newPost) {
            const post = {
                text: newPost,
                day,
                user_id: 1,
                group_id: 1
            }

            postsServices.addPost(post)
                .then((res) => {
                    console.log(res)
                    addNewPost({...post, author: 'Robbie'})
                    setNewPost('')
                })
              .catch(err => console.log('err', err.message))
            }
    }
    
    return (
        <div className='card' id={day}>
            <CardHeader day={day} />
            {children}
            <CardForm 
                onSubmit={submitPost} 
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