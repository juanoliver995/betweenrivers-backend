const handleErrors = (error, request, response) => {
  console.error(error)
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'la id que intentas utilizar no es correcta' })
  } else {
    response.status(500).end()
  }
}

module.exports = handleErrors