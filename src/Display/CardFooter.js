import React from 'react'

const CardFooter = ({day}) => {
    const handleReject = () => {
        const currentDay = document.getElementById(day)
        currentDay.classList.add('rejected')
    }
    
    const handleAccept = () => {
        const currentDay = document.getElementById(day)
        currentDay.classList.add('accepted')
    }
    return (
        <div className='cardFooter'>
            <button className='reject' onClick={handleReject}>X</button>
            <button className='accept' onClick={handleAccept}>&#x2714;</button>
        </div>
    )
}

export default CardFooter