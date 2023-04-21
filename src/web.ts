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
    throw new Error(
      'CapacitorMiuiPermission is not supported on the web platform',
    );
  }
}
