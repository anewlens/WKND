import React from 'react'
import Activities from './Activities'

const Card = ({day}) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <h2 className='day'>{day}</h2>
                <button className='ellipses'></button>
            </div>
            <Activities />
        </div>
    )
}

export default Card