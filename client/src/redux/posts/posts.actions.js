import PostsActionTypes from './posts.types.js'

export const setPosts = posts => ({
    type: PostsActionTypes.SET_POSTS,
    payload: posts
})

export const addPost = post => ({
    type: PostsActionTypes.ADD_POST,
    payload: post
})

export const addComment = comment => ({
    type: PostsActionTypes.ADD_COMMENT,
    payload: comment
})