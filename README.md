![Logo](img/ucol-logo.jpg)

# Práctica 15: POST REQUESTS + JSON

> Segunda Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

![HTTP](img/HTTP.jpg)

En la práctica anterior abordamos el tema de las peticiones POST parseando datos que vienen desde un formulario. Ahora pasaremos un objeto en formato JSON en la petición, los “parsearemos” en nuestro route handler y los haremos visible en la consola.

Agregaremos un nuevo endpoint y su correspondiente route handler para “Parsear” peticiones que contienen un objeto JSON en el body. Para este “route handler” agregaremos un parámetro extra, que es una callback a la llamada de express.json(). Lo que sucede en este caso es que estamos indicando al “route handler” que cuando llegue una petición por POST al endpoint “/personjson” , primero ejecute “express.json” que nos ayudará a “parsear” el body y a extraer el objeto que viene en la petición, una vez que el objeto es “parseado”, todas sus llaves (keys) quedan a nuestra disposición mediante la notación del punto, en el objeto “body” de la petición, “req.body.”

> ENTREGA: DOMINGO 08 DE MAYO DEL 2022

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_15

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Instala el paquete 'ejs' con el comando npm i express --save o npm i ejs

5. Crea un nuevo archivo server.js en el cual se le pasara todo el codigo hecho en la practica anterior

6. Crea una nueva carpeta llamada "public" dentro de la carpeta "practica_15"

7. Dentro de la carpeta "public" crea un nuevo archivo style.css

8. Dentro del archivo style.css se le escribira body y dentro de este tendra un front-family : 'Roboto Condensed', sans-serif ademas se definira el color del texto como azul y en el h1 como rojo;

9. En el archivo server.js con el app.use donde tenemos la carpeta virtual llamada "assets" y ese nombre sera mapeado con la carpeta fisica llamada "public"

10. Despues de la linea cuatro se inserta el codigo con el que se espesifica la app de express y su engine ejs

11. Ahora en el archivo server.js se colocara un html basico dentro del app.get de la pagina principal del servidor

12. En el archivo index.ejs se creara un formulario para dos elementos el nombre, segundo nombre y el apellido pero ademas se tendra un boton que realizara un Submit

13. Pasando al archivo server.js se creara un app.post el cual se ubicara en la direccion /student y lo que enviara es el primer nombre y el apellido en un string (Siendo que anterior mente se tomo el dato del index.ejs)

14. En el app.get de student se colocara un render de index

15. Se creara un script donde se usa ajax para hacer una petición asíncrona pero se debe configurar donde debemos poner como le va a responder (post) url donde se consulta, datos que responden, tipo de dato que está viajando.

16. En el index agregaremos el CDN para JQuery

17. Ahora se ejecuta el comando "npx nodemon server en la terminal y acccede a http://localhost:3000/student para observar el resultado

18. Por ultimo se puede proba ingresar informacion en los cuadros de textos y al precionar el boton se podra observar el resultado y tambien en la consola podras observar la informacion que se imprimio del $.ajax

## RECURSOS

- https://www.npmjs.com/
- https://ejs.co/
