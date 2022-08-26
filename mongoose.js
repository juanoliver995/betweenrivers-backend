const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI

mongoose.connect(connectionString)
  .then(() => {
    console.log('database conected')
  }).catch(err => {
    console.log(err)
  })

// const artist = new Artist({
//   name: 'Andres Koller',
//   urlName: 'andreskoller',
//   biografia: 'Andres Koller es un DJ/Productor de la ciudad de Rosario - Argentina. A muy temprana edad comenzó a interiorizarse en la música electrónica en general.Su genero main es el Techno.Actualmente con 25 años logro presentarse en grandes fiestas de renombre de Argentina, Mexico, Estados Unidos y Chile, compartiendo cabina con varios referentes nacionales e internacionales tales como, Adam Beyer, Pan- Pot, Victor Ruiz, Nicolás Taboada, Beico, entre otros.Su etapa de producción musical comienza a principios del 2018, editando para grandes sellos como Made In Brussels, SK Recordings, Distance Music.Recibiendo varios supports de Dj\'s internacionales. Hoy dedica todo su tiempo a la música para mostrarle al publico su manera de crear un estilo único cuando se trata de crear un DJ set y también al crear nueva música con su propia marca.',
//   urlImages: {
//     img1: 'https://i.postimg.cc/fy8GpDzF/andres-1.jpg',
//     img2: 'https://i.postimg.cc/HW31V4w2/andres-2.jpg',
//     img3: 'https://i.postimg.cc/X7JSFGx0/andres-3.jpg'
//   },
//   socialLinks: {
//     youTube: 'https://www.youtube.com/channel/UCIrQzbuSadcN5Cj5JQ1SqCA',
//     soundCloud: 'https://soundcloud.com/andreskolleroficial',
//     spotify: 'https://open.spotify.com/artist/7BrU1gbgI2aA4H5oUHmbSN',
//     instagram: 'https://www.instagram.com/andreskoller/?hl=es-la'
//   }
// })

// artist.save()
//   .then(result => {
//     console.log(result)
//     mongoose.connection.close()
//   })
//   .catch((err)=> {
//     console.error(err)
//   })


// user.save()
//   .then(result => {
//     console.log(result)
//     mongoose.connection.close()
//   })
//   .catch((err)=> {
//     console.log(err)
//   })

