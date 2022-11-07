import { Router } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { Auth } from "../middlewares/auth";
import { userInfo } from "os";
const operacoes = require("../db/clientes");
const cliente = new operacoes();
const bcrypt = require("bcrypt");
const saltRounds = 10;

dotenv.config();

const router = Router();

router.post("/cadastrar", async (req, res) => {
  const usuario = req.body;
  var senha = req.body.senha;
  const hash = bcrypt.hashSync(senha, saltRounds);
  req.body.senha = hash;
  res.status(201);
  // console.log(req.body);
  let novoCLiente = await cliente.cadastrar(usuario);
  res.json({ res: novoCLiente });
});

router.get("/listar", Auth.private, async (req, res) => {
  const resp = await cliente.listarTodos();
  console.log(resp);
  res.send(resp);
});

router.get("/listaporid", Auth.private, async (req, res) => {
  const id = req.body.id;
  const resp = await cliente.listar(id);
  console.log(resp);
  res.send(resp);
});

router.post("/atualizar", Auth.private, async (req, res) => {
  const senha = req.body.senha;
  const id = req.body.id;
  const hash = bcrypt.hashSync(senha, saltRounds);
  const resp = await cliente.atualizar(id, hash);
  console.log(resp);
  res.send(resp);
});

router.get("/login", async (req, res) => {
  const usuario = req.body.nomeusuario;
  const senha = req.body.senha;
  const resp = await cliente.login(usuario);
  //console.log(resp);
  if (bcrypt.compareSync(senha, resp.senha)) {
    const token = await JWT.sign(
      { id: resp.id, email: resp.email },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "7d" }
    );
    console.log("Token gerado com sucesso");
    res.json({ token: token });
  } else {
    res.json("Acesso negado.");
  }
});

export default router;
