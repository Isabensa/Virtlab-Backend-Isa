const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

// Rutas
const userRoutes = require('./routes/userRoutes')
const claseRoutes = require('./routes/claseRoutes')
const temaRoutes = require('./routes/temaRoutes')
const reportesRoutes = require('./routes/reportesRoutes') 

dotenv.config()
connectDB()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Virtlab funcionando 🚀')
})

// Rutas API
app.use('/api/usuarios', userRoutes)
app.use('/api/clases', claseRoutes)
app.use('/api/temas', temaRoutes)
app.use('/api/reportes', reportesRoutes) 

// Iniciar servidor
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`)
})
