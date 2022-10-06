import { Link } from "react-router-dom";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.myroot}>
      <h1>welcome to my website.</h1>
      <div className={styles.buttons}>
        <Link to="/signup">signup</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Welcome;
