import React from 'react'
import { useSelector } from 'react-redux'
import './header.scss'

const Header = () => {

    const groupName = useSelector(state => state.user.group_name)

    return(
        <header className='header'>
            <h1 className="header-title">WKND</h1>
            <div className="header-group">
                {groupName}
            </div>
        </header>
)
}
export default Header