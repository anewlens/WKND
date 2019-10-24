import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../../redux/user/user.actions'
import { setPosts } from '../../redux/posts/posts.actions'
import { setComments } from '../../redux/comments/comments.actions'
import { toggleLoading } from '../../redux/loading/loading.actions'
import userServices from '../../services/user.services'
import groupsServices from '../../services/groups.services'
import getAll from '../../services/data.services'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import FormInput from '../Inputs/FormInput'
import CustomButton from '../Buttons/CustomButton'

const SignupForm = ({setUser, setPosts, setComments, toggleLoading}) => {

    const [un, setUN] = useState('')
    const [name, setName] = useState('')
    const [pw, setPW] = useState('')
    const [confirmPW, setConfirmPW] = useState('')
    const [groupName, setGroupName] = useState('')
    const [groupID, setGroupID] = useState('')
    const [ errorMessage, setErrorMessage ] = useState(null)

    const newError = message => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 3000);
    }

    const signupHandler = async e => {
        e.preventDefault()

        try {
            if (pw !== confirmPW) {
                newError('Passwords should match')
            } else {
                const taken = await userServices.checkUser(un)
                
                if (!taken) {
                    const groupCheck = await groupsServices.check(groupName, groupID)

                    if (groupCheck) {
                        userServices.create(name, un, pw, groupID)
                            .then(user => {
                                setUser(user)
                                return getAll(user)
                            })
                            .then(({posts, comments}) => {
                                setPosts(posts)
                                setComments(comments)
                                toggleLoading()
                            })
                    } else {
                        newError('Group does not exist')
                    }
                } else if (taken) {
                    newError('Username taken')
                }
            }
        } catch(err) {
            console.log(err)
        }
    } 

    return (
        <form className="signup-form" onSubmit={signupHandler}>
            <FormInput type='text' 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder='name' />
            <FormInput type='text'
                placeholder='username'
                value={un}
                onChange={e => setUN(e.target.value)} />
            <FormInput type='password' 
                placeholder='password'
                value={pw}
                onChange={e => setPW(e.target.value)} />
            <FormInput type='password'
                placeholder='confirm pw'
                value={confirmPW}
                onChange={e => setConfirmPW(e.target.value)} />
            
            <div className="signup-form-group">
                <FormInput type='text' 
                    placeholder='group name'
                    value={groupName}
                    onChange={e => setGroupName(e.target.value)} />
                <FormInput type='number' 
                    placeholder='group id'
                    value={groupID}
                    onChange={e => setGroupID(e.target.value)} />
            </div>

            <CustomButton className="signup-form-button">
                Create
            </CustomButton>

            <ErrorMessage message={errorMessage} />
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setPosts: posts => dispatch(setPosts(posts)),
    setComments: comments => dispatch(setComments(comments)),
    toggleLoading: () => dispatch(toggleLoading())
})

export default connect(null, mapDispatchToProps)(SignupForm)