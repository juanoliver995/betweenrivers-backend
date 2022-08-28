const ticketRouter = require('express').Router()
const Ticket = require('../models/Ticket')

ticketRouter.post('/', async(request, response) => {
  const {body} = request
  const {numberTicket, nameTicket, email} = body

  const ticket = new Ticket({
    numberTicket,
    nameTicket,
    email
  })

  const savedTicket = await ticket.save()
  response.status(201).json(savedTicket)
})

module.exports = ticketRouter