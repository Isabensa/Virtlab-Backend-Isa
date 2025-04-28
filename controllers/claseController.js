const mongoose = require('mongoose');
const Clase = require('../models/Clase');

// Crear nueva aula
const crearClase = async (req, res) => {
  try {
    const { nombre, nivel, descripcion, docente } = req.body;

    // Validaciones manuales
    if (!nombre || nombre.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nombre debe tener al menos 3 caracteres' });
    }
    if (!nivel || nivel.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nivel debe tener al menos 3 caracteres' });
    }
    if (!descripcion || descripcion.trim().length < 3) {
      return res.status(400).json({ mensaje: 'La descripción debe tener al menos 3 caracteres' });
    }
    if (!docente || !mongoose.Types.ObjectId.isValid(docente)) {
      return res.status(400).json({ mensaje: 'Debe asignar un docente válido' });
    }

    const nuevaClase = new Clase({
      nombre,
      nivel,
      descripcion,
      docente
    });

    await nuevaClase.save();
    res.status(201).json({ mensaje: 'Aula creada correctamente', clase: nuevaClase });
  } catch (error) {
    console.error('Error al crear aula:', error);
    res.status(500).json({ mensaje: 'Error al crear el aula' });
  }
};

// Obtener todas las aulas
const obtenerClases = async (req, res) => {
  try {
    const clases = await Clase.find().populate('docente', 'nombre email');
    res.json(clases);
  } catch (error) {
    console.error('Error al obtener aulas:', error);
    res.status(500).json({ mensaje: 'Error al obtener las aulas' });
  }
};

// Obtener una sola aula por ID
const obtenerClasePorId = async (req, res) => {
  try {
    const clase = await Clase.findById(req.params.id)
      .populate('docente', 'nombre email')
      .populate('alumnos', 'nombre email');

    if (!clase) {
      return res.status(404).json({ mensaje: 'Aula no encontrada' });
    }

    res.json(clase);
  } catch (error) {
    console.error('Error al obtener aula:', error);
    res.status(500).json({ mensaje: 'Error al obtener el aula' });
  }
};

// Actualizar aula
const actualizarClase = async (req, res) => {
  try {
    const { nombre, nivel, descripcion, docente } = req.body;

    // Validaciones manuales
    if (!nombre || nombre.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nombre debe tener al menos 3 caracteres' });
    }
    if (!nivel || nivel.trim().length < 3) {
      return res.status(400).json({ mensaje: 'El nivel debe tener al menos 3 caracteres' });
    }
    if (!descripcion || descripcion.trim().length < 3) {
      return res.status(400).json({ mensaje: 'La descripción debe tener al menos 3 caracteres' });
    }
    if (!docente || !mongoose.Types.ObjectId.isValid(docente)) {
      return res.status(400).json({ mensaje: 'Debe asignar un docente válido' });
    }

    const clase = await Clase.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!clase) {
      return res.status(404).json({ mensaje: 'Aula no encontrada' });
    }

    res.json({ mensaje: 'Aula actualizada correctamente', clase });
  } catch (error) {
    console.error('Error al actualizar aula:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el aula' });
  }
};

// Eliminar aula
const eliminarClase = async (req, res) => {
  try {
    const clase = await Clase.findByIdAndDelete(req.params.id);

    if (!clase) {
      return res.status(404).json({ mensaje: 'Aula no encontrada' });
    }

    res.json({ mensaje: 'Aula eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar aula:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el aula' });
  }
};

// Asociar alumnos a un aula
const asociarAlumnos = async (req, res) => {
  try {
    const claseId = req.params.id;
    const { alumnos } = req.body;

    if (!mongoose.Types.ObjectId.isValid(claseId)) {
      return res.status(400).json({ mensaje: 'ID de aula inválido' });
    }

    if (!Array.isArray(alumnos) || alumnos.length === 0) {
      return res.status(400).json({ mensaje: 'Debe seleccionar al menos un alumno' });
    }

    const clase = await Clase.findById(claseId);

    if (!clase) {
      return res.status(404).json({ mensaje: 'Aula no encontrada' });
    }

    const nuevosAlumnos = alumnos.filter(
      (id) => mongoose.Types.ObjectId.isValid(id) && !clase.alumnos.includes(id)
    );

    clase.alumnos.push(...nuevosAlumnos);
    clase.contadorAlumnos = clase.alumnos.length;

    await clase.save();

    res.json({ mensaje: 'Alumnos asignados correctamente', clase });
  } catch (error) {
    console.error('Error al asignar alumnos:', error);
    res.status(500).json({ mensaje: 'Error al asignar alumnos al aula' });
  }
};

module.exports = {
  crearClase,
  obtenerClases,
  obtenerClasePorId,
  actualizarClase,
  eliminarClase,
  asociarAlumnos
};
