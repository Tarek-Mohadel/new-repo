import styles from "./Login.module.css"

const Login = () => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }

  return (
    <div className={styles.main}>
      <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login