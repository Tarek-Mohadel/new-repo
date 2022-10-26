import express, { Request, Response } from "express";
import cors from "cors";

import { addUser, findUser } from "./mongodb/mongoose";
import userModel from "./mongodb/data models/user";
import ffff from "./socket.io/socket";

const app = express();

app.use(express.json());
app.use(cors());

ffff()

// app.get("/signup", async (req: Request, res: Response) => {
//   res.json({message: "filffmfd;fd,.f/feed"})
//   // const result = await addUser(req.body.name, req.body.email, req.body.password)
//   // res.send(result)
// });

app.post("/signup", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await addUser(name, email);
    res.send(result);
  } catch (err) {
    console.log(err)
    res.status(400).send("failed");
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const email: string = req.body.email;

  try {
    const result = await findUser(email);

    if(!result){
      throw "user not found!"
    }

    const name = result!.name;

    if (name === req.body.name) {
      res.send("user logged in successfully");
    } else {
      res.send("wrong information!")
    };

  } catch (err) {
    res.send(err)
  }
});

app.listen(8888, () => {
  console.log("your server is running!");
});


