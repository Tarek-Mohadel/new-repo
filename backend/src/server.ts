import express, { Request, Response } from "express";

import addUser from "./mongodb/mongoose";

const app = express();

app.use(express.json())

app.post("/signup", async (req: Request, res: Response) => {
  console.log(req.body)
  // const result = await addUser(req.body.name, req.body.email, req.body.password)
  // res.send(result)
});

app.listen(8888, () => {
  console.log("your server is running!");
});
