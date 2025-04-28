const express = require('express')
const router = express.Router()
const { obtenerResumen } = require('../controllers/reportesController')
const verificarToken = require('../middleware/authMiddleware') // 

// GET /api/reportes - Resumen general
router.get('/', verificarToken, obtenerResumen)

module.exports = router
