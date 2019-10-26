import axios from 'axios'

export default {
    check: async (gName, gID) => {
        const res = await axios.post('/groups', {name: gName, id: gID})

        if (res.data === 'group found') {
            return true
        } else if (res.data === 'no group found') {
            return false
        }
    },
    create: async (gName, gID) => {
        const res = await axios.post('/groups/add', {name: gName, id: gID})

        return res.data
    }
}