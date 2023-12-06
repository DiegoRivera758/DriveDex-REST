const express = require("express");
const app = express();
const puerto = 80;
const FabricantesController = require("./controllers/FabricantesController");

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

app.listen(puerto, function () {
  console.log("Servidor en espera http://localhost");
});
