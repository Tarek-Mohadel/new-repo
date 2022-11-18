import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export const sendMessage = (user: string, message: string) => {
  socket.emit("send-message", user, message);
};

export default socket;
