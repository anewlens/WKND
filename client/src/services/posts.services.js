import axios from 'axios'

export default {
    getPosts: () => fetch('/fake').then(res => res.json()),
    addPost: post => axios.post('http://localhost:4000/posts/add', post)
}