const mongoose = require('mongoose');

const temaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    minlength: [3, 'El título debe tener al menos 3 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    minlength: [3, 'La descripción debe tener al menos 3 caracteres']
  },
  url: {
    type: String,
    required: [true, 'La URL es obligatoria'],
    match: [/^https?:\/\/.+/, 'La URL debe ser válida']
  },
  visitas: {
    type: Number,
    default: 0
  },
  clase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clase',
    required: [true, 'Debe estar asociado a una clase']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Tema', temaSchema);
