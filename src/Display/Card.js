import React from 'react'
import Activities from './Activities'
import CardFooter from './CardFooter'

const Card = ({day}) => {
    const handleMenu = e => {
        e.target.classList.toggle('open')
    }

    return (
        <div className="card" id={day}>
            <div className='cardHeader'>
                <h2 className='day'>{day}</h2>
                <button className='ellipses' onClick={handleMenu}></button>
            </div>
            <Activities />
            <CardFooter day={day}/>
        </div>
    )
}

export default Card