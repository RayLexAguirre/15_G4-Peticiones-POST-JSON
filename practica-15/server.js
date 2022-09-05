var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

//app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href ='/assets/style.css'>
  <title>Document</title> </head> 
  <body> <h1>Hola mundo</h1>
  <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>
  `);
});

app.get("/person/:id", (req, res) => {
  res.render("person", {
    Name: req.params.id,
    Message: req.query.message,
    Times: req.query.times,
  });
});

app.get("/student", (req, res) => {
  res.render("index");
});

//Ahora se tiene dos rutas student un post y una get. En el post imprimiremos el evento postback indicando que se solicita lo que se escribio en el body en un id especifico y con el get se renderiza la pagina

app.post("/student", express.urlencoded({ extended: false }), (req, res) => {
  res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});

// Envia un string que contiene el fname y el lname

app.post("/personjson", express.json({ type: "*/*" }), (req, res) => {
  console.log("El objeto contiene: ", req.body);
  console.log("Nombre: ", req.body.firstName);
  console.log("Apellido: ", req.body.lastName);
});

//ahora dentro de la consola se imprimira tres diferentes textos el primero imprimira todo lo que contiene body, el segundo contiene lo ingresado en firstName pero no en los imput sino en $.ajax y es el mismo caso para lastName.

app.listen(port);
