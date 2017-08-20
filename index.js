require('dotenv').config({ path: './conf.env' })
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('OK!')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
