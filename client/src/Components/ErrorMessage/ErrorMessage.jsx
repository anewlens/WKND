import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = ({message}) => (
    <div className="errorMessage" style={{opacity: message ? .8 : 0}}>
        {message ? message : null}
    </div>
)

export default ErrorMessage