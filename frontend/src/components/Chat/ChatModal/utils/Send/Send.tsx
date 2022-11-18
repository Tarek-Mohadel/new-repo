import { useRef } from "react";

import socket from "../../../../../socket.io/socket";
import { sendMessage } from "../../../../../socket.io/socket";
import styles from "./Send.module.css";

const Send: React.FC<{ email: string }> = (props) => {
  const messageRef = useRef<HTMLInputElement>(null);

  const handler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    socket.emit("test");
    // sendMessage(props.email, messageRef.current!.value);
  };

  return (
    <form className={styles.send} onSubmit={handler}>
      <input ref={messageRef} />
      <button>send</button>
    </form>
  );
};

export default Send;
