import React, { useState } from 'react'
import { connect } from 'react-redux'
import userServices from '../services/user.services'
import postsServices from '../services/posts.services'
import commentsServices from '../services/comments.services'
import { setPosts } from '../redux/posts/posts.actions'
import { setComments } from '../redux/comments/comments.actions'
import { setUser } from '../redux/user/user.actions'
import { toggleLoading } from '../redux/loading/loading.actions'

const LoginForm = ({setCurrentPosts, setCurrentComments, setUser, toggleLoading}) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState(null)

    const loginHandler = async e => {
        e.preventDefault()

        try {
            const user = await userServices.login(username, password)
            
            if (user) {
                const posts = await postsServices.getPosts()
                const comments = await commentsServices.getComments()
                setUser(user.data)
                setCurrentPosts(posts)
                setCurrentComments(comments)
                toggleLoading()
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
        {
          borderColor: 'red'
        }
        : null

    return (
        <form onSubmit={loginHandler} className='loginForm'>
            <input
                type='text'
                className='loginInput' 
                placeholder='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={errorStyles} />
            <input 
                type='password'
                className='loginInput' 
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={errorStyles} />
            <button className={`loginButton ${username && password ? 'glow' : null}`}>Login</button>

            <p className="loginForm-error" style={{opacity: errorMessage ? .8 : 0}}>{errorMessage}</p>
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