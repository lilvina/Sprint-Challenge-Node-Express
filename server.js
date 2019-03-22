const express = require('express')
const helmet = require('helmet')

const server = express()
const actionRouter = require('./actions/actionRouter.js')
//const projectRouter = require('./projects/projectRouter.js')

server.use(express.json())
server.use(helmet())

server.use('/api/action', actionRouter)

server.get('/', (req, res) => {
  res.send(`
    <h1>Lambda Sprint Challenge</h1>
    <p>Welcome to the Sprint Challenge for Node and Express</p>`)
})

module.exports = server
