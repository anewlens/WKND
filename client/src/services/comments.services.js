import axios from 'axios'

export default {
    getComments: () => fetch('/comments').then(res => res.json()),
    addComment: comment => axios.post('http://localhost:4000/comments/add', comment)
}