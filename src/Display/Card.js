import React from 'react'
import Activities from './Activities'
import CardFooter from './CardFooter'

const Card = ({day}) => {
    return (
        <div className="card" id={day}>
            <div className='cardHeader'>
                <h2 className='day'>{day}</h2>
                <button className='ellipses'></button>
            </div>
            <Activities />
            <CardFooter />
        </div>
    )
}

export default Card