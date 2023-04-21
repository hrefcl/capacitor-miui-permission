declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorMiuiPermission: CapacitorMiuiPermissionPlugin;
  }
}

export interface CapacitorMiuiPermissionPlugin {
  requestMIUIPopupPermission(): Promise<void>;
}
