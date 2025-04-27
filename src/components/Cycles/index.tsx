import styles from './Cycles.module.css';

function Cycles() {
  return (
    <>
        <div className={styles.cycles}>
            <span>Ciclos: </span>
            <div className={styles.cyclesDots}>
               <span 
               className={`${styles.cyclesDot} ${styles.workTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.workTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.workTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.workTime}`}>
               </span>
               <span 
               className={`${styles.cyclesDot} ${styles.longBreakTime}`}>
               </span>
            </div>
        </div>
    </>
  )
}

export default Cycles
