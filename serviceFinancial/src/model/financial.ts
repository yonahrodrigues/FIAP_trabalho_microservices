const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  nome_banco: { type: String },
  id_user: { type: String },
  tipo_conta: { type: String },
  nome_titular: { type: String },
  limite_cartao: { type: Number },
});
module.exports = mongoose.model("tbfinancial", Schema);
