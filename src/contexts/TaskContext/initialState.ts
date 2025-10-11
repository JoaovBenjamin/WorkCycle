import { TaskStateModel } from "../../models/TaskStateModel";

export const initialState : TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '21:00',
  activeTask: null,
  currentCycle: 0,
  config : {
      focus: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60,
  } 
}