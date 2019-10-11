import React from 'react'
import Textarea from 'react-textarea-autosize';
import CustomButton from '../Buttons/CustomButton'

const CardForm = ({onSubmit, className, value, onChange, label}) => (
    <form className={`card-form ${className}`} onSubmit={onSubmit}>
        <Textarea placeholder={`Add new ${label}`} value={value} onChange={e => onChange(e.target.value)} className="card-form-input"/>
        <CustomButton type='submit' className='card-form-button'>
            Post
        </CustomButton>
    </form>
)

export default CardForm