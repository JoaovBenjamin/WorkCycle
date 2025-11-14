import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialState } from "./initialState";
import { TaskActionModel } from "./taskActions";

type TaskContextType = {
  state: TaskStateModel;
  dispatch: React.Dispatch< TaskActionModel>;
}

const initialContext : TaskContextType = {
  state: initialState,
  dispatch: () => {}
}

export const TaskContext = createContext<TaskContextType>(initialContext)