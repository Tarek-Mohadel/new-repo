import { io } from "socket.io-client";

const socket = io("http://localhost:5656");

const test = () => {
  socket.emit("event");
};

export default test;
