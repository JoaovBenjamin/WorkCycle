import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";
import Input from "../Input";
import { FormEvent, useRef} from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import getNextCycle from "../../utils/getNextCycle";
import getNextCycleType from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";



export default function FormMain(){
  const { state,setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>){
      event.preventDefault();

      if(taskNameInput.current === null) return

      const taskName = taskNameInput.current.value.trim();

      if(!taskName){
        alert('Por favor, digite uma task válida.');
        return;
      } 

      const newTask : TaskModel = {
        id: Date.now().toString(),
        name: taskName,
        startedAt: Date.now(),
        completedAt: null,
        interruptedAt: null,
        duration: state.config[nextCycleType],
        type: nextCycleType
      }

      const secondsRemaining = newTask.duration * 60

      setState((prevState) => ({
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask]
      }))

  }

    return(
         <form onSubmit={handleCreateNewTask} className='form' action=''>
          <div className='formRow'>
           <Input 
              id='meuInput' 
              type='text' 
              text='Task'
              placeholder='Digite a Task'
              ref={taskNameInput}
           />
          </div>
          <div className='formRow'>
            <p>Proxímo intervalo é </p>
          </div>
          {state.currentCycle > 0 && (
              <div className='formRow'>
              <Cycles/>
          </div>
          )}
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}