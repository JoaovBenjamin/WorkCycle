import { TaskStateModel } from "../../models/TaskStateModel";

export const initialState : TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '21:00',
  activeTask: null,
  currentCycle: 0,
  config : {
      focus: 25,
      shortBreak: 5,
      longBreak: 15,
  } 
}