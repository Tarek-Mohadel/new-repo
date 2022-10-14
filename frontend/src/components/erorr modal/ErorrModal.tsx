
import styles from "./ErorrModal.module.css"

const ErorrModal: React.FC<{
  message: string
}> = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.test}>{props.message}</div>
    </div>
  )
}

export default ErorrModal