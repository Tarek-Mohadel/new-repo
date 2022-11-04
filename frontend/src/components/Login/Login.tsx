import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await fetch("http://localhost:3001/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current!.value,
          password: passwordRef.current!.value,
        }),
      });

      if(result.status === 200){
        navigate("/users")
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input id="email" placeholder="email" ref={emailRef} />
          <input id="password" placeholder="password" ref={passwordRef} />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
