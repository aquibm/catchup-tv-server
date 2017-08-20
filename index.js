require('dotenv').config({ path: './conf.env' })
const express = require('express')
const elasticsearch = require('elasticsearch')

const app = express()
const elasticClient = new elasticsearch.Client({
    host: process.env.ELASTIC_HOST
})

app.get('/', async (req, res) => {
    const { q } = req.query

    if (!q) return res.status(400).send('No query specified')

    const results = await elasticClient.search({
        index: process.env.ELASTIC_INDEX_NAME,
        q: `name:${q}`
    })

    res.json(results)
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
