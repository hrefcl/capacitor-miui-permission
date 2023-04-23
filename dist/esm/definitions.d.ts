export interface CapacitorMiuiPermissionPlugin {
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
declare global {
    interface PluginRegistry {
        CapacitorMiuiPermission: CapacitorMiuiPermissionPlugin;
    }
}
export * from './index';
