const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())
let artists = [
  {
    id: '1',
    name: 'Andres Koller',
    biografia: 'Andres Koller es un DJ/Productor de la ciudad de Rosario - Argentina. A muy temprana edad comenzó a interiorizarse en la música electrónica en general.Su genero main es el Techno.Actualmente con 25 años logro presentarse en grandes fiestas de renombre de Argentina, Mexico, Estados Unidos y Chile, compartiendo cabina con varios referentes nacionales e internacionales tales como, Adam Beyer, Pan- Pot, Victor Ruiz, Nicolás Taboada, Beico, entre otros.Su etapa de producción musical comienza a principios del 2018, editando para grandes sellos como Made In Brussels, SK Recordings, Distance Music.Recibiendo varios supports de Dj\'s internacionales. Hoy dedica todo su tiempo a la música para mostrarle al publico su manera de crear un estilo único cuando se trata de crear un DJ set y también al crear nueva música con su propia marca.',
    urlImages: {
      img1: '../images/andres/andres-1.jpg',
      img2: '../images/andres/andres-2.jpg',
      img3: '../images/andres/andres-3.JPG'
    },
    socialLinks: {
      youTube: 'https://www.youtube.com/channel/UCIrQzbuSadcN5Cj5JQ1SqCA',
      soundCloud: 'https://soundcloud.com/andreskolleroficial',
      spotify: 'https://open.spotify.com/artist/7BrU1gbgI2aA4H5oUHmbSN',
      instagram: 'https://www.instagram.com/andreskoller/?hl=es-la'
    }
  },
  {
    id: '2',
    name: 'Geronimo Gonzalez',
    biografia: 'Nacido en la ciudad de Gualeguaychú - Entre ríos el 28 de septiembre de 1998 inicie en el mundo de la música en 2015, dedicándome por completo a la música electrónica en 2019. Pasando por varios estilos a lo largo de estos años me he decidido por los sonidos del minimal techno, techno y side trans. Tuve el placer de compartir cabina con grandes artistas como Camila Cheka, Guada Bonin, Luciano Vidal, Valentín Bianchi, Sebastián Carreras, Pinco, Nacho Scoppa, Marino, Marianelo, entre otros. Logrando así presentarme en clubes y fiestas como crobar(Bs As), dvne park(Bs As), PM(Concepción del Uruguay) Pakafter (Colon) entre otras.',
    urlImages: {
      img1: '../images/gero/gero-1.jpg',
      img2: '../images/gero/gero-2.jpg',
      img3: '../images/gero/gero-3.jpeg'
    },
    socialLinks: {
      youTube: null,
      soundCloud: 'https://soundcloud.com/geronimogonzalezz',
      spotify: null,
      instagram: 'https://www.instagram.com/geronimogonzalezz_/?hl=es-la'
    }
  },
  {
    id: '3',
    name: 'Facundo Asin',
    biografia: 'Facundo Asin es un DJ nacido en Concepción del Uruguay - Entre ríos, un 17 de mayo del 2000. Su amor por la música electrónica desde pequeño lo llevó a involucrarse en el rubro desde sus 17 años, compartiendo y aprendiendo constantemente cómo mejorar. Inició en el mundo de la música electrónica tocando TechHouse, pero con el pasar del tiempo fue indagando y descubriendo cuál sería su identidad musical, lo que lo llevó a descubrir su gusto por el Techno. Actualmente sus sets se ven formados por mucho groove y melodías del House acompañadas con la fuerza y percusión del Techno. Sus presentaciones se vieron en fiestas y clubes como NightHouse(Colón), Post Brigado Crew(Concordia), TheRoom(Zero - Gualeguaychú), Pm(Concepción del Uruguay), TheRoom(Living - Gualeguaychú), Arcade(Concepción del Uruguay), SunsetPark(Colón), Post Sebastián Carreras(Gualeguaychú). Lo que lo llevó a compartir cabina con artistas como Agustín Recoba, Santiago Mostto, Marianelo, Gerónimo González, Fede Mattio, Joaquín Cossi, C Tabarezzi, Mariano Pr, Luciano Fredes, Marisol.Rk, Galarza, entre otros',
    urlImages: {},
    socialLinks: {
      youTube: null,
      soundCloud: 'https://soundcloud.com/facuu-asin',
      spotify: null,
      instagram: 'https://www.instagram.com/facu_asin/?hl=es-la'
    }
  },
  {
    id: '4',
    name: 'Luciano Vidal',
    biografia: 'Luciano Gabriel Vidal es un DJ de 25 años nacido en la ciudad de Mar del Plata (B.A), viviendo desde su niñez en Concepción del Uruguay (E.R). Su carrera de DJ comenzó a la edad de 20 años cuando emigró a Uruguay y por su cuenta aprendió este arte. Con preferencias por generos como  Melodic House/ Techno, Minimal DeepTech, Progressive. Ha tocado en fiestas y clubes como: Crobrar Club(B.A), DunePark(B.A), La Rave(Punta del Diablo UY), Peca2(Córdoba), Look Me(Córdoba).Compartió cabina con Dj\'s como Martin Huergo, Car-los Ruiz, Juan Pryor, Ariel Rodz, Andrés Koller, Mosher, Dante Filcanavo, Guada Bonnin, Julio Binci, Fede Mattio, Marianelo, Marino, Haze (uy).Se puede ver su despliegue en cabina que se lo caracteriza porque su estilo es inmersivo y se inclina hacia sonidos melódicos profundos, con suaves percusiones resonantes que crean vibraciones edificantes e hipnóticas en la pista de baile.Con su peculiar personalidad logra llegar al público de una manera única.',
    urlImages: {
      img1: '../images/peke/peke-2.jpg',
      img2: '../images/peke/peke-3.jpg',
      img3: '../images/peke/peke-4.jpg'
    },
    socialLinks: {
      youTube: null,
      soundCloud: 'https://soundcloud.com/luciano-vidal-dj',
      spotify: 'https://open.spotify.com/artist/11F9PoFZkfNyhisK8cRNQi?si=ggPSTnUbRuqIwyfmI3P0Yg&nd=1',
      instagram: 'https://www.instagram.com/lucianovidal_dj/'
    }
  },
  {
    id: '5',
    name: 'Gabriel Rojas',
    biografia: 'Gabriel Rojas tiene 25 años y es oriundo de la ciudad de Concepción del Uruguay (E.R). A sus 18 años emigró hacia Capital Federal (B.A) donde se inició como Dj. Su preferencia por el House y habilidad a la hora de la mezcla, hacen que sus sets puedan contener varios géneros como Deep Tech, Progressive y Melodic.En los que busca bajos potentes, melodías finas y vocales que forman una cálida atmósfera en la pista de baile. Se ha presentado en distintos clubes y fiestas, como lo son Aurora(E.R), Forest(E.R) y La biblioteca(B.A).Compartiendo cabina con Dj´s como Zagitar, Luciano Vidal, Marino, Marianelo, entre otros.',
    urlImages: {
      img1: '../images/gabi/gabi-1.jpeg',
      img2: '../images/gabi/gabi-2.jpeg',
      img3: '../images/gabi/gabi-3.jpeg'
    },
    socialLinks: {
      youTube: null,
      soundCloud: 'https://soundcloud.com/gabriel-rojas-109',
      spotify: null,
      instagram: 'https://www.instagram.com/ggabi_ro/'
    }
  }
]

let users = [
  {
    'id': 1,
    'fullName': 'Santiago Mostto',
    'username': 'Santimostto',
    'password': 'Santimostto',
    'URLticket': 'url',
    'numberTicket': 1,
  },
  {
    'id': 2,
    'fullName': 'Fran Pibu',
    'username': 'Franpibu',
    'password': 'Franpibu',
    'URLticket': 'url',
    'numberTicket': 2,
  }
 
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})



app.get('/api/users', (request, response) => {
  response.json(users)
})

app.get('/api/users/:username', (request, response) => {
  const username = request.params.username
  const user = users.find(user => user.username === username)
  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})

app.post('/api/users', (request, response) => {
  const user = request.body
  const ids = users.map(user => user.id)
  const maxId = Math.max(...ids)
  const numbersTickets = users.map(user => user.numberTicket)
  const maxNumerTicket = Math.max(...numbersTickets)
  const newUser={
    id : maxId + 1,
    fullName: user.fullName,
    username: user.username,
    password: user.password,
    URLticket: typeof user.URLticket !== 'undefined' ? user.URLticket : null,
    numberTicket: maxNumerTicket + 1
  }
  users = [...users, newUser]
  response.json(newUser)
})

app.get('/api/artists', (request, response) => {
  response.json(artists)
})

app.get('/api/artists/:name', (request, response) => {
  const artistName = request.params.name
  const artist = artists.find(artist => artist.name === artistName)

  if (artist) {
    response.json(artist)
  } else {
    response.status(404).end()
  }

})

app.use((request, response) => {
  response.status(404).json().end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
