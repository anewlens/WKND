import axios from 'axios'

export default {
    getPosts: () => 
        fetch('/posts/combined')
            .then(res => res.json())
            .then(posts =>posts.map(
                ({id, text, createdAt, day, user}) => ({
                    id, text, createdAt, day, author: user.name
                })
            )),
    addPost: post => axios.post('http://localhost:4000/posts/add', post)
}