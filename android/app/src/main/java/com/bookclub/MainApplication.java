package com.bookclub;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.RNFirebasePackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(), new RNFirebasePackage(), new RNFirebasePackage(),
          new AppCenterReactNativeCrashesPackage(MainApplication.this,
              getResources().getString(R.string.appcenterCrashes_whenToSendCrashes)),
          new AppCenterReactNativeAnalyticsPackage(MainApplication.this,
              getResources().getString(R.string.appcenterAnalytics_whenToEnableAnalytics)),
          new AppCenterReactNativePackage(MainApplication.this), new RNFirebaseAuthPackage(),
          new RNFirebaseDatabasePackage()

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "dist/index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
