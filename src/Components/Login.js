import React from 'react'
import LoginForm from './LoginForm'
import '../CSS/login.css';

const Login = ({loginHandler}) => {
    return (
        <div className='login'>
            <h1 className="loginTitle">WKND</h1>
            <LoginForm 
            loginHandler={loginHandler}/>
        </div>
    )
}

export default Login