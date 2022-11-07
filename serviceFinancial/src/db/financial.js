const financial_model = require("../model/financial");

const operacoes = class {
  constructor(info) {
    this.info = info;
  }

  listarTodos() {
    return financial_model.find();
  }

  listar(cb) {
    const id = cb;
    return financial_model.findOne({ id: id });
  }

  cadastrar(cb) {
    const dados = new financial_model(cb);
    return dados.save();
  }

  atualizar(id, cb) {
    const id_user = cb.id_user.id;
    const nome_banco = cb.nome_banco;
    const tipo_conta = cb.tipo_conta;
    const nome_titular = cb.nome_titular;
    const limite_cartao = cb.limite_cartao;
    console.log(cb);
    return financial_model.findByIdAndUpdate(id, {
      id_user: id_user,
      nome_banco: nome_banco,
      tipo_conta: tipo_conta,
      nome_titular: nome_titular,
      limite_cartao: limite_cartao,
    });
  }
};
module.exports = operacoes;
