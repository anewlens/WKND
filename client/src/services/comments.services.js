import axios from 'axios'

export default {
    getComments: () => 
        fetch('/comments/combined')
            .then(res => res.json())
            .then(comments => comments.map(
                ({id, text, createdAt, post_id, user}) => ({
                id, text, createdAt, post_id, author: user.name
                })
            )),
    addComment: comment => axios.post('http://localhost:4000/comments/add', comment)
}