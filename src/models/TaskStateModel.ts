import { TaskModel } from "./TaskModel";

export type TaskStateModel ={
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config : {
        focus: number;
        shortBreak: number;
        longBreak: number;
    }
}