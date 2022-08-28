require('dotenv').config()
require('./mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const Artist = require('./models/Artist')
const User = require('./models/User')
const Ticket = require('./models/Ticket')
const PointsOfSale = require('./models/PointsOfSale')
const notFound = require('./midelware/notFound.js')
const handleErrors = require('./midelware/handleErrors.js')
const ticketsRouter = require('./controllers/tickets')
const loguinRouter = require('./controllers/loguin')
app.use(express.json())
app.use(cors())

// Index API
app.get('/', (request, response) => {
  response.send('<h1>API de Between Rivers</h1>')
})
// API Artists
app.get('/api/artists', (request, response) => {
  Artist.find({}).then(artists => {
    response.json(artists)
  })

})

app.get('/api/artists/:id', (request, response, next) => {
  const { id } = request.params
  Artist.findById(id).then(artist => {
    if (artist) {
      return response.json(artist)
    } else {
      response.status(404).end()
    }
  })
    .catch(err => next(err))
})

//API Tickets
app.get('/api/tickets', (request, response) => {
  Ticket.find({}).then(tickets => {
    response.json(tickets)
  })
})

app.get('/api/tickets/:id', (request, response, next) => {
  const { id } = request.params

  Ticket.findById(id)
    .then(ticket => {
      if (ticket) {
        response.json(ticket)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

})

app.use('/api/tickets', ticketsRouter)

// API Users
app.get('/api/users', (request, response) => {
  User.find({}).then(users => {
    response.json(users)
  })

})

app.get('/api/users/:id', (request, response, next) => {
  const {id} = request.params
  User.findById(id)
    .then(users => {
      if (users) {
        response.json(users)
      } else {
        response.status(404).end()
      }
    }).catch(err => {
      next(err)
    })
})

app.use('/api/login', loguinRouter)

// Point of Sale
app.get('/api/points', (request, response) => {
  PointsOfSale.find({}).then(points=>{
    response.json(points)
  })
})

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
