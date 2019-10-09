import React from 'react'

const CardHeader = ({handleMenu, day}) => {
    return (
        <div className='card-header'>
            <h2 className='card-header-day'>{day}</h2>
            <button className='add' onClick={handleMenu}>
                +
            </button>
        </div>
    )
}

export default CardHeader