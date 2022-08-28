const loguinRouter = require('express').Router()
const User = require('../models/User')

loguinRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, password } = body

  const user = await User.findOne({username})
  const passwordCorrect = user === null
    ? false
    : await password

  if(!passwordCorrect){
    response.status(401).json({error: 'invalid user or password'})
  }

  response.send({
    fullName: user.fullName,
    numberTicket: user.numberTicket,
    URLticket : user.URLticket
  })
})


module.exports = loguinRouter