import { useEffect, useReducer, useState } from "react"
import { initialState } from "./initialState"
import { TaskContext } from "./taskContext"
import { taskReducer } from "./TaskReducer"

export function TaskContextProvider({children}: {children: React.ReactNode}){
    const [state, dispatch] = useReducer(taskReducer,initialState)

    useEffect(() => {
        console.log(state)
    },[state])

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}  
        </TaskContext.Provider>
    )
}
