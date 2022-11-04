import React, { FormEvent, useEffect, useRef, useState } from "react";
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

  const [showPassword, setShowPassword] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.setProgress({ stepOne: false, stepTwo: false });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      }),
    })
      .then(async (res) => {
        console.log(res.status)
        if (res.status === 200) {
          navigate("/signup/terms");
        } else {
          throw new Error("cannot signup!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.main}>
      <h1>Create Account</h1>
      <form onSubmit={onSubmit}>
        <input id="name" placeholder="Name" ref={nameRef} />
        <input id="email" placeholder="Email" ref={emailRef} />
        <input
          type={!showPassword ? "password" : "text"}
          id="password"
          placeholder="Password"
          ref={passwordRef}
          autoComplete="off"
        />
        <div className={styles.option}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onClick={() => {
              setShowPassword((state) => {
                return !state;
              });
            }}
          />
          <span>show password</span>
        </div>
        <button>Next</button>
      </form>
    </div>
  );
};

export default Form;
