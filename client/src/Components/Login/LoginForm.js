import React, { useState } from 'react'
import { connect } from 'react-redux'
import userServices from '../../services/user.services'
import { setPosts } from '../../redux/posts/posts.actions'
import { setComments } from '../../redux/comments/comments.actions'
import { setUser } from '../../redux/user/user.actions'
import { toggleLoading } from '../../redux/loading/loading.actions'
import getAll from '../../services/data.services'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import FormInput from '../Inputs/FormInput'
import CustomButton from '../Buttons/CustomButton'

const LoginForm = ({setCurrentPosts, setCurrentComments, setUser, toggleLoading}) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState(null)

    const loginHandler = async e => {
        e.preventDefault()
        try {
            const user = await userServices.login(username, password)
            
            if (user) {
                const {posts, comments} = await getAll(user)
                setUser(user)
                setCurrentPosts(posts)
                setCurrentComments(comments)
                toggleLoading()
                localStorage.setItem('localUser', JSON.stringify(user))
            }
        } catch(error) {
            console.log("ERROR", error)

            setErrorMessage('Invalid username/password')
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000);
        }
    }

      const errorStyles = errorMessage ?
        { borderColor: 'red' }
        : null

    return (
        <form onSubmit={loginHandler} className='login-form'>
            <FormInput
                type='text'
                placeholder='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={errorStyles} />
            <FormInput 
                type='password'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={errorStyles} />
            <CustomButton className={`login-button ${username && password ? 'glow' : null}`}>
                Login
            </CustomButton>

            <ErrorMessage message={errorMessage} />
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setCurrentPosts: posts => dispatch(setPosts(posts)),
    setCurrentComments: comments => dispatch(setComments(comments)),
    toggleLoading: () => dispatch(toggleLoading())
})

export default connect(null, mapDispatchToProps)(LoginForm)