import type { SDKConfig, EnvStaticReport, BehaviorStreamReport, FormDetectConfig } from '../types';
export declare class BehaviorTrackSDK {
    private config;
    private eventBus;
    private lifecycle;
    private deviceId;
    private sessionId;
    private envPromise;
    private behaviorManager;
    private formDetectors;
    private transport;
    private sequenceNo;
    init(config: SDKConfig): Promise<void>;
    getEnvInfo(): Promise<EnvStaticReport>;
    onBehaviorReport(callback: (data: BehaviorStreamReport) => void): void;
    detect(config: FormDetectConfig): void;
    pause(): void;
    resume(): void;
    destroy(): void;
    private collectEnv;
    private computeUpdatedRiskScore;
    private setupBatchFlush;
}
