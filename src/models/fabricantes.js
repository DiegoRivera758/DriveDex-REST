const { connectMysql } = require("../dbconnection");
class FabricantesModel {
  static async consultar() {
    let db = await connectMysql();
    let query = db("fabricantes");
    return await query;
  }
  static async consultarPorId(id) {
    let db = await connectMysql();
    return await db("fabricantes").where("id_fabricante", id);
  }
  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db("fabricantes")
      .insert(datos)
      .returning("id_fabricante");
    return result[0];
  }

  static async actualizar(id, campos) {
    let db = await connectMysql();
    return await db("fabricantes").where("id_fabricante", id).update(campos);
  }
}

module.exports = FabricantesModel;
