import React, { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

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
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.setProgress({ stepOne: false, stepTwo: false });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log(nameRef.current?.value, emailRef.current?.value)

    fetch("http://localhost:8888/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
      }),
    }).then(async (res)=>{
      if(res.status === 400){
        throw new Error("cannot signup!")
      }else{
        navigate("/signup/terms")
      }

    }).catch((err)=>{
      console.log(err)
    });
  };

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
