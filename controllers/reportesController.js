const User = require('../models/User')
const Clase = require('../models/Clase')
const Tema = require('../models/Tema')

const obtenerResumen = async (req, res) => {
  try {
    const usuarios = await User.countDocuments()
    const clases = await Clase.countDocuments()
    const visitasSimulaciones = await Tema.aggregate([
      { $group: { _id: null, total: { $sum: "$contadorVisitas" } } }
    ])

    res.json({
      usuarios,
      clases,
      visitasSimulaciones: visitasSimulaciones[0]?.total || 0
    })
  } catch (error) {
    console.error('Error al obtener resumen:', error)
    res.status(500).json({ mensaje: 'Error al obtener resumen' })
  }
}

module.exports = { obtenerResumen }
