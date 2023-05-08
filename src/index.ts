import { registerPlugin, Capacitor } from '@capacitor/core';
import type { CapacitorMiuiPermissionPlugin } from './definitions';
const isAndroid = Capacitor.getPlatform() === 'android';

const CapacitorMiuiPermission = isAndroid
  ? registerPlugin<CapacitorMiuiPermissionPlugin>('CapacitorMiuiPermission', {
      web: () => import('./web').then((m) => new m.CapacitorMiuiPermissionWeb()),
    })
  : null;

export * from './definitions';
export { CapacitorMiuiPermission };
