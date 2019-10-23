const express = require('express')
const cors = require('cors')
require('dotenv').config()

const db = require('./config/db')
const app = express()
const port = process.env.PORT || 4000

//test db
db.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log('ERROR', err))

app.use(cors())
app.use(express.json())

app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))
app.use('/groups', require('./routes/groups'))
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))
app.use('/comments', require('./routes/comments'))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`WKND listening on port ${port}`))