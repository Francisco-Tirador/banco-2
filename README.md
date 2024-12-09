# Prueba Técnica Banco Azteca

## Instrucciones para Ejecutar la Aplicación

1. Instalar dependencias  
En la raíz del proyecto, instala las dependencias con el siguiente comando:  
 ```npm install```

2. Ejecutar la aplicación  
Después de instalar las dependencias, ejecuta el siguiente comando para iniciar la aplicación:  
  ```npm run start```

Este comando instalará las dependencias del backend, y ejecutará tanto el backend como el frontend en los siguientes puertos:  
- Frontend: http://localhost:3000  
- Backend: http://localhost:2157

## Descripción

Esta aplicación consta de dos páginas principales: el Login y el Formulario. Se han utilizado varias librerías para complementar su funcionalidad. Ambas páginas son totalmente responsivas.

### Login

- El usuario puede intentar autenticarse con las credenciales predeterminadas (usuario: AZTECA, contraseña: 12345).
- Si se intenta autenticar más de tres veces incorrectamente, el botón de Submit se bloqueará durante 15 segundos para evitar múltiples intentos fallidos.
- En caso de autenticación exitosa, el usuario se guarda en un slice de Redux para identificar los accesos y se redirige automáticamente a la página del formulario.

### Formulario

En esta página, se puede visualizar la información básica de los usuarios. Además:  
- Se puede cambiar el ID del usuario para buscar otro perfil.  
- Se lista el total de usuarios disponibles.  
- Junto a este módulo, se encuentra un visor de PDF correspondiente al usuario seleccionado. El visor incluye:  
  - Un contador de páginas.  
  - Un botón para expandir el PDF.

## Librerías Utilizadas

Estas son las librerías que se emplean en este proyecto:

- axios: ^1.7.9  
- react: ^16.12.0  
- react-countdown: ^2.3.1  
- react-dom: ^16.12.0  
- react-hook-form: ^6.15.4  
- react-modal: ^3.12.1  
- react-pdf: ^5.7.2  
- react-redux: ^7.1.3  
- react-router-dom: ^5.1.2  
- redux: ^4.0.5
