import React from 'react'

const Header = props => {
    const dates = () => {
        let today = new Date

    }
    return (
        <header>
            <div className="headerText">
                <h1 className="wkndTitle">WKND</h1>
                <h4 className='dates'>{dates()}</h4>
            </div>
            <div className="profileImg">
                
            </div>
        </header>
    )
}

export default Header