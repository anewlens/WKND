import axios from 'axios'

export default {
    login: async (un, pw) => {
        const res = await axios.post('http://localhost:4000/login', {username: un, password: pw})
        return res.data
    }
}