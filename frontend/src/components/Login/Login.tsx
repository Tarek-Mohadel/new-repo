import { useRef } from "react";
import test from "../../socket.io/socket";

import styles from "./Login.module.css";

const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await fetch("http://localhost:8888/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current!.value,
          email: emailRef.current!.value,
        }),
      });
      console.log(await result.text())
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input id="name" placeholder="name" ref={nameRef} />
          <input id="email" placeholder="email" ref={emailRef} />
          <button>Login</button>
        </form>
        <button onClick={test}>test socket.io</button>
      </div>
    </div>
  );
};

export default Login;
