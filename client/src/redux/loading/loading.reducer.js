import LoadingActionTypes from './loading.types' 

const initial_state = true 

const loadingReducer = (state=initial_state, action) => {
    switch (action.type) {
        case LoadingActionTypes.TOGGLE_LOADING:
            return !state

        default:
            return state
    }
}

export default loadingReducer