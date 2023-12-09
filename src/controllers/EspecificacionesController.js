const EspecificacionesModel = require("../models/especificaciones");

class EspecificacionesController {
  /**
   * Recupera una colección de valores de un recurso:
   *
   * ```http
   *   GET /especificaciones
   *   Accept: application/json
   * ```
   */
  static async indexGet(req, res) {
    let data = await EspecificacionesModel.consultar();
    res.send(data);
  }
  /**
   * Recibe una petición para crear un recurso:
   *
   * ```http
   *   POST /especificaciones
   *   Content-Type: application/json
   *
   *   {"nombre":"Nueva especificacion"}
   * ```
   */
  static async indexPost(req, res) {
    try {
      const newData = req.body;

      const insertedId = await EspecificacionesModel.insertar(newData);

      res
        .status(201)
        .header("Location", `/especificaciones/${insertedId}`)
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
   *   GET /especificaciones/{id}
   *   Accept: application/json
   * ```
   */
  static async itemGet(req, res) {
    let id = req.params.id;
    let data = await EspecificacionesModel.consultarPorId(id);
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
   *   PATCH /especificaciones/{id}
   *   Content-Type: application/json
   *
   *   {"nombre": "Nuevo nombre de la especificacion"}
   * ```
   */
  static async itemPatch(req, res) {
    try {
      const id = req.params.id;
      const updatedFields = req.body;

      const result = await EspecificacionesModel.actualizar(id, updatedFields);

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

module.exports = EspecificacionesController;
