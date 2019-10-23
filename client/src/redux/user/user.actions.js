import UserActionTypes from './user.types.js'

export const setUser = user => ({
    type: UserActionTypes.SET_USER,
    payload: user
})