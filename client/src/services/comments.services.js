import axios from 'axios'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

export default {
    getComments: (req) => {
        setToken(req.token)

        const config = {
            headers: { Authorization: token }
        }

        return axios.get('http://localhost:4000/comments/combined', config)
            .then(comments => comments.data.map(
                ({id, text, createdAt, post_id, user, group_id}) => ({
                    id, text, createdAt, post_id, group_id, author: user.name
                })
            ))
            .catch(err => console.log(err))
    },
    addComment: (comment, user) => {
        setToken(user.token)

        const config = { 
            headers: { Authorization: token }
        }

        return axios.post('http://localhost:4000/comments/add', comment, config)
    }
}