import express, { Request, Response } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";
import cors from "cors";
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.DB_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();
server.use(express.json());
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

server.use(express.urlencoded({ extended: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "endpoint não localizado" });
});
console.log(`listen: http://localhost:3000`);
server.listen(3000);
