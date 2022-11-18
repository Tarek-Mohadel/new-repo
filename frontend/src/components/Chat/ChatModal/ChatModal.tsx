import Bar from "./utils/Bar/Bar";
import Messages from "./utils/Messages/Messages";
import Send from "./utils/Send/Send";

import styles from "./ChatModal.module.css";

const ChatModal: React.FC<{ name: string; email: string }> = (props) => {
  return (
    <div className={styles.chatmodal}>
      <Bar name={props.name} />
      <Messages />
      <Send email={props.email}/>
    </div>
  );
};

export default ChatModal;
