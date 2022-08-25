const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://juan:260419990Oliver@cluster0.wyilde3.mongodb.net/users?retryWrites=true&w=majority'

const {Schema} = mongoose
const {model} = mongoose
mongoose.connect(connectionString)
  .then(() => {
    console.log('database conected')
  }).catch(err => {
    console.log(err)
  })

const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
  URLticket: String,
})

const User = model('User', userSchema)

const user = new User({
  fullName: 'Franco Oliver',
  username: 'Francooliver',
  password: 'Francooliver',
  URLticket: 'https/:dasdasdasd'
})

user.save()
  .then(result => {
    console.log(result)
    mongoose.connection.close()
  })
  .catch((err)=> {
    console.log(err)
  })