import React from 'react'
import LoginForm from './LoginForm'
import '../../styles/login.scss';

const Login = ({loginHandler}) => {
    return (
        <div className='login'>
            <h1 className="login-title">WKND</h1>
            <LoginForm loginHandler={loginHandler}/>
        </div>
    )
}

export default Login