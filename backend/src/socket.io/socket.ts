import { Server } from "socket.io";

const io = new Server(5656, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const ffff = () => {
  io.on("connection", (socket) => {
    console.log(`client connected with id: ${socket.id}`);
    socket.on("event", () => {
      console.log("done!");
    });
  });
};

export default ffff
