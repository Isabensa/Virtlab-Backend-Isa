📄 Virtlab NASA Backend
📚 Descripción
Este repositorio contiene el backend de la aplicación educativa Virtlab NASA. Gestiona usuarios, aulas (clases), simulaciones científicas y controla el acceso mediante autenticación JWT.

🚀 Tecnologías utilizadas
Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Tokens (JWT)

dotenv

CORS

📁 Estructura de carpetas
pgsql
Copiar
Editar
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  public/
  .env
  package.json
  server.js
⚙️ Instrucciones para correr el proyecto localmente
Clonar el repositorio:

bash
Copiar
Editar
git clone https://github.com/Isabensa/Virtlab-Backend-Isa.git
Entrar a la carpeta:

bash
Copiar
Editar
cd Virtlab-Backend-Isa
Instalar las dependencias:

bash
Copiar
Editar
npm install
Crear el archivo .env en la raíz del proyecto:

env
Copiar
Editar
MONGO_URI=tu_url_de_conexion_a_mongodb
JWT_SECRET=tu_clave_secreta
PORT=5000
Ejecutar el servidor en modo desarrollo:

bash
Copiar
Editar
npm run dev
Accede en el navegador o en Postman a:

bash
Copiar
Editar
http://localhost:5000
📷 Capturas de pantalla
📌 Conexión exitosa a MongoDB Atlas

Desde consola al iniciar el backend correctamente:


📌 Simulaciones Científicas

Vista general de las simulaciones cargadas desde backend:


🛡️ Licencia
Proyecto académico para fines educativos.
Desarrollado en el marco de la Diplomatura de Desarrollo Fullstack 2025 - Celia Isabel Bensadón.

✅ Notas:

Recordá tener la IP whitelisteada en MongoDB Atlas para evitar errores de conexión.

JWT_SECRET puede ser cualquier cadena segura que elijas.

¿Te lo paso también en un .md para que pegues directo si querés? 🚀
¿Seguimos y lo subimos a GitHub después? 🚀✨






Dijiste:
si, pasa para pegar por favor
ChatGPT dijo:
¡Perfecto Isa! 🚀
Te paso el archivo .md completo y listo para pegar:

markdown
Copiar
Editar
# 📄 Virtlab NASA Backend

## 📚 Descripción
Este repositorio contiene el backend de la aplicación educativa **Virtlab NASA**.  
Gestiona usuarios, aulas (clases), simulaciones científicas y controla el acceso mediante autenticación JWT.

---

## 🚀 Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- dotenv
- CORS

---

## 📁 Estructura de carpetas
backend/ config/ controllers/ middleware/ models/ routes/ public/ .env package.json server.js

yaml
Copiar
Editar

---

## ⚙️ Instrucciones para correr el proyecto localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/Isabensa/Virtlab-Backend-Isa.git
Entrar a la carpeta:

bash
Copiar
Editar
cd Virtlab-Backend-Isa
Instalar las dependencias:

bash
Copiar
Editar
npm install
Crear el archivo .env en la raíz del proyecto:

env
Copiar
Editar
MONGO_URI=tu_url_de_conexion_a_mongodb
JWT_SECRET=tu_clave_secreta
PORT=5000
Ejecutar el servidor en modo desarrollo:

bash
Copiar
Editar
npm run dev
Accede en el navegador o en Postman a:

bash
Copiar
Editar
http://localhost:5000

📷 Capturas de pantalla

📌 Conexión exitosa a MongoDB Atlas

Desde consola al iniciar el backend correctamente:

![Conexión MongoDB](https://raw.githubusercontent.com/Isabensa/Virtlab-Backend-Isa/main/public/mongo.png)

📌 Simulaciones Científicas

Vista general de las simulaciones cargadas desde backend:

![Simulaciones NASA](https://raw.githubusercontent.com/Isabensa/Virtlab-Backend-Isa/main/public/nasa.png)

🛡️ Licencia
Proyecto académico para fines educativos.
Desarrollado en el marco de la Diplomatura de Desarrollo Fullstack 2025 - Celia Isabel Bensadón.