import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import getNextCycle from '../../utils/getNextCycle';
import getNextCycleType from '../../utils/getNextCycleType';
import styles from './Cycles.module.css';

function Cycles() {
  const {state} = useTaskContext();

  const cycleDescription = {
    focus: "Foco",
    longBreak: "Descanso Longo",
    shortBreak: "Descanso Curto"
  }

  const cyclesStep = Array.from({length: state.currentCycle})
  return (
    <>
        <div className={styles.cycles}>
            <span>Ciclos: </span>
            <div className={styles.cyclesDots}>
              {cyclesStep.map((_, index) => {
                const nextCycle = getNextCycle(index);
                const nextCycleType = getNextCycleType(nextCycle);
                return <span 
                    key={nextCycle}
                    className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                    aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
                    title= {`Indicado de ciclo de ${cycleDescription[nextCycleType]}`}
                    ></span>
              })}
               
            </div>
        </div>
    </>
  )
}

export default Cycles
  