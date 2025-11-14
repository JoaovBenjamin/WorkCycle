import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import getNextCycle from "../../utils/getNextCycle";
import getNextCycleType from "../../utils/getNextCycleType";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import Input from "../Input";



export default function FormMain(){
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleClickStopButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    dispatch({type:TaskActionsTypes.INTERRUPT_TASK})
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


      dispatch({type: TaskActionsTypes.START_TASK, payload: newTask})

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