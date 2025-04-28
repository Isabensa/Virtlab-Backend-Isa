const Tema = require('../models/Tema');
const mongoose = require('mongoose');

// Crear nuevo tema con aulaId
const crearTema = async (req, res) => {
  try {
    const { titulo, descripcion, url } = req.body;
    const { aulaId } = req.params;

    // Validaciones manuales
    if (!titulo || titulo.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El título debe tener al menos 3 caracteres' });
    }
    if (!descripcion || descripcion.trim().length < 3) {
      return res.status(400).json({ mensaje: 'La descripción debe tener al menos 3 caracteres' });
    }
    const regexUrl = /^https?:\/\/.+/;
    if (!url || !regexUrl.test(url)) {
      return res.status(400).json({ mensaje: 'Debe proporcionar una URL válida (http o https)' });
    }
    if (!mongoose.Types.ObjectId.isValid(aulaId)) {
      return res.status(400).json({ mensaje: 'ID de aula inválido' });
    }

    const nuevoTema = new Tema({
      titulo,
      descripcion,
      url,
      clase: aulaId
    });

    const temaGuardado = await nuevoTema.save();
    res.status(201).json(temaGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el tema' });
  }
};

// Obtener temas por ID de aula
const obtenerTemasPorAula = async (req, res) => {
  try {
    const { aulaId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(aulaId)) {
      return res.status(400).json({ mensaje: 'ID de aula inválido' });
    }
    const temas = await Tema.find({ clase: aulaId }).sort({ fechaCreacion: -1 });
    res.json(temas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los temas' });
  }
};

// Editar tema
const actualizarTema = async (req, res) => {
  try {
    const { titulo, descripcion, url } = req.body;

    // Validaciones manuales
    if (!titulo || titulo.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El título debe tener al menos 3 caracteres' });
    }
    if (!descripcion || descripcion.trim().length < 3) {
      return res.status(400).json({ mensaje: 'La descripción debe tener al menos 3 caracteres' });
    }
    const regexUrl = /^https?:\/\/.+/;
    if (!url || !regexUrl.test(url)) {
      return res.status(400).json({ mensaje: 'Debe proporcionar una URL válida (http o https)' });
    }

    const tema = await Tema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!tema) return res.status(404).json({ mensaje: 'Tema no encontrado' });

    res.json(tema);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el tema' });
  }
};

// Eliminar tema
const eliminarTema = async (req, res) => {
  try {
    const tema = await Tema.findByIdAndDelete(req.params.id);

    if (!tema) return res.status(404).json({ mensaje: 'Tema no encontrado' });

    res.json({ mensaje: 'Tema eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el tema' });
  }
};

// Registrar visita
const registrarVisita = async (req, res) => {
  try {
    const tema = await Tema.findById(req.params.id);
    if (!tema) return res.status(404).json({ mensaje: 'Tema no encontrado' });

    tema.visitas += 1;
    await tema.save();

    res.json({ mensaje: 'Visita registrada', visitas: tema.visitas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar visita' });
  }
};

module.exports = {
  crearTema,
  obtenerTemasPorAula,
  actualizarTema,
  eliminarTema,
  registrarVisita
};
