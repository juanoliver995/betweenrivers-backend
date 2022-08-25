const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://juan:260419990Oliver@cluster0.wyilde3.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(connectionString)
  .then(() => {
    console.log('database conected')
  }).catch(err => {
    console.log(err)
  })

