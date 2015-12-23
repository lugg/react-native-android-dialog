# React Native Android Dialog

## Setup

1. Include this module in `android/settings.gradle`:
  
  ```
  include ':react-native-android-dialog'
  include ':app'

  project(':react-native-android-dialog').projectDir = new File(rootProject.projectDir,
    '../node_modules/react-native-android-dialog/android')
  ```
2. Add a dependency to your app build in `android/app/build.gradle`:
  
  ```
  dependencies {
      ...
      compile project(':react-native-android-dialog')
  }
  ```
3. Change your main activity to add a new package, in `android/app/src/main/.../MainActivity.java`:
  
  ```java
  import com.lugg.ReactDialog.ReactDialogPackage; // Add new import

  public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

      private ReactInstanceManager mReactInstanceManager;
      private ReactRootView mReactRootView;

      @Override
      protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          mReactRootView = new ReactRootView(this);

          mReactInstanceManager = ReactInstanceManager.builder()
                  .setApplication(getApplication())
                  .setBundleAssetName("index.android.bundle")
                  .setJSMainModuleName("index.android")
                  .addPackage(new MainReactPackage())
                  .addPackage(new ReactDialogPackage()) // add the package here
                  .setUseDeveloperSupport(BuildConfig.DEBUG)
                  .setInitialLifecycleState(LifecycleState.RESUMED)
                  .build();
  ```

