const permitirRoles = (...rolesPermitidos) => {
    return (req, res, next) => {
      if (!rolesPermitidos.includes(req.usuario.rol)) {
        return res.status(403).json({ mensaje: 'Acceso denegado: rol no autorizado' });
      }
      next();
    };
  };
  
  module.exports = permitirRoles;
  