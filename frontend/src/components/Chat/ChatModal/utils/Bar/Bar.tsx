import { useDispatch } from "react-redux"

import { setChat } from "../../../../../redux store/reducers/chat"
import { initialState } from "../../../../../redux store/reducers/chat"
import styles from "./Bar.module.css"

const Bar: React.FC<{name: string}> = (props)=>{
  const dispatch = useDispatch()

  const handler = ()=>{
    dispatch(setChat(initialState))
  }

  return (
    <div className={styles.bar}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.close} onClick={handler}>close button</div>
    </div>
  )
}

export default Bar