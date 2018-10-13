const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const apiServer = express()
apiServer.use(morgan('combined'))
apiServer.use(bodyParser.json())
apiServer.use(cors())

apiServer.get('/test', (request, response) => {
  response.send(
    [{
      test: "Yeah!"
    }]
  )
})

apiServer.listen(process.env.PORT || 8081)
