import axios from 'axios'
import postServices from './posts.services'
import commentServices from './comments.services'

const getAll = (req) => 
    axios.all([postServices.getPosts(req), commentServices.getComments(req)])
        .then(axios.spread((posts, comments) => {
            return {posts, comments}
        }))
        
export default getAll

