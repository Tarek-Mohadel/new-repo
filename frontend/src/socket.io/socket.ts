import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const sendMessage = (message: string) => {
  socket.emit("sent-message", message);
};

export default sendMessage;
