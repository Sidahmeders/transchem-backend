import express from 'express'
import cors from './src/config/cors.js'
import apis from './src/apis/routes/index.js'

const server = express()

server.use(cors)
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api', apis)

const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`server running on port ${PORT}..`))