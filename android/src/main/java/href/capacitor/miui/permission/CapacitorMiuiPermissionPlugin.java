package href.capacitor.miui.permission;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;
import android.provider.Settings;

@CapacitorPlugin(name = "CapacitorMiuiPermission")
public class CapacitorMiuiPermissionPlugin extends Plugin {

    private static final int REQUEST_OVERLAY_PERMISSION = 100;

    @PluginMethod
    public void canDrawOverlays(PluginCall call) {
        JSObject result = new JSObject();
        result.put("value", canDrawOverlays());
        call.resolve(result);
    }

    @PluginMethod
    public void requestOverlayPermission(PluginCall call) {
        if (canDrawOverlays()) {
            call.resolve();
            return;
        }

        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + getContext().getPackageName()));
        startActivityForResult(call, intent, REQUEST_OVERLAY_PERMISSION);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);

        if (requestCode == REQUEST_OVERLAY_PERMISSION) {
            PluginCall savedCall = getSavedCall();
            if (savedCall == null) {
                return;
            }

            if (canDrawOverlays()) {
                savedCall.resolve();
            } else {
                savedCall.reject("Overlay permission not granted");
            }
        }
    }

    private boolean canDrawOverlays() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            return Settings.canDrawOverlays(getContext());
        }
        return true;
    }

    @PluginMethod
    public void checkMIUIPermission(PluginCall call) {
        String permission = call.getString("permission");
        if (permission == null || permission.isEmpty()) {
            call.reject("Permission argument is missing");
            return;
        }

        if (!isMIUI()) {
            call.reject("Not a MIUI device");
            return;
        }

        int permissionStatus = ContextCompat.checkSelfPermission(getContext(), permission);
        JSObject result = new JSObject();
        result.put("granted", permissionStatus == PackageManager.PERMISSION_GRANTED);
        call.resolve(result);
    }

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
        } catch (Exception ignore) {}

        try {
            Intent localIntent = new Intent("miui.intent.action.APP_PERM_EDITOR");
            localIntent.setClassName("com.miui.securitycenter", "com.miui.permcenter.permissions.AppPermissionsEditorActivity");
            localIntent.putExtra("extra_pkgname", getContext().getPackageName());
            getActivity().startActivity(localIntent);
            call.resolve();
            return;
        } catch (Exception ignore) {}

        Intent intent = new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", getContext().getPackageName(), null);
        intent.setData(uri);
        getActivity().startActivity(intent);
        call.resolve();
    }

    private boolean isMIUI() {
        Process process = null;
        BufferedReader bufferedReader = null;
        try {
            process = new ProcessBuilder("/system/bin/getprop", "ro.miui.ui.version.name").redirectErrorStream(true).start();
            bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String miuiVersion = bufferedReader.readLine();
            if (miuiVersion != null && !miuiVersion.isEmpty()) {
                return true;
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (process != null) {
                process.destroy();
            }
        }
        return false;
    }
}
