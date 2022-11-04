import { Request, Response, Router } from "express";

import { addUser } from "../mongodb/mongoose";
import { hashPassword } from "./utils/hash-compare Password";
import ResModel from "./utils/responseModel";

const signupRoute = Router()

signupRoute.post("/", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const hash = hashPassword(password)

  try {
    const result = await addUser(name, email, hash);
    res.status(200).send(new ResModel("success", result));
  } catch (err) {
    console.log(err);
    res.status(400).send(new ResModel("failed", null));
  }
})

export default signupRoute