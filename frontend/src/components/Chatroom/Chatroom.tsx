import styles from "./Chatroom.module.css";

const Chatroom = () => {
  const messages = [
    { sender: "tarek", message: "first message" },
    { sender: "ttttt", message: "first response" },
    { sender: "tarek", message: "second message" },
    { sender: "ttttt", message: "second response" },
    { sender: "tarek", message: "third message" },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.chatbox}>
        <ul>
          {messages.map((message) => {
            return <li>{`${message.sender}: ${message.message}`}</li>;
          })}
        </ul>
      </div>
      <form>
        <input></input>
        <button>send</button>
      </form>
    </div>
  );
};

export default Chatroom;
