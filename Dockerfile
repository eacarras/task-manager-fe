# Usar la imagen oficial de Node.js como base
FROM node:20-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto y la configuración
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 5173

# Comando por defecto para correr la app
CMD ["npm", "run", "dev"]
