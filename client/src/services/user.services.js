import axios from 'axios'

export default {
    login: (un, pw) => axios.post('http://localhost:4000/login', {username: un, password: pw})
}