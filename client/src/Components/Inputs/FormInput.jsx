import React from 'react'
import './FormInput.scss'

const FormInput = props => (
    <input className='formInput' {...props} required />
)

export default FormInput