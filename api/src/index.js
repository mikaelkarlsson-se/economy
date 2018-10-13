const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const Expense = require('./models/expense')

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

apiServer.post('/expense', (request, response) => {
  const newExpense = new Expense({
    title: request.body.title
  })

  newExpense.save(error => {
    response.send({
      success: error === null
    })
  })
})

apiServer.get('/expense', (request, response) => {
  Expense.find({}, 'title', (error, expenses) => {
    response.send({
      success: error === null,
      expenses
    })
  }).sort({_id: -1})
})

apiServer.listen(process.env.PORT || 8081)
