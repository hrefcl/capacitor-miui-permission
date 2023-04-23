import { WebPlugin } from '@capacitor/core';
export class CapacitorMiuiPermissionWeb extends WebPlugin {
    constructor() {
        super({
            name: 'CapacitorMiuiPermission',
            platforms: ['web'],
        });
    }
    async requestMIUIPopupPermission() {
        throw new Error('Not available on the web');
    }
    async checkMIUIPermission(options) {
        console.warn('checkMIUIPermission is not supported on the web.', options);
        return { granted: false };
    }
    async canDrawOverlays() {
        return { value: false };
    }
    async requestOverlayPermission() {
        throw new Error('Not available on the web');
    }
}
//# sourceMappingURL=web.js.map