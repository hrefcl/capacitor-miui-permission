import { registerPlugin, Capacitor } from '@capacitor/core';
const isAndroid = Capacitor.getPlatform() === 'android';
const CapacitorMiuiPermission = isAndroid
    ? registerPlugin('CapacitorMiuiPermission', {
        web: () => import('./web').then((m) => new m.CapacitorMiuiPermissionWeb()),
    })
    : null;
export * from './definitions';
export { CapacitorMiuiPermission };
//# sourceMappingURL=index.js.map