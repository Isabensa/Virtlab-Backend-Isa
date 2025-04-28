const mongoose = require('mongoose');

const claseSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del aula es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres']
  },
  nivel: {
    type: String,
    required: [true, 'El nivel es obligatorio'],
    minlength: [3, 'El nivel debe tener al menos 3 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    minlength: [3, 'La descripción debe tener al menos 3 caracteres']
  },
  docente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Debe asignarse un docente']
  },
  alumnos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  contadorAlumnos: {
    type: Number,
    default: 0
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Clase', claseSchema);
