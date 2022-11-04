import { Request, Response, Router } from "express";

import userModel from "../mongodb/data models/user";
import ResModel from "./utils/responseModel";

const usersRoute = Router();

usersRoute.get("/", async (req: Request, res: Response) => {
  try {
    const result = await userModel.find().select({ name: 1, email: 1, _id: 0 });
    res.send(new ResModel("success", result));
  } catch (err) {
    res.send(new ResModel("failed", err))
  }
});

export default usersRoute;
