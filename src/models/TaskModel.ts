export type TaskModel ={
    id: string;
    name: string;
    duration: number;
    startedAt: number;
    completedAt: number | null;
    interruptedAt: number | null;
    type: 'focus' | 'shortBreak' | 'longBreak';

}