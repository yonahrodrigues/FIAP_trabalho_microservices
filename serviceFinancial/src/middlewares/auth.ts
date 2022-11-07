import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import JWT from "jsonwebtoken";
dotenv.config();

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    let id = {};
    //verifica jwt
    if (req.headers.authorization) {
      //separa bearer token
      const [authType, token] = req.headers.authorization.split(" ");
      if (authType === "Bearer") {
        // console.log("Token", token);
        try {
          //validando token
          const decoded = JWT.verify(
            token,
            process.env.JWT_SECRET_KEY as string
          );
          id = decoded;
          //console.log(decoded);
          success = true;
        } catch (error) {
          console.log(`error no jwt: ${error}`);
        }
      }
    }

    if (success) {
      // console.log(id);
      req.body.userId = id;
      next();
    } else {
      return res.status(401).json("Acesso proibido / Não autorizado");
    }
  },
};
