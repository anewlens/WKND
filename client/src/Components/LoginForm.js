import React, { useState } from 'react'

const LoginForm = ({ loginHandler }) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const usernameHandler = e => {
        setUsername(e.target.value)
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
    }



    return (
        <form onSubmit={loginHandler} className='loginForm'>
            <input
                type='text'
                className='loginInput' 
                placeholder='username'
                value={username}
                onChange={usernameHandler} />
            <input 
                type='password'
                className='loginInput' 
                placeholder='password'
                value={password}
                onChange={passwordHandler} />
            <button className={`loginButton ${username && password ? 'glow' : null}`}>Login</button>
        </form>
    )
}

export default LoginForm