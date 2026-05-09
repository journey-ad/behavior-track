import type { ResolvedConfig } from '../../types/config';
import type { MouseTrack, KeyboardEvent, ScrollEvent, TouchEvent } from '../../types/reports';
export interface BehaviorStream {
    mouse_tracks: MouseTrack[];
    keyboard_stream: KeyboardEvent[];
    scroll_events: ScrollEvent[];
    touch_events: TouchEvent[];
}
export declare class BehaviorManager {
    private mouse;
    private keyboard;
    private scroll;
    private touch;
    private _config;
    constructor(config: ResolvedConfig);
    start(): void;
    stop(): void;
    drain(): BehaviorStream;
    private shouldSample;
}
