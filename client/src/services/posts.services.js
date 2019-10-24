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

        return axios.get('http://localhost:4000/posts/combined', config)
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

        return axios.post('http://localhost:4000/posts/add', post, config)
    }
}