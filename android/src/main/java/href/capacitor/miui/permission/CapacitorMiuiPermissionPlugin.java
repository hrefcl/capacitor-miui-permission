package href.capacitor.miui.permission;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

@CapacitorPlugin(name = "CapacitorMiuiPermission")
public class CapacitorMiuiPermissionPlugin extends Plugin {

    @PluginMethod
    public void requestMIUIPopupPermission(PluginCall call) {
        if (!isMIUI()) {
            call.reject("Not a MIUI device");
            return;
        }

        try {
            Intent localIntent = new Intent("miui.intent.action.APP_PERM_EDITOR");
            localIntent.setClassName("com.miui.securitycenter", "com.miui.permcenter.permissions.PermissionsEditorActivity");
            localIntent.putExtra("extra_pkgname", getContext().getPackageName());
            getActivity().startActivity(localIntent);
            call.resolve();
            return;
        } catch (Exception ignore) {
        }

        try {
            Intent localIntent = new Intent("miui.intent.action.APP_PERM_EDITOR");
            localIntent.setClassName("com.miui.securitycenter", "com.miui.permcenter.permissions.AppPermissionsEditorActivity");
            localIntent.putExtra("extra_pkgname", getContext().getPackageName());
            getActivity().startActivity(localIntent);
            call.resolve();
            return;
        } catch (Exception ignore) {
        }

        Intent intent = new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", getContext().getPackageName(), null);
        intent.setData(uri);
        getActivity().startActivity(intent);
        call.resolve();
    }

    private boolean isMIUI() {
        String device = Build.MANUFACTURER;
        if (device.equals("Xiaomi")) {
            try {
                Properties prop = new Properties();
                prop.load(new FileInputStream(new File(Environment.getRootDirectory(), "build.prop")));
                return prop.getProperty("ro.miui.ui.version.code", null) != null
                        || prop.getProperty("ro.miui.ui.version.name", null) != null
                        || prop.getProperty("ro.miui.internal.storage", null) != null;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return false;
    }
}
