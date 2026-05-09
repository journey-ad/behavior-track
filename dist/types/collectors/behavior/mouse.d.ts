import type { MouseTrack } from '../../types/reports';
export declare class MouseTracker {
    private tracks;
    private handlers;
    start(): void;
    stop(): void;
    drain(): MouseTrack[];
}
