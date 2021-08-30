const express = require('express')
const mongoose = require('mongoose')
const todoRouter = require('./todoRouter')

const app = express()
const port = process.env.PORT || 3000

mongoose
    .connect('mongodb://localhost/todos')
    .then(() => console.log('Database Connection Successful'))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

app.use(express.json())
app.use('/todo', todoRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
