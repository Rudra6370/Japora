# Japora - Project Audit Report

## Audit Date: November 9, 2026
## App Version: 1.0.0+5
## Developer: Rudra Prakash

---

## 1. Application Information

### App Name
- **Japora** (as declared in `android/app/src/main/AndroidManifest.xml` and `lib/core/constants/app_constants.dart`)

### Package ID
- **com.rudra.japora** (inferred from AndroidManifest receiver name `.JaapWidgetProvider` and `android:name=\".MainActivity\"`)
- *Verified*: The widget receiver action `com.rudra.japora.INCREMENT` and the package name throughout the source code consistently use `com.rudra.japora`

### App Description
> "A modern Jaap Counter application for spiritual practice and mantra counting." (from `pubspec.yaml` and `app_constants.dart`)

---

## 2. Application Icon & Logos

### Available Assets
- `assets/app_icon.png` (referenced in `pubspec.yaml` and `AndroidManifest.xml`)
- Adaptive icon background: `#E8B923` (from `pubspec.yaml`)
- Adaptive icon foreground: `assets/app_icon.png` (from `pubspec.yaml`)

### Icon Configuration
- Android: `flutter_launcher_icons` configured with `image_path: "assets/app_icon.png"`
- iOS: Enabled with `remove_alpha_ios: true`

---

## 3. Main Purpose & Target Audience

### Purpose
Japora is a Jaap Counter application for spiritual practice and mantra counting. It helps users track their mantra repetition sessions, maintain streaks, and monitor spiritual progress.

### Target Audience
- Individuals practicing japa (mantra repetition) from Hindu spiritual traditions
- Users interested in meditation, breathing exercises, and spiritual tracking
- People who want to maintain daily spiritual practice records
- Users who prefer local data storage over cloud-based solutions

---

## 4. All Implemented Features

Based on source code analysis, Japora includes the following features:

### Core Features
1. **Jaap Counting** - Track mantra counts with precision
2. **Session History** - Save and view past jaap sessions
3. **Progress Tracking** - Monitor daily and lifetime counts
4. **Target Settings** - Set custom daily targets (default: 108)

### Theme System
5. **Multiple Themes** - Default, Temple Gold, Shiva Blue, Forest Meditation, Dark AMOLED
6. **Theme Selection Screen** - Available in source code

### User Experience Features
7. **Voice Counting** - Count by speaking using device speech recognition
8. **Volume Button Counting** - Use volume up/down to +1/-1 count
9. **Keep Screen Awake** - Prevent timeout during counting sessions
10. **Haptic Feedback** - Vibration on count (configurable intensity: Light/Medium/Heavy)

### Games & Entertainment
11. **Rainbow Count** - Pop colorful bubbles that drift up/down
12. **Water Bubbles** - Pop rising bubbles before they float away

### Stories & Content
13. **Stories** - Stories from Hindu scriptures (Ramayana, Mahabharata, Upanishads, Puranas)
14. **Spiritual Insights** - Wisdom and moral lessons from scriptural stories

### Meditation & Breathing
15. **Meditation Timer** - Customizable duration and intervals
16. **Breathing Exercises** - Multiple modes (Box: 4-4-4-4, Calm: 4-6, Deep: 4-7-8, Pranayama: 4-4-6, Custom)

### Sankalp & Counters
17. **Sankalp** - Set spiritual intentions
18. **Multiple Counters** - Manage different mantras or deities separately

### Home Screen Widget
19. **Android Widget** - Current count and progress on home screen
20. **Quick Settings Tile** - Japa counter in Android Quick Settings

### Backup & Restore
21. **Data Export** - Export sessions and stats as CSV
22. **Data Import** - Restore from previously exported CSV files

### Ad Integration
23. **Yandex Mobile Ads** - Banner and interstitial ads with frequency capping
    - At most one interstitial per 5 minutes
    - Daily cap of 10 impressions
    - No interstitial during first 24 hours after install
    - Ads disabled before onboarding completes

### Additional Features
24. **PDF Report Generation** - Generate PDF reports of practice data
25. **Share Feature** - Share data exports and achievements
26. **Gesture Tutorial** - First-time user tutorial (4 steps)
27. **Onboarding Flow** - 4-page onboarding for first-time users

---

## 5. Important App Screens & User Workflows

### Main Screens (accessible via bottom navigation)
1. **Dashboard** - Home screen with current session counting
2. **History** - Past jaap sessions view with filtering
3. **Settings** - Appearance, data management, and features

### Full-Screen Routes
- Focused Mode - Distraction-free counting
- Mala Visualization - Traditional mala counting display
- Digital Mala - Digital bead counter
- Stories - Browse scriptural stories
- Stories Detail - View specific story
- Games - Rainbow Count and Water Bubbles
- Analytics - Charts and stats about practice
- Heatmap - Activity visualization
- Calendar - Daily/weekly practice calendar
- Insights - Spiritual wisdom and practice summaries
- Notes - Session notes
- Streaks - Current and longest streaks
- About - App information
- Privacy - Privacy policy screen

### Key User Workflows
1. **Start Counting**: Dashboard → Tap "Start Japa" → Count mantras → Tap "End & Save"
2. **Backup Data**: Settings → Backup & Restore → Create Backup → Share CSV
3. **Change Theme**: Settings → Themes → Select preferred theme
4. **Enable Widget**: Long-press home screen → Widgets → Drag Japora widget
5. **Voice Counting**: Enable in Settings → Tap mic button on Home → Speak mantra names
6. **View History**: Bottom nav → History → Filter sessions → Delete if needed

---

## 6. Developer Name & Contact

### Developer
- **Name:** Rudra Prakash
- **No formal business entity** or registered postal address identified
- No organization or company registration found in source code

### Available Contact Details
- **Email:** Not explicitly declared in source code; website uses `rudraprakashmajhi@gmail.com` as placeholder
- **GitHub:** Source code repository available (not inspected during this audit)
- **No phone number** declared in the application

---

## 7. Permissions Declared in AndroidManifest.xml

```xml
<!-- Internet connectivity -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- Network state for ad frequency capping -->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

<!-- Vibration feedback on count -->
<uses-permission android:name="android.permission.VIBRATE" />

<!-- Android 13+ notification permission -->
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

<!-- Voice counting feature - microphone access -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

### Permission Purposes
- **INTERNET**: Network connectivity, Yandex Mobile Ads, URL launcher
- **ACCESS_NETWORK_STATE**: Check network state before showing ads
- **VIBRATE**: Haptic feedback on count
- **POST_NOTIFICATIONS**: Android 13+ session completion notifications
- **RECORD_AUDIO**: Voice counting feature microphone access

---

## 8. Data Collected, Processed, Stored, or Shared

### Locally Stored Data (Hive boxes)
- `jaap_box` - Jaap session data (count, timestamps, duration)
- `settings_box` - User preferences (theme, dark mode, vibration, sound)
- `history_box` - Completed session history
- `backup_box` - Exported backup data
- `stats_box` - Statistics and summaries
- `streak_box` - Current and longest streaks
- `notes_box` - Session notes
- `sankalp_box` - Spiritual intentions
- `onboarding_box` - Onboarding completion status
- `theme_box` - Selected theme ID
- `widget_box` - Widget display data (current count, progress)
- `ads_box` - Ad frequency capping data

### Data Not Collected
- Personal identifiers (name, email, phone) - Not collected unless voluntarily provided
- Precise location data - Not collected
- Audio recordings - Not stored (voice counting processes locally)
- Photos or images - Not collected
- Contact lists - Not accessed
- Social network data - Not collected

### Third-Party Data Sharing
- **Yandex Mobile Ads**: May receive advertising ID and aggregated usage information per Yandex's SDK documentation. Location tracking is disabled in the app before SDK initialization.
- **Speech-to-Text**: Platform-native service; audio processed by OS service only, not retained by app
- **Exported CSV data**: Only shared when user explicitly chooses to share via Android system share sheet
- **No data is sold, licensed, or disclosed for marketing or advertising purposes**

---

## 9. Data Storage: Local vs. Server

### Local Storage
All user data is stored locally on the device using Hive, a key-value database embedded in the Flutter app. No user data is automatically uploaded to remote servers.

### Server/Cloud Data
- **None** - Japora does not transmit user data to any server
- **Backup exports**: Only if user explicitly chooses to share/export CSV files
- **Ad data**: Yandex Mobile SDK may process data on Yandex's servers as per their privacy policy, but Japora does not control or transmit this data

### Data Transmission
- **Internet required for**: Yandex Mobile Ads only
- **No other network requests** are made by the app unless a URL is explicitly launched (e.g., opening a URL via `url_launcher`)

---

## 10. Backend APIs, Databases, Authentication

### Backend APIs
- **None** - Japora is a fully offline-capable app (except for Yandex Ads)
- No custom backend API endpoints
- No Firebase or other BaaS services configured

### Database
- **Hive** local key-value database embedded in the Flutter app
- Multiple Hive boxes for different data types (see section 8)
- No Room, SQLite, or other database systems

### Authentication
- **None** - No user accounts, login, or authentication system
- Anonymous usage only
- No OAuth, Firebase Auth, or any third-party authentication

---

## 11. Third-Party SDKs and Services

| SDK/Service | Version | Purpose | Data Practices |
|---|---|---|---|
| **yandex_mobileads** | ^8.6.0 | Advertising (banner, interstitial) | May collect advertising ID, aggregated usage. Location tracking disabled in app. |
| **speech_to_text** | ^7.4.0 | Voice counting | Platform-native speech recognition; no audio stored/transmitted by app |
| **pdf** | ^3.11.1 | PDF report generation | Local generation only; no transmission unless user shares PDF |
| **printing** | ^5.13.4 | PDF printing support | Local printing only |
| **hive** | ^2.2.3 | Local key-value storage | All data on device; no transmission |
| **hive_flutter** | ^1.1.0 | Hive Flutter integration | All data on device |
| **hive_generator** | ^2.0.1 | Code generation for Hive | Build-time only; no runtime impact |
| **go_router** | ^14.8.1 | Navigation routing | Internal; no data transmission |
| **flutter_riverpod** | ^2.6.1 | State management | Internal; no data transmission |
| **audioplayers** | ^6.1.0 | Sound effects playback | Local assets only; no network dependency |
| **confetti** | ^0.7.0 | Confetti animations | Internal; no data transmission |
| **fl_chart** | ^0.70.2 | Chart visualization | Local data only |
| **share_plus** | ^10.1.4 | Share sheet integration | System-native; app does not intercept |
| **home_widget** | ^0.7.0 | Android home screen widget | Local Hive box for widget data |
| **intl** | ^0.20.2 | Date/time formatting | Internal; no data transmission |
| **wakelock_plus** | ^1.2.1 | Keep screen awake | Local feature; no transmission |
| **google_fonts** | ^6.2.1 | Typography | Font files bundled in app; no network fetch at runtime |

---

## 12. Advertising SDKs and Ad Networks

### Yandex Mobile Ads
- **Plugin**: `yandex_mobileads: ^8.6.0`
- **Formats**: 
  - Sticky banner (History, Settings, Analytics screens)
  - Inline banner (End of Home feed, hidden while session active)
  - Interstitial (Immediately after stopped jaap session with saved history)
- **Frequency Capping**:
  - At most one interstitial per 5 minutes
  - Daily cap of 10 impressions
  - No interstitial during first 24 hours after install
  - No interstitial before onboarding completes
- **Ad Configuration**:
  - User consent set to `false` at SDK initialization
  - Location tracking disabled before initialization
  - Debug builds: fallback to Yandex demo units
  - Release builds: ads disabled if ad unit IDs missing
- **No personal data** knowingly sent to Yandex by Japora

### Ad Placement Rules
- Banners never shown over an active Jaap session, meditation, or breathing exercise
- Interstitial never shown on launch, while counting, on Sankalp/onboarding, on navigation, or when app is backgrounded
- At most one interstitial per 5 minutes
- Daily cap of 10 impressions
- No interstitial before onboarding completes and before at least one session has been saved

---

## 13. Analytics, Crash Reporting, and Tracking SDKs

### Crash Reporting
- **Console Crash Reporter** - Local fallback (no-op in release mode)
- **Firebase Crashlytics** - Not configured (TODO in main.dart mentions replacement after `flutterfire configure`)
- No personally identifiable information (PII) in crash reports
- Error logs in debug mode only; release mode suppresses all output

### Analytics
- **None** - No third-party analytics services (Google Analytics, Firebase Analytics) integrated
- Yandex Mobile Ads may collect aggregated usage information as part of ad performance reporting (per Yandex's policy)
- No tracking IDs, user profiling, or behavior tracking beyond ad frequency capping

### Debug Mode
- Crash reports and error logs print to console in `kDebugMode`
- Release mode: all crash reporter calls are no-ops
- No debug data transmitted externally

---

## 14. Subscription, IAP, Payment, or Premium Features

### Monetization Status
- **All features are free** - Monetization layer removed entirely
- **Google Play Billing** - Removed completely
- **In-app purchases** - Removed
- **No premium features** locked behind paywalls
- **No ads by default** - Only shown if Yandex ad unit IDs are configured

### Previous Monetization (Removed)
- Google AdMob (banner, interstitial, rewarded) - Removed per Phase 2 of production plan
- In-app purchase packs - Removed per Phase 11 of production plan
- Premium limits on Sankalp, themes, PDF, soundscapes - Removed per Phase 11

### Current Status
- "All Features Free" - Confirmed in `TODO.md` and source code
- No payment-related dependencies in `pubspec.yaml`

---

## 15. Health, Financial, Location, Personal, or Sensitive Data Processing

### Health Data
- **Session timing** and **duration** - For spiritual practice tracking only
- **No medical or health claims** made by the app
- No integration with HealthKit, Google Fit, or similar platforms

### Financial Data
- **None** - No payment processing, no purchase tracking
- The app is completely free with all features unlocked

### Location Data
- **Approximate only** - Yandex Mobile Ads SDK may collect approximate location (based on IP/network info)
- **Explicitly disabled** in app before Yandex Ads initialization per README documentation
- No GPS, precise location, or location tracking features in the app

### Personal Data
- **Minimal** - Only what's necessary for app functionality
- Stored locally; no PII transmitted externally
- Voice counting processes speech locally; no audio retained

### Sensitive Data
- **None** - No sensitive data (health, financial, location) is collected or processed beyond what's documented
- The app is designed with privacy as a core principle

---

## 16. Existing Privacy Policy, Website, README, and GitHub Configuration

### Existing Privacy Policy
- **Google Docs URL**: `https://docs.google.com/document/d/173Nkpe7-xwwdSn6upGhIqNbIA9XAVUEEy9V3OATngks/edit?usp=sharing`
- This website-generated privacy policy is more detailed and app-specific
- The Google Docs privacy policy was the previous version; this new one replaces it

### Existing Website
- **None** - No website previously existed for Japora
- This "Rudra Web" folder creates the first website

### Existing README
- Comprehensive `README.md` in project root
- Documents advertising practices, project layout, and getting started instructions

### GitHub Configuration
- No GitHub repository currently exists for the website
- This project creates the `Rudra Web` folder for GitHub Pages deployment
- No GitHub Actions, workflows, or CI/CD configured for this website

### Key Documentation References
- `pubspec.yaml` - Dependencies and configuration
- `android/app/src/main/AndroidManifest.xml` - Permissions and app metadata
- `README.md` - Project documentation and ad practices
- `TODO.md` - Production release plan (all phases completed)
- `lib/core/constants/app_constants.dart` - App constants and URLs
- `lib/core/ads/` - Ad configuration and policy

---

## 17. UNKNOWN / Requires Developer Confirmation

The following items could not be verified from source code and require developer confirmation:

1. **Google Play Store URL**: Not verified; website mentions "Get it on Google Play" but no confirmed URL
2. **Yandex ad unit IDs**: Configured via `--dart-define` at build time; actual IDs not in repository
3. **Developer email address**: Not declared in source code; website uses placeholder `rudraprakashmajhi@gmail.com`
4. **Ad revenue or earnings**: Not applicable (ads removed, no IAP)
5. **User base size or download counts**: Not tracked or reported
6. **App store ratings or reviews data**: Not accessible without store connection
7. **Backend configuration status**: Console Crash Reporter in use; Firebase not configured
8. **Speech recognition service provider**: Device-dependent (Google Assistant, Bixby, etc.); not app-controlled

### Flags for Developer Review
- Consider adding a verified `mailto:` link with real email in the contact section
- Verify the Google Play Store URL if publishing to Play Console
- Confirm whether the privacy policy URL should point to the Google Docs version or this new website version
- Consider adding a real developer email if you want users to contact you directly