const express = require("express");
const app = express();
const puerto = 80;
const FabricantesController = require("./controllers/FabricantesController");
const CategoriasController = require("./controllers/CategoriasController");
const ModelosController = require("./controllers/ModelosController");
const EspecificacionesController = require("./controllers/EspecificacionesController");
const Opiniones_UsuariosController = require("./controllers/Opiniones_UsuariosController");

app.use(express.json());

app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("¡Prueba 123456789012!");
});

//Fabricantes
app.get("/fabricantes", FabricantesController.indexGet);
app.get("/fabricantes/:id([0-9]+)", FabricantesController.itemGet);
app.post("/fabricantes", FabricantesController.indexPost);
app.patch("/fabricantes/:id([0-9]+)", FabricantesController.itemPatch);

//Categorias
app.get("/categorias", CategoriasController.indexGet);
app.get("/categorias/:id([0-9]+)", CategoriasController.itemGet);
app.post("/categorias", CategoriasController.indexPost);
app.patch("/categorias/:id([0-9]+)", CategoriasController.itemPatch);

//Modelos
app.get("/modelos", ModelosController.indexGet);
app.get("/modelos/:id([0-9]+)", ModelosController.itemGet);
app.post("/modelos", ModelosController.indexPost);
app.patch("/modelos/:id([0-9]+)", ModelosController.itemPatch);

//Especificaciones
app.get("/especificaciones", EspecificacionesController.indexGet);
app.get("/especificaciones/:id([0-9]+)", EspecificacionesController.itemGet);
app.post("/especificaciones", EspecificacionesController.indexPost);
app.patch(
  "/especificaciones/:id([0-9]+)",
  EspecificacionesController.itemPatch
);

app.listen(puerto, function () {
  console.log("Servidor en espera http://localhost");
});
