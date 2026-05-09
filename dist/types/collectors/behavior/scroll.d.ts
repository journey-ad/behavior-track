import type { ScrollEvent } from '../../types/reports';
export declare class ScrollTracker {
    private events;
    private lastTop;
    private lastTime;
    private handler;
    start(): void;
    stop(): void;
    drain(): ScrollEvent[];
}
