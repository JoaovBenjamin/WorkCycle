import { TaskStateModel } from "../../models/TaskStateModel";

export const initialState : TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config : {
      focus: 1,
      shortBreak: 1,
      longBreak: 1,
  } 
}