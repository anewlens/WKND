import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../redux/posts/posts.actions'
import Textarea from 'react-textarea-autosize';
import CardHeader from './CardHeader'
import TextInput from '../Inputs/TextInput'
import CustomButton from '../Buttons/CustomButton'
import './card.scss'

const Card = ({day, children, addNewPost}) => {
    const [expanded, expandCard] = useState(false)
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
        <div className={`card ${expanded ? 'expanded' : null}`} id={day}>
            <CardHeader day={day} />
            {children}
            <form className="card-newPost" onSubmit={handleSubmit}>

                <Textarea placeholder='Add new post' value={newPost} onChange={e => setNewPost(e.target.value)} className="card-newPost-input"/>
                <CustomButton type='submit' className='card-newPost-button'>
                    Post
                </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNewPost: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(Card)