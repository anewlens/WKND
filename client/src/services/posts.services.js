import axios from 'axios'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

export default {
    getPosts: async (req) => {
        setToken(req.token)
        
        const config = {
            headers: { Authorization: token }
        }

        return axios.get('/posts/combined', config)
            .then(posts =>posts.data.map(
                ({id, text, createdAt, day, user}) => ({
                    id, text, createdAt, day, author: user.name
                })
            ))
    },
    addPost: (post, req) => {
        setToken(req.token)

        const config = {
            headers: { Authorization: token }
        }

        return axios.post('/posts/add', post, config)
    }
}