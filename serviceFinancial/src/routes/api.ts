import { Router } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { Auth } from "../middlewares/auth";
const operacoes = require("../db/financial");
const financial = new operacoes();
const saltRounds = 10;

dotenv.config();
const router = Router();

router.post("/cadastrar", Auth.private, async (req, res) => {
  const cb = req.body;
  //const user = req.body.userId;
//console.log(user);
  console.log(cb);
  res.status(201);
  //console.log(financial);
  const id_financial = await financial.cadastrar(cb);
  res.json({ res: id_financial });
});

router.get("/listar", Auth.private, async (req, res) => {
  const resp = await financial.listarTodos();
 //console.log(resp);
  res.send(resp);
});

router.get("/listaporid", Auth.private, async (req, res) => {
  const id = req.body.id;
  const resp = await financial.listar(id);
  console.log(resp);
  res.send(resp);
});

router.post("/atualizar", Auth.private, async (req, res) => {
  const cb = req.body;
  const id = req.body.id;
  const resp = await financial.atualizar(id, cb);
  console.log(resp);
  res.send(resp);
});

export default router;
