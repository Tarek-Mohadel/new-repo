import { useDispatch } from "react-redux";

import { setChat } from "../../../../redux store/reducers/chat";
import styles from "./User.module.css";

const User: React.FC<{ name: string; email: string }> = (props) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(setChat({ show: true , user: {name: props.name, email: props.email}}));
  };

  return (
    <li className={styles.main} key={props.name} onClick={handler}>
      {`${props.name}`}
    </li>
  );
};

export default User;
