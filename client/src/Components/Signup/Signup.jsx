import React from 'react'
import SignupForm from './SignupForm'
import './Signup.scss'

const Signup = ({show, children}) => {

    return (
        <main className={`signup ${show ? 'show' : null}`}>
            <h1 className="signup-title">WKND</h1>
            <SignupForm />
            {children}
        </main>
    )
}

export default Signup