import { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
    START_TASK = 'START+TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESERT_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETED_TASK = 'COMPLETED_TASK'
}

export type TaskActionModel = 
    |{  
         type: TaskActionsTypes.START_TASK,
         payload: TaskModel
     }
    |{  
         type: TaskActionsTypes.COUNT_DOWN,
         payload: {secondsRemainig: number}
     }
    |{
        type: TaskActionsTypes.INTERRUPT_TASK,
     }
    |{
        type: TaskActionsTypes.COMPLETED_TASK,
     }
    | {
        type: TaskActionsTypes.RESET_STATE,
    } 
