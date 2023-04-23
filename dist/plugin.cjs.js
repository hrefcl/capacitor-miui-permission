'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorMiuiPermission = core.registerPlugin('CapacitorMiuiPermission', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorMiuiPermissionWeb()),
});

class CapacitorMiuiPermissionWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorMiuiPermissionWeb: CapacitorMiuiPermissionWeb
});

exports.CapacitorMiuiPermission = CapacitorMiuiPermission;
//# sourceMappingURL=plugin.cjs.js.map
