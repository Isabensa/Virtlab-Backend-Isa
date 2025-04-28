const express = require('express');
const router = express.Router();

const {
  crearClase,
  obtenerClases,
  obtenerClasePorId,
  actualizarClase,
  eliminarClase,
  asociarAlumnos
} = require('../controllers/claseController');

// Crear aula
router.post('/', crearClase);

// Obtener todas las aulas
router.get('/', obtenerClases);

// Obtener una aula por ID
router.get('/:id', obtenerClasePorId);

// Actualizar aula
router.put('/:id', actualizarClase);

// Eliminar aula
router.delete('/:id', eliminarClase);

// Asociar alumnos a un aula
router.put('/:id/alumnos', asociarAlumnos);

module.exports = router;
