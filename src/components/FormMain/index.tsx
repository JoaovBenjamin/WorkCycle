import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
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

  function handleClickStopButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    setState(prevState => {
      return{
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining:"00:00",
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return {...task, interruptedAt: Date.now()}
          }
          return task
        })
      }
    })
  }

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
              disabled={!!state.activeTask}
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
            {!state.activeTask && (
               <DefaultButton 
               type="submit" 
               icon={<PlayCircleIcon/>}
               aria-label="Iniciar uma nova tarefa"
               title="Iniciar uma nova tarefa"/>)}
              
            {!!state.activeTask &&(
              <DefaultButton 
              type="button"
              title="Parar um tarefa"
              aria-label="Parar uma tarefa"
              color="red"
              icon={<StopCircleIcon/>}
              onClick={handleClickStopButton}
              />
            )}                        
          </div>
        </form>
    )
}