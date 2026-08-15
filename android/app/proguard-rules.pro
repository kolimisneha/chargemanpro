# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Do not shrink, obfuscate, or optimize the app code. R8 still runs and
# produces the mapping.txt file that Play Console requires, while the app
# binary stays byte-for-byte behaviorally identical.
-dontshrink
-dontobfuscate
-dontoptimize
-dontpreverify

-keepattributes SourceFile,LineNumberTable

# Suppress warnings for classes referenced by Cordova/Capacitor plugins
# that are resolved only at runtime.
-dontwarn com.google.android.gms.**
-dontwarn com.google.firebase.**
-dontwarn com.razorpay.**
-dontwarn com.squareup.**
-dontwarn org.apache.cordova.**
-dontwarn androidx.**
-dontwarn javax.**
-dontwarn kotlin.**
-dontwarn okhttp3.**
-dontwarn retrofit2.**
-dontwarn io.branch.**
-dontwarn com.android.volley.**
-dontwarn uk.co.workingedge.**
-dontwarn com.hp.**
-dontwarn org.jetbrains.**
-dontwarn com.google.maps.**
-dontwarn com.getcapacitor.**
-dontwarn com.ionicframework.**
-dontwarn com.github.**
-dontwarn org.apache.commons.**
-dontwarn org.json.**
-dontwarn android.**
