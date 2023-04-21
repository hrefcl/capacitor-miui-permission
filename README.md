# Capacitor MIUI Permission Plugin

Este plugin permite solicitar permisos de aperatura en segundo plano para dispositivos Xiaomi que ejecutan MIUI.

## Instalación

### Paso 1: Instalar el paquete del plugin

```bash
npm install &lt;ruta-del-plugin-local&gt;
```

Reemplace &lt;ruta-del-plugin-local&gt; con la ruta local del directorio del plugin en su sistema.

### Paso 2: Sincronizar el plugin con su proyecto Capacitor

```bash
npx cap sync
```

## Uso

Importe y utilice el plugin en su proyecto de la siguiente manera:

```typescript
import { CapacitorMiuiPermission } from '&lt;nombre-del-plugin&gt;';

// Reemplaza &lt;nombre-del-plugin&gt; con el nombre del plugin que has creado (por ejemplo, `capacitor-miui-permission`)

async function requestMIUIPermission() {
  try {
    await CapacitorMiuiPermission.requestMIUIPopupPermission();
    console.log('MIUI permission requested successfully');
  } catch (error) {
    console.error('Error requesting MIUI permission', error);
  }
}

// Llama a la función requestMIUIPermission() en el lugar apropiado de tu aplicación
```

## Ejecutar en Android

Ejecute su proyecto Capacitor en Android utilizando el siguiente comando:

```bash
npx cap run android
```

Esto abrirá Android Studio con su proyecto. Desde allí, podrá ejecutar su aplicación en un dispositivo o emulador Android.

## Licencia

MIT
```