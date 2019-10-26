import axios from 'axios'

export default {
    login: async (un, pw) => {
        const res = await axios.post('/login', {username: un, password: pw})
        return res.data
    },
    checkUser: async username => {
        const res = await axios.post('/users', { username })
        
        if (res.data === 'taken') {
            return true
        } else if (res.data === 'not taken') {
            return false
        }
    },
    create: async (name, username, password, group_id) => {
        const res = await axios.post('/users/add', {name, username, password, group_id})

        return res.data
    }
}