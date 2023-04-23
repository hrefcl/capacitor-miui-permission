# capacitor-voip-ios

Capacito Pluging VoiP Ios CallKit

## Install

```bash
npm install capacitor-voip-ios
npx cap sync
```

## API

<docgen-index>

* [`requestMIUIPopupPermission()`](#requestmiuipopuppermission)
* [`checkMIUIPermission(...)`](#checkmiuipermission)
* [`canDrawOverlays()`](#candrawoverlays)
* [`requestOverlayPermission()`](#requestoverlaypermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestMIUIPopupPermission()

```typescript
requestMIUIPopupPermission() => Promise<void>
```

--------------------


### checkMIUIPermission(...)

```typescript
checkMIUIPermission(options: { permission: string; }) => Promise<{ granted: boolean; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ permission: string; }</code> |

**Returns:** <code>Promise&lt;{ granted: boolean; }&gt;</code>

--------------------


### canDrawOverlays()

```typescript
canDrawOverlays() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### requestOverlayPermission()

```typescript
requestOverlayPermission() => Promise<void>
```

--------------------

</docgen-api>
