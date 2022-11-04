import { Request, Response, Router } from "express";

import { findUser } from "../mongodb/mongoose";
import { comparePassword } from "./utils/hash-compare Password";
import ResModel from "./utils/responseModel";

const loginRoute = Router();

loginRoute.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await findUser(email);

    if (!result) {
      res.status(401).send(new ResModel("user not found", null));
      return;
    }

    const hash = result!.password;
    const compare = comparePassword(password, hash);

    if (compare) {
      res.status(200).send(new ResModel("user logged in successfully", null));
    } else {
      res.status(401).send(new ResModel("wrong information", null));
    }
  } catch (err) {
    res.status(500).send(new ResModel("something went wrong", null));
  }
});

export default loginRoute;
