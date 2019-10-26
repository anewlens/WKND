import React, {useState} from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './UserWrapper.scss'
import CustomButton from '../Buttons/CustomButton'

const UserWrapper = () => {
    const [view, setView] = useState('login')

    function handleView() {
        console.log('click')
        if (view === 'login') {
            setView('sign up')
        } else if (view === 'sign up') {
            setView('login')
        }
    }

    return (
        <div className='userWrapper'>
            <Login show={view === 'login'}>
                <CustomButton onClick={handleView} className='userWrapper-button'>
                    Don't have an account?
                </CustomButton>
            </Login>
            <Signup show={view === 'sign up'}>
                <CustomButton onClick={handleView} className='userWrapper-button'>
                        Have an account?
                    </CustomButton>    
            </Signup>
        </div>
    )
}

export default UserWrapper