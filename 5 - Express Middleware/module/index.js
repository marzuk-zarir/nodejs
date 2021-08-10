const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const logger = require('./loggerMiddleware')

// ? Configurable middleware
// * it returns middleware as parameter config
app.use(logger({ log: true }))
app.all('*', (req, res) => {
    res.send('Hello Express')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
