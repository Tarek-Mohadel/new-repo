import React, { FormEvent, useEffect, useRef } from "react";
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
  const navigate = useNavigate();

  useEffect(() => {
    props.setProgress({ stepOne: false, stepTwo: false });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:8888/signup")
    // , {
    //   method: "POST",
    //   body: JSON.stringify({name: nameRef, email: emailRef}),
    // }).then(()=>{
    //   navigate("/signup/terms");
    // });
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.main}>
      <h1>Create Account</h1>
      <form onSubmit={onSubmit}>
        <input id="name" placeholder="Name" ref={nameRef} />
        <input id="email" placeholder="Email" ref={emailRef} />
        <button>Next</button>
      </form>
    </div>
  );
};

export default Form;
