import { WebPlugin } from '@capacitor/core';
import { CapacitorMiuiPermissionPlugin } from './definitions';

export class CapacitorMiuiPermissionWeb
  extends WebPlugin
  implements CapacitorMiuiPermissionPlugin
{
  constructor() {
    super({
      name: 'CapacitorMiuiPermission',
      platforms: ['web'],
    });
  }

  async requestMIUIPopupPermission(): Promise<void> {
    throw new Error('Not available on the web');
  }

  async checkMIUIPermission(options: {
    permission: string;
  }): Promise<{ granted: boolean }> {
    console.warn('checkMIUIPermission is not supported on the web.', options);
    return { granted: false };
  }

  async canDrawOverlays(): Promise<{ value: boolean }> {
    return { value: false };
  }

  async requestOverlayPermission(): Promise<void> {
    throw new Error('Not available on the web');
  }
}
