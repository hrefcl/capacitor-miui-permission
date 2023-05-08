var capacitorCapacitorMiuiPermission = (function (exports, core) {
    'use strict';

    const isAndroid = core.Capacitor.getPlatform() === 'android';
    const CapacitorMiuiPermission = isAndroid
        ? core.registerPlugin('CapacitorMiuiPermission', {
            web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorMiuiPermissionWeb()),
        })
        : null;

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
