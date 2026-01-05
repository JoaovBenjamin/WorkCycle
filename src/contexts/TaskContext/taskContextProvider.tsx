import { useEffect, useReducer } from "react"
import { TimerWorkerManager } from "../../workers/TimeWorkerManager"
import { initialState } from "./initialState"
import { TaskContext } from "./taskContext"
import { taskReducer } from "./TaskReducer"
import { TaskActionsTypes } from "./taskActions"

export function TaskContextProvider({children}: {children: React.ReactNode}){
    const [state, dispatch] = useReducer(taskReducer,initialState)

    const worker = TimerWorkerManager.getInstance();

        worker.onmessage(e => {
            const countDownSeconds = e.data;
            console.log(countDownSeconds);

            if (countDownSeconds <= 0) {
                dispatch({
                    type:TaskActionsTypes.COMPLETED_TASK
                })
                worker.terminate();
            }else{
                dispatch({
                    type: TaskActionsTypes.COUNT_DOWN, 
                    payload:{secondsRemainig: countDownSeconds}
                })
            }
        });

    useEffect(() => {
        console.log(state)
        if(!state.activeTask){
            console.log("WORKER terminado por falta de activeTask")
            worker.terminate()
        }
        worker.postMessage(state)
    },[worker,state])

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}  
        </TaskContext.Provider>
    )
}
