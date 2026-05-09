export declare function safeExec<T>(fn: () => T, fallback: T): T;
export declare function safeExecAsync<T>(fn: () => Promise<T>, fallback: T): Promise<T>;
