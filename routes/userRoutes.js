const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/authMiddleware');
const {
  registrarUsuario,
  loginUsuario,
  obtenerUsuarioPorId,
  obtenerUsuariosPaginados, 
  editarUsuario,
  eliminarUsuario
} = require('../controllers/userController');

// GET /api/usuarios - Obtener todos los usuarios paginados
router.get('/', verificarToken, obtenerUsuariosPaginados);

// POST /api/usuarios/register - Crear un nuevo usuario
router.post('/register', registrarUsuario);

// POST /api/usuarios/login - Login de usuario
router.post('/login', loginUsuario);

// GET /api/usuarios/privado - Ruta protegida con token
router.get('/privado', verificarToken, (req, res) => {
  res.json({
    mensaje: `Hola, ${req.usuario.nombre}, accediste a contenido protegido como ${req.usuario.rol}`
  });
});

// GET /api/usuarios/:id - Obtener un usuario por ID
router.get('/:id', obtenerUsuarioPorId);

// PUT /api/usuarios/:id - Editar usuario
router.put('/:id', editarUsuario);

// DELETE /api/usuarios/:id - Eliminar usuario
router.delete('/:id', eliminarUsuario);

module.exports = router;
