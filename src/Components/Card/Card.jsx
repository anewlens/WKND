import React, { useState } from 'react'
import CardHeader from './CardHeader'
import './card.scss'
import CardPost from './CardPost'

const Card = ({day, children}) => {
    const [expanded, expandCard] = useState(false)
    
    return (
        <div className={`card ${expanded ? 'expanded' : null}`} id={day}>
            <CardHeader day={day} />
            {children}
        </div>
    )
}

export default Card