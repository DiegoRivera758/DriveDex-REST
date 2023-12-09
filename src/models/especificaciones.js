const { connectMysql } = require("../dbconnection");
class EspecificacionesModel {
  static async consultar() {
    let db = await connectMysql();
    let query = db("especificaciones");
    return await query;
  }
  static async consultarPorId(id) {
    let db = await connectMysql();
    return await db("especificaciones").where("id_especificacion", id);
  }
  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db("especificaciones")
      .insert(datos)
      .returning("id_especificacion");
    return result[0];
  }

  static async actualizar(id, campos) {
    let db = await connectMysql();
    return await db("especificaciones")
      .where("id_especificacion", id)
      .update(campos);
  }
}

module.exports = EspecificacionesModel;
