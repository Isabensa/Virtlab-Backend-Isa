const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' })

    const esValido = await bcrypt.compare(password, user.password)
    if (!esValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta' })

    const token = jwt.sign(
      {
        id: user._id,
        rol: user.rol,
        nombre: user.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    )

    res.json({
      token,
      usuario: {
        id: user._id,
        nombre: user.nombre,
        rol: user.rol
      }
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error en el servidor' })
  }
})

module.exports = router
