import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import getNextCycle from '../../utils/getNextCycle';
import getNextCycleType from '../../utils/getNextCycleType';


export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    focus: <span>Foque por {state.config.focus}min</span>,
    shortBreak: <span>Descanse por {state.config.shortBreak}min</span>,
    longBreak: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    focus: (
      <span>
        Próximo ciclo é de <b>{state.config.focus}min</b>
      </span>
    ),
    shortBreak: (
      <span>Próximo descaso é de {state.config.shortBreak}min</span>
    ),
    longBreak: <span>Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}