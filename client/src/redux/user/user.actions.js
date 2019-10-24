import UserActionTypes from './user.types.js'

export const setUser = user => {
    const localUser = JSON.parse(window.localStorage.getItem('localUser'))

    if (!localUser) {
        window.localStorage.setItem('localUser', JSON.stringify(user))
    }

    return {
        type: UserActionTypes.SET_USER,
        payload: user
    }
}