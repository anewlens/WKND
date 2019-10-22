import { combineReducers } from 'redux'
import postsReducer from './posts/posts.reducer'
import commentsReducer from './comments/comments.reducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})

export default rootReducer