const CategoriasModel = require("../models/categorias");

class CategoriasController {
  /**
   * Recupera una colección de valores de un recurso:
   *
   * ```http
   *   GET /categorias
   *   Accept: application/json
   * ```
   */
  static async indexGet(req, res) {
    let data = await CategoriasModel.consultar();
    res.send(data);
  }
  /**
   * Recibe una petición para crear un recurso:
   *
   * ```http
   *   POST /fabricantes
   *   Content-Type: application/json
   *
   *   {"nombre":"Nueva categoria"}
   * ```
   */
  static async indexPost(req, res) {
    try {
      const newData = req.body;

      const insertedId = await CategoriasModel.insertar(newData);

      res
        .status(201)
        .header("Location", `/categorias/${insertedId}`)
        .send({ status: 201, message: "Created" });
    } catch (error) {
      console.error(error);
      res.status(400).send({ errno: 400, error: "Bad Request" });
    }
  }
  /**
   * Recupera el valor de un recurso individual:
   *
   * ```http
   *   GET /categorias/{id}
   *   Accept: application/json
   * ```
   */
  static async itemGet(req, res) {
    let id = req.params.id;
    let data = await CategoriasModel.consultarPorId(id);
    if (data.length == 0) {
      res.status(404).send({ errno: 404, error: "Not found" });
      return;
    }
    res.send(data[0]);
  }

  /**
   * Recibe una petición para actualizar parte de un recurso:
   *
   * ```http
   *   PATCH /categorias/{id}
   *   Content-Type: application/json
   *
   *   {"nombre": "Nuevo nombre de la categoria"}
   * ```
   */
  static async itemPatch(req, res) {
    try {
      const id = req.params.id;
      const updatedFields = req.body;

      const result = await CategoriasModel.actualizar(id, updatedFields);

      if (result === 0) {
        res.status(404).send({ errno: 404, error: "Not found" });
      } else {
        res.send({ message: "Successfull partial update" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).send({ errno: 400, error: "Bad Request" });
    }
  }
}

module.exports = CategoriasController;
