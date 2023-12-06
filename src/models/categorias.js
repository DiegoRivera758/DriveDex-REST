const { connectMysql } = require("../dbconnection");
class CategoriasModel {
  static async consultar() {
    let db = await connectMysql();
    let query = db("categorias");
    return await query;
  }
  static async consultarPorId(id) {
    let db = await connectMysql();
    return await db("categorias").where("id_categoria", id);
  }
  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db("categorias")
      .insert(datos)
      .returning("id_categoria");
    return result[0];
  }

  static async actualizar(id, campos) {
    let db = await connectMysql();
    return await db("categorias").where("id_categoria", id).update(campos);
  }
}

module.exports = CategoriasModel;
