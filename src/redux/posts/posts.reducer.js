import PostsActionTypes from './posts.types' 

const initial_state = null 

const postsReducer = (state=initial_state, action) => {
    switch (action.type) {
        case PostsActionTypes.SET_POSTS:
            return action.payload
        
        case PostsActionTypes.ADD_POST:
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

export default postsReducer