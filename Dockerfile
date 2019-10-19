#Instalamos la imagen de NodeJS 10.16 en el container
FROM node:10.16-alpine

#Establecemos app como directorio a correr nuestra app
WORKDIR /app

#Copiamos todo el directorio de nuestra app adentro del container
COPY . .

#Instalamos todos los paquetes de NodeJS
RUN npm install --silent

#Le especificamos al container que escuche el puerto 3000
EXPOSE 3000

#Ejecutamos nuestra app en modo desarrollo
CMD ["npm", "start"]