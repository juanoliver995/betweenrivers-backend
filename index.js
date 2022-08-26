require('dotenv').config()
require('./mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const Artist = require('./models/Artist')
const User = require('./models/User')
const Ticket = require('./models/Ticket')
const notFound = require('./midelware/notFound')
const handleErrors = require('./midelware/handleErrors')


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
      response.json(artist)
    } else {
      response.status(404).end()
    }
  }).catch(error => {
    next(error)
  })
})

//API Tickets
app.get('/api/tickets', (request, response) => {
  Ticket.find({}).then(tickets => {
    response.json(tickets)
  })
})

app.get('/api/tickets/:id', (request, response, next) => {
  const {id} = request.params
  Ticket.find(id)
    .then(tickets => {
      if (tickets) {
        response.json(tickets)
      } else {
        response.status(404).end()
      }
    }).catch(err => {
      next(err)
    })

})

app.post('/api/tickets', (request, response) => {
  const userTicket = request.body

  if(!userTicket.nameTicket){
    return response.status(400).json({
      error: 'required "content" field is mising'
    })
  }

  const newTicket = new Ticket ({
    nameTicket : userTicket.nameTicket,
    numberTicket: userTicket.numberTicket,
  })

  newTicket.save().then(savedTicket => {
    response.json(savedTicket)
  })
})

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

app.use(notFound)

app.use(handleErrors)



const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
