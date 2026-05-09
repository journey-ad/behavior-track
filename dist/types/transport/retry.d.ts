export interface RetryOptions {
    maxRetries: number;
    baseDelay: number;
    maxDelay: number;
}
export declare class RetryQueue {
    private options;
    private pending;
    constructor(options?: Partial<RetryOptions>);
    execute(payload: unknown, sendFn: (data: unknown) => Promise<boolean>): Promise<boolean>;
    addToPending(payload: unknown): void;
    drainPending(): Array<{
        payload: unknown;
        attempts: number;
    }>;
    private getDelay;
    private sleep;
}
