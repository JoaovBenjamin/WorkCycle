import { useEffect, useState } from "react"
import { initialState } from "./initialState"
import { TaskContext } from "./taskContext"

export function TaskContextProvider({children}: {children: React.ReactNode}){
    const [state, setState] = useState(initialState)

    useEffect(() => {
        console.log(state)
    },[state])

    return(
        <TaskContext.Provider value={{state,setState}}>
            {children}
        </TaskContext.Provider>
    )
}
