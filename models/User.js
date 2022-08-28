const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
  URLticket: String,
  numberTicket: Number
})

userSchema.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
    delete returnedObjet.password
  }
})

const User = model('User', userSchema)

module.exports = User