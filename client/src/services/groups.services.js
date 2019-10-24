import axios from 'axios'

export default {
    check: async (gName, gID) => {
        const res = await axios.post('http://localhost:4000/groups', {name: gName, id: gID})

        if (res.data === 'group found') {
            return true
        } else if (res.data === 'no group found') {
            return false
        }
    },
    create: async (gName, gID) => {
        const res = await axios.post('http://localhost:4000/groups/add', {name: gName, id: gID})

        return res.data
    }
}