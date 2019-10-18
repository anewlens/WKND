import React from 'react'
import Textarea from 'react-textarea-autosize';
import CustomButton from '../Buttons/CustomButton'
import {ReactComponent as Send} from '../SVGs/send4.svg'

const CardForm = ({onSubmit, className, value, onChange, label}) => (
    <form className={`card-form ${className}`} onSubmit={onSubmit}>
        <Textarea placeholder={`Add new ${label}`} value={value} onChange={e => onChange(e.target.value)} className="card-form-input"/>
        <CustomButton type='submit' className='card-form-button'>
            <Send style={{fill: value ? 'hsl(184, 40%, 50%)' : 'hsl(0,0%,100%,.25)'}} />
        </CustomButton>
    </form>
)

export default CardForm