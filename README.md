# 📄 Virtlab NASA Backend

## Descripción
Backend del proyecto **Virtlab NASA**, encargado de la gestión de usuarios, aulas (clases) y simulaciones (temas), así como la autenticación y control de accesos.

---

## Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JsonWebToken)
- dotenv
- CORS

---

## Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/Isabensa/Virtlab-Backend-Isa.git
```

### 2. Instalar dependencias
```bash
cd Virtlab-Backend-Isa
npm install
```

### 3. Crear archivo `.env`
En la raíz del proyecto, crea un archivo `.env` con el siguiente contenido:

```env
MONGO_URI=tu_url_de_conexion_a_mongodb
JWT_SECRET=tu_clave_secreta
PORT=5000
```

> Asegúrate de tener la IP whitelisteada en MongoDB Atlas.

### 4. Correr el servidor
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5000`

---

## Rutas principales
- `/api/usuarios` → Gestión de usuarios (registro, login, CRUD)
- `/api/clases` → Gestión de aulas (crear, listar, editar, eliminar)
- `/api/temas` → Gestión de simulaciones (crear, listar, editar, eliminar, registrar visitas)

---

## 📷 Capturas de pantalla

### 🔹 Conexión exitosa a MongoDB:
![Conexión MongoDB](https://raw.githubusercontent.com/Isabensa/Virtlab-Backend-Isa/main/public/mongo.png)

---

### 🔹 Gestión de Simulaciones NASA:
![Simulaciones NASA](https://raw.githubusercontent.com/Isabensa/Virtlab-Backend-Isa/main/public/nasa.png)

---

## 📄 Licencia
Proyecto académico para fines educativos.  
Desarrollado en el marco de la **Diplomatura de Desarrollo Fullstack 2025**.

---

Desarrollado por **Celia Isabel Bensadón** ✨