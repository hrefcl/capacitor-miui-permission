import { registerPlugin } from '@capacitor/core';
const CapacitorMiuiPermission = registerPlugin('CapacitorMiuiPermission', {
    web: () => import('./web').then(m => new m.CapacitorMiuiPermissionWeb()),
});
export * from './definitions';
export { CapacitorMiuiPermission };
//# sourceMappingURL=index.js.map