const express = require('express');
const router = express.Router();

const {
  crearTema,
  obtenerTemasPorAula,
  actualizarTema,
  eliminarTema,
  registrarVisita
} = require('../controllers/temaController');

// Obtener todos los temas de un aula
router.get('/:aulaId', obtenerTemasPorAula);

// Crear nuevo tema con ID de aula en URL
router.post('/:aulaId', crearTema);

// Actualizar un tema
router.put('/:id', actualizarTema);

// Eliminar un tema
router.delete('/:id', eliminarTema);

// Registrar visita
router.put('/:id/visitar', registrarVisita);

module.exports = router;
