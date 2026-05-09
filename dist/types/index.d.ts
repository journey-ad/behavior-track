import type { SDKConfig, EnvStaticReport, BehaviorStreamReport, FormDetectConfig } from './types';
declare const BehaviorTrack: {
    init: (config: SDKConfig) => Promise<void>;
    getEnvInfo: () => Promise<EnvStaticReport>;
    onBehaviorReport: (callback: (data: BehaviorStreamReport) => void) => void;
    detect: (config: FormDetectConfig) => void;
    pause: () => void;
    resume: () => void;
    destroy: () => void;
};
export { BehaviorTrack };
export type { SDKConfig, EnvStaticReport, BehaviorStreamReport, FormDetectConfig };
