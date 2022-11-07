const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  nomeusuario: { type: String },
  nomecompleto: { type: String },
  email: { type: String },
  senha: { type: String },
  telefone: { type: String },
  datacadastro: { type: String },
});
module.exports = mongoose.model("tbclientes", Schema);
