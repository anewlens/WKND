import CommentsActionTypes from './comments.types' 

const initial_state = null 

const commentsReducer = (state=initial_state, action) => {
    switch (action.type) {
        case CommentsActionTypes.SET_COMMENTS:
            return action.payload
        
        case CommentsActionTypes.ADD_COMMENT:
            return [
                ...state,
                {
                    id: state.length +2,
                    ...action.payload
                }
            ]

        default:
            return state
    }
}

export default commentsReducer