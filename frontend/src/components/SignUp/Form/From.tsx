import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

const Form: React.FC<{
  setProgress: React.Dispatch<
    React.SetStateAction<{
      stepOne: boolean;
      stepTwo: boolean;
    }>
  >;
}> = (props) => {
  const navigate = useNavigate()

  useEffect(()=>{
    props.setProgress({stepOne: false, stepTwo: false})
  },[])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/signup/terms")
  };

  return (
    <div className={styles.main}>
      <h1>Create Account</h1>
      <form onSubmit={onSubmit}>
        <input id="name" placeholder="Name" />
        <input id="email" placeholder="Email" />
        <button>Next</button>
      </form>
    </div>
  );
};

export default Form;
