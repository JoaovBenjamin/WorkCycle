import { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import getNextCycle from "../../utils/getNextCycle";
import { TaskActionModel, TaskActionsTypes } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel{
    
    switch(action.type){
        case TaskActionsTypes.START_TASK: {
            const nextCycle = getNextCycle(state.currentCycle)
            const newTask = action.payload;
            const secondsRemaining = newTask.duration * 60
            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]
            };
        }
        case TaskActionsTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id === task.id){
                        return {...task, interruptedAt: Date.now()};
                    }
                    return task;
                })
            };
        }
        case TaskActionsTypes.RESET_STATE: {
            return state;
        }
    }
    
    
    return state;
}