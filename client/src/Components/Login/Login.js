import React from 'react'
import LoginForm from './LoginForm'
import '../../styles/login.scss';

const Login = ({show, children}) => (
    <div className={`login ${show ? 'show' : null}`}>
        <h1 className="login-title">WKND</h1>
        <LoginForm/>
        {children}
    </div>
)

export default Login