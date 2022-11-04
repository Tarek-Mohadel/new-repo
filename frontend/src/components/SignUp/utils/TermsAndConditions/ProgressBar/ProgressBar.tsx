import React from "react";

import styles from "./ProgressBar.module.css";

const ProgressBar: React.FC<{
  progress: {
    stepOne: boolean;
    stepTwo: boolean;
  };
}> = (props) => { 
  return (
    <ul className={styles.progress}>
      <li className={props.progress.stepOne ? styles.active : ""}>STEP ONE</li>
      <li className={props.progress.stepTwo ? styles.active : ""}>STEP TWO</li>
      <li>STEP THREE</li>
    </ul>
  );
};

export default ProgressBar;
