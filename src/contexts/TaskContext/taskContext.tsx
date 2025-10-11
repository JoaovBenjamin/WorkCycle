import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialState } from "./initialState";

type TaskContextType = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContext : TaskContextType = {
  state: initialState,
  setState: () => {}
}

export const TaskContext = createContext<TaskContextType>(initialContext)