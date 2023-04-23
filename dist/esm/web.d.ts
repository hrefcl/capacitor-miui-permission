import { WebPlugin } from '@capacitor/core';
import { CapacitorMiuiPermissionPlugin } from './definitions';
export declare class CapacitorMiuiPermissionWeb extends WebPlugin implements CapacitorMiuiPermissionPlugin {
    constructor();
    requestMIUIPopupPermission(): Promise<void>;
    checkMIUIPermission(options: {
        permission: string;
    }): Promise<{
        granted: boolean;
    }>;
    canDrawOverlays(): Promise<{
        value: boolean;
    }>;
    requestOverlayPermission(): Promise<void>;
}
