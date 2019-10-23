import UserActionTypes from './user.types' 

const initial_state = null 

const userReducer = (state=initial_state, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return action.payload

        default:
            return state
    }
}

export default userReducer