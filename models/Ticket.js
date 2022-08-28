const { Schema, model } = require('mongoose')

const ticketSchema = new Schema({
  nameTicket: String,
  numberTicket: Number,
  email: String
})

ticketSchema.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
  }
})
const Ticket = model('Ticket', ticketSchema)


module.exports = Ticket