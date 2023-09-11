---
sidebar_position: 7
---

# Last Step

## Before Running the App

To ensure that your modifications take effect before running the app, it's important to build the native Android and iOS modules by running the following command:

```bash
npx expo prebuild
```

## Running

To run the app, use the following commands:

For iOS:

```bash
npx expo run:ios
```

For Android:

```bash
npx expo run:android
```

## Deploying

To deploy the app, use the following commands:

### Development

For iOS:

```bash
npx expo prebuild && eas build --profile development --platform ios
```

For Android:

```bash
npx expo prebuild && eas build --profile development --platform android
```

Alternatively, you can run a single command for both platforms:

```bash
npx expo prebuild && eas build --profile development
```

### Production

For iOS:

```bash
npx expo prebuild && eas build --profile production --platform ios
```

For Android:

```bash
npx expo prebuild && eas build --profile production --platform android
```

Alternatively, you can run a single command for both platforms:

```bash
npx expo prebuild && eas build --profile production
```
