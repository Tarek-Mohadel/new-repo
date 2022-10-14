import express, { Request, Response } from "express";
import cors from "cors";

import addUser from "./mongodb/mongoose";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/signup", async (req: Request, res: Response) => {
  res.json({message: "filffmfd;fd,.f/feed"})
  // const result = await addUser(req.body.name, req.body.email, req.body.password)
  // res.send(result)
});

app.listen(8888, () => {
  console.log("your server is running!");
});
