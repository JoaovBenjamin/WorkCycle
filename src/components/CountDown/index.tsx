import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import styles from './CountDown.module.css'



function CountDown() {
  const {state} = useTaskContext()
  return (
    <div className={styles.container}>
      {state.formatedSecondsRemaining}
    </div>
  )
}

export default CountDown
