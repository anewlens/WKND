import React from 'react'

const Icon = ({icon, path, handleIcon, viewBox}) => {
    return (
        <div className='button' onClick={handleIcon}>
            <svg className='icon' id={icon} viewBox={viewBox} >
                <path fill='currentColor' d={path}></path>
            </svg>
        </div>
    )
}

export default Icon