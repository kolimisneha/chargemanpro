f# EVChargeMan

Cross-platform mobile app for EV charging station discovery, session management, and payments.

- **App ID:** `com.chargeman.evgracias`
- **Package Name:** `com.evchargeman.evgracias`
- **Platforms:** Android (Capacitor), iOS, Web (Ionic PWA)
- **Framework:** Ionic 6 + Angular 13 + Capacitor 3

## Prerequisites

- Node.js, npm
- Angular CLI: `npm install -g @angular/cli`
- Java 11+ and Android Studio (for Android builds)

## Development

```bash
npm install
ng serve          # web dev server at localhost:4200
```

## Build for Production

```bash
npm run build             # or ng build --prod
npx cap copy android      # sync web assets to Android
npx cap update android    # update plugins if changed
```

## Generate Release AAB (Play Store)

```bash
cd android
./gradlew bundleRelease
```

The signed AAB is at:
`android/app/build/outputs/bundle/release/app-release.aab`

## Upload to Google Play Store

### 1. Fix environment for production

`src/environments/environment.ts` currently uses a dev HTTP server. Ensure production
values are set in `src/environments/environment.prod.ts` and `angular.json` swaps them
on build, or update `environment.ts` to point to the production server
(`https://evchargeman.com/cs_services/`).

### 2. Secure sensitive keys

Google Maps API key and Razorpay live key are hardcoded. Restrict the Maps key in
Google Cloud Console by app package name. Consider moving keys to server-side proxy.

### 3. Bump version

Edit `android/app/build.gradle`:

```groovy
versionCode 17      // increment by 1 each release
versionName "1.15"  // your new version
```

### 4. Build & sync

```bash
npm run build && npx cap copy android
```

### 5. Generate AAB

```bash
cd android && ./gradlew bundleRelease
```

### 6. Prepare Play Store listing

You'll need:
- **App name:** EVChargeMan
- **Short description** (80 chars)
- **Full description** (4000 chars)
- **Screenshots** (phone + tablet, min 2 each)
- **Feature graphic** (1024×500 PNG)
- **App icon** (512×512 PNG)
- **Content rating** questionnaire
- **Privacy Policy** URL (the app has a `/privacy-policy` route — host it live)

### 7. Upload

1. Go to [Google Play Console](https://play.google.com/console)
2. Create new app → select **App**
3. Fill in **Store listing** details
4. **Production > Release > Create new release**
5. Upload `app-release.aab`
6. Review and roll out

### 8. Common pitfalls

| Issue | Fix |
|---|---|
| HTTP traffic blocked | Add `android:usesCleartextTraffic="true"` in `AndroidManifest.xml` |
| Target API level | Currently 34 — meets 2026 requirements |
| 64-bit requirement | Handled automatically by AGP 7.4.1 |
| Losing signing key | **Backup `evchargeman-release-key.jks` and passwords** — irreversible if lost |
| google-services.json | Missing — Firebase/push won't work unless added |

### 9. Pre-submission checks

- Test AAB locally: `bundletool install-apks --apks=app-release.aab`
- Run `cd android && ./gradlew lint`
- Verify all URLs in `src/app/constants.ts` point to production server
- Confirm Razorpay key is the live key (`rzp_live_...`)
