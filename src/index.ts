import { registerPlugin } from '@capacitor/core';
import type { CapacitorMiuiPermissionPlugin } from './definitions';

const CapacitorMiuiPermission = registerPlugin<CapacitorMiuiPermissionPlugin>(
  'CapacitorMiuiPermission',
  {
    web: () => import('./web').then(m => new m.CapacitorMiuiPermissionWeb()),
  },
);

export * from './definitions';
export { CapacitorMiuiPermission };