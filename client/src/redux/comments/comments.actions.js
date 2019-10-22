import CommentsActionTypes from './comments.types.js'

export const setComments = comments => ({
    type: CommentsActionTypes.SET_COMMENTS,
    payload: comments
})

export const addComment = comment => ({
    type: CommentsActionTypes.ADD_COMMENT,
    payload: comment
})