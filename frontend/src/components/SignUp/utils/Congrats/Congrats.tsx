import { useEffect } from "react";

import styles from "./Congrats.module.css";

const Congrats: React.FC<{
  setProgress: React.Dispatch<
    React.SetStateAction<{
      stepOne: boolean;
      stepTwo: boolean;
    }>
  >;
}> = (props) => {
  useEffect(()=>{
    props.setProgress({stepOne: true, stepTwo: true})
  },[])

  return (
    <div className={styles.main}>
      <h1>Congratularions!</h1>
    </div>
  );
};

export default Congrats;
