import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import dotenv from "dotenv";
dotenv.config();
import { v4 as uuidv4 } from "uuid";

import signupRoute from "./express routes/signupRoutes";
import loginRoute from "./express routes/loginRoute";
import usersRoute from "./express routes/usersRoute";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

/////////// socket.io ///////////
io.on("connection", (socket) => {
  console.log(`client connected with id: ${socket.id}`);

  socket.on("sent-message", (arg) => {
    console.log(arg);
  });

  socket.on("call", (user) => {
    const room = uuidv4();
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log(`client disconnected: ${socket.id}`);
  });
});

/////////// express ///////////
app.use(express.json());
app.use(cors());

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);

httpServer.listen(3001, () => {
  console.log("your server is running!");
});
