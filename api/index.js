const express = require('express')
const path = require('path')
const cors = require('cors')

const db = require('./config/db')
const logger = require('./middleware/logger')
const posts = require('./data/posts')
const comments = require('./data/comments')
const app = express()
const port = process.env.PORT || 4000

//test db
db.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log('ERROR', err))

app.use(cors())
app.use(express.json())
// app.use(logger)

app.use('/groups', require('./routes/groups'))
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))
app.use('/comments', require('./routes/comments'))

app.get('/', (req, res) => res.send('Hello World'))

app.get('/fake', (req, res) => res.send({posts, comments}))

app.listen(port, () => console.log(`WKND listening on port ${port}`))