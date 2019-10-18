const express = require('express')
const app = express()
const port = 4000
const data = require('./data/posts')

app.get('/', (req, res) => res.send('Hello World'))
app.get('/posts', (req, res) => res.send(data))

app.listen(port, () => console.log(`Example app listening on port ${port}`))