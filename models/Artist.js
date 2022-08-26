
const { Schema, model } = require('mongoose')

const artistSchema = new Schema({
  name: String,
  urlName: String,
  biografia: String,
  urlImages: {
    img1: String,
    img2: String,
    img3: String
  },
  socialLinks: {
    youTube: String,
    soundCloud: String,
    spotify: String,
    instagram: String
  }
})


artistSchema.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id =returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
  }
})



const Artist = model('Artist', artistSchema)

module.exports = Artist