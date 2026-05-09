type Task = () => void;
export declare class Scheduler {
    private queue;
    private running;
    schedule(task: Task): void;
    private flush;
    private nextTick;
    clear(): void;
}
export {};
