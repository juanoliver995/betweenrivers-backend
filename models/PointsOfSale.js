const { Schema, model } = require('mongoose')

const pointsOfSale = new Schema({
  city: String,
  name: String,
  igLink: String,
  wpLink: String,
})

pointsOfSale.set('toJSON', {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
  }
})
const PointsOfSale = model('PointOfSale', pointsOfSale)


module.exports = PointsOfSale