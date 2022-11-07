const cliente_model = require("../model/cliente");

const operacoes = class {
  constructor(info) {
    this.info = info;
  }

  listarTodos() {
    return cliente_model.find();
  }

  listar(cb) {
    const userid = cb;
    return cliente_model.findOne({ id: userid });
  }

  listarPorUsuario(cb) {
    const nomeusuario = cb;

    const resp = cliente_model.findOne({ nomeusuario: nomeusuario });
    console.log(resp);
    return resp;
  }

  cadastrar(cb) {
    const dados = new cliente_model(cb);
    return dados.save();
  }

  login(cb) {
    const user = cb;
    const resposta = cliente_model.findOne({ nomeusuario: user });
    console.log(user);
    console.log(resposta);
    return resposta;
  }

  atualizar(id, cb) {
    const newpass = cb;
    console.log(newpass);
    return cliente_model.findByIdAndUpdate(id, { senha: newpass });
  }
};
module.exports = operacoes;
