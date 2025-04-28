# 📄 Virtlab NASA Backend

## 🔖 URL de Producción

[https://virtlab-backend-isa.onrender.com](https://virtlab-backend-isa.onrender.com)

---

## 📊 Descripción
Backend del proyecto **Virtlab NASA**, encargado de la gestión de usuarios, aulas (clases) y simulaciones (temas), así como la autenticación y control de accesos.

---

## 🛠️ Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JsonWebToken)
- dotenv
- CORS

---

## 🛋️ Instalación y configuración local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Isabensa/Virtlab-Backend-Isa.git
```

### 2. Entrar a la carpeta del proyecto
```bash
cd Virtlab-Backend-Isa
```

### 3. Instalar las dependencias
```bash
npm install
```

### 4. Crear archivo `.env`
En la raíz del proyecto, crear un archivo `.env` con el siguiente contenido:

```env
MONGO_URI=<TU_URI_DE_MONGODB>
PORT=5000
JWT_SECRET=<TU_CLAVE_SECRETA>
```

> Nota: En producción ya están configuradas las variables en Render.


### 5. Correr el servidor localmente
```bash
npm run dev
```

Servidor corriendo en:
```bash
http://localhost:5000
```

---

## 🔎 Principales rutas de la API
- `/api/usuarios` → Gestión de usuarios (registro, login, CRUD).
- `/api/clases` → Gestión de aulas (crear, listar, editar, eliminar).
- `/api/temas` → Gestión de simulaciones (crear, listar, editar, eliminar, registrar visitas).
- `/api/reportes` → Reportes específicos del sistema.

---

## 📷 Capturas de pantalla

**Gestión de usuarios:**

![Gestión de usuarios](https://virtlab-backend-isa.onrender.com/public/nasa.png)

**Conexión MongoDB:**

![MongoDB Atlas](https://virtlab-backend-isa.onrender.com/public/mongo.png)

---

## 📄 Licencia

Proyecto académico para fines educativos. Desarrollado en el marco de la Diplomatura de Desarrollo Fullstack 2025 por **Isabel Bensadón**.

