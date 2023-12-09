const { connectMysql } = require("../dbconnection");
class ModelosModel {
  static async consultar() {
    let db = await connectMysql();
    let query = db("modelos");
    return await query;
  }
  static async consultarPorId(id) {
    let db = await connectMysql();
    return await db("modelos").where("id_modelo", id);
  }
  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db("modelos").insert(datos).returning("id_modelo");
    return result[0];
  }

  static async actualizar(id, campos) {
    let db = await connectMysql();
    return await db("modelos").where("id_modelo", id).update(campos);
  }
}

module.exports = ModelosModel;
