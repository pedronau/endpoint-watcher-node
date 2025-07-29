# 🛡️ Endpoint Watcher - Aplicación de monitoreo y aviso de errores en Node.js

Mi segundo proyecto en Node, este es un sistema de monitoreo (NOC) desarrollado en **Node.js** con sistema de **logging en filesystem**, y alertas por **correo electrónico** en caso de eventos o anomalías detectadas. Implementación de tests automáticons con **Jest**.

El objetivo de este es monitorear una serie de endpoints/urls (que nosotros eligiremos) y que vaya haciendo comprobaciones periódicas de su funcionamiento. Si detecta un error enviará un correo electrónico de aviso para que el usuario sea consciente. 

Cada vez que hace una comprobación la aplicación anota en un archivo .log el tipo de rror, el mensaje y la fecha.

Escrita totalmente en TypeScript.

## 📌 Características principales

- 🗃️ **Patrón repositorio**: desacoplamiento de la lógica de negocio del acceso a datos.
- 🌐 **Monitoreo de APIs** personalizadas con chequeos periódicos.
- 📬 **Alertas por email** si hay fallos y envío de informes periódicos a medianoche.
- 🧾 **Logs en filesystem** indicando el error y la fecha.
- 🌱 **Configuración por variables de entorno** personalizables para cambiar el email de envío y recibimiento de alertas.

---

## Instrucciones

1. Clonar el repositorio

2. Instalar dependencias con el comando "npm install"

3. Configurar las variables de entorno y sustituir el nombre de ".env.template" a ".env". Estas variables son:
    
- MAILER_SERVICE como el servicio de mensajería. Como valor predeterminado viene Gmail
- MAILER_EMAIL como el correo desde el que se enviarán los avisos
- MAILER_SECRET_KEY como la llave necesaria para que el correo anterior pueda enviar emails. En el caso de ser de Gmail se obtiene aquí: https://myaccount.google.com/u/0/apppasswords
- NOTIFICATION_EMAIL como el correo al que llegarán los avisos

4. Configurar los enlaces que queremos monitorizar añadiendo una línea en el archivo "app.ts" como esta:

        ServerApp.start("https://github.com/pedronau");

5. Iniciar el proyecto con el comando "npm run dev"

Esto consultará periódicamente los enlaces que le hemos indicado en el archivo "app.ts". Por defecto estos enlaces son:

- "https://pedroesunmaldev.com" un dominio inventado que no existe, este será el ejemplo de error.
- "https://github.com/pedronau" y "https://www.linkedin.com/in/pedro-pe%C3%B1as-759951246/" mis perfiles de GitHub y LinkedIn como ejemplos de enlaces que funcionan.
 
La aplicación los consultará cada 30 segundos (para fines prácticos), este tiempo es configurable y se puede cambiar en cualquier momento. También enviará un mail automático avisando del error y creará una carpeta llamada "logs" en la quer irá registrando el resultado de su comprobación en dos archivos distintos "success.log" y "error.log". Este último archivo se enviará a medianoche adjunto en un correo como informe de errores.

6. Ejecución de los tests automáticos:

        npm run test

¡Gracias por llegar hasta aquí!