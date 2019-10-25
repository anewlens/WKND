import React from 'react'
import './FormInput.scss'

const FormInput = props => (
    <div className='formInput'>
        {
            props.value && <label className="formInput-label">{props.placeholder}</label>
        }
        <input className='formInput-input' {...props} required />
    </div>
)

export default FormInput