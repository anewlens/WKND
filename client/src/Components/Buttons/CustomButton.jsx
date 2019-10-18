import React from 'react'

const CustomButton = ({onClick, children, className, type}) => (
    <button onClick={onClick} className={className} type={type}>
        {children}
    </button>
)

export default CustomButton