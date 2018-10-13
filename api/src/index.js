const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const apiServer = express()
apiServer.use(morgan('combined'))
apiServer.use(bodyParser.json())
apiServer.use(cors())

mongoose.connect('mongodb://localhost:27017/economy')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Could not connect to server! :/'))
db.once('open', callback => {
  console.log('Connected to database, yey! 8)')
})

apiServer.get('/test', (request, response) => {
  response.send(
    [{
      test: "Yeah!"
    }]
  )
})

apiServer.listen(process.env.PORT || 8081)
