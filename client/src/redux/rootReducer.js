import { combineReducers } from 'redux'
import postsReducer from './posts/posts.reducer'
import commentsReducer from './comments/comments.reducer'
import userReducer from './user/user.reducer'
import loadingReducer from './loading/loading.reducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    loading: loadingReducer
})

export default rootReducer