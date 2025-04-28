const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    // Validaciones
    if (!nombre || nombre.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nombre debe tener al menos 3 caracteres' });
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) {
      return res.status(400).json({ mensaje: 'Debe proporcionar un email válido' });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 6 caracteres' });
    }

    if (!['admin', 'docente', 'alumno', 'visitante'].includes(rol)) {
      return res.status(400).json({ mensaje: 'Rol inválido' });
    }

    const existeUsuario = await User.findOne({ email });
    if (existeUsuario) {
      return res.status(400).json({ mensaje: 'El usuario ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHasheado = await bcrypt.hash(password, salt);

    const nuevoUsuario = new User({
      nombre,
      email,
      password: passwordHasheado,
      rol
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión
const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        nombre: usuario.nombre,
        rol: usuario.rol
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

// Obtener un usuario por ID (sin contraseña)
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id).select('-password');
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    res.status(500).json({ mensaje: 'Error al buscar usuario' });
  }
};

// Obtener usuarios paginados
const obtenerUsuariosPaginados = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const usuarios = await User.find()
      .skip(skip)
      .limit(limit)
      .select('-password');

    const total = await User.countDocuments();

    res.json({
      usuarios,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Error al obtener usuarios paginados:', error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};

// Editar un usuario por ID
const editarUsuario = async (req, res) => {
  try {
    const { nombre, email, rol } = req.body;

    // Validaciones
    if (!nombre || nombre.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nombre debe tener al menos 3 caracteres' });
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) {
      return res.status(400).json({ mensaje: 'Debe proporcionar un email válido' });
    }

    if (!['admin', 'docente', 'alumno', 'visitante'].includes(rol)) {
      return res.status(400).json({ mensaje: 'Rol inválido' });
    }

    const usuario = await User.findByIdAndUpdate(
      req.params.id,
      { nombre, email, rol },
      { new: true }
    );

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario actualizado correctamente', usuario });
  } catch (error) {
    console.error('Error al editar usuario:', error);
    res.status(500).json({ mensaje: 'Error al editar usuario' });
  }
};

// Eliminar un usuario por ID
const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await User.findByIdAndDelete(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ mensaje: 'Error al eliminar usuario' });
  }
};

module.exports = {
  registrarUsuario,
  loginUsuario,
  obtenerUsuarioPorId,
  obtenerUsuariosPaginados,
  editarUsuario,
  eliminarUsuario
};
