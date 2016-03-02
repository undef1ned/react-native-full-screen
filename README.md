# React native full screen functionality Android

There is plenty of room for improvment by adding additional react bindings for props and callbacks.


##### Props:
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| souce | Object | null | same as the react image format |


## Include in your App

Installation
------------

Install the npm package [`react-native-full-screen`](https://www.npmjs.com/package/react-native-full-screen). Inside your React Native project, run ([example](https://github.com/Anthonyzou/react-native-full-screen/tree/master/example)):
```bash
npm install --save react-native-full-screen
```

In `android/settings.gradle`, remove the line `include ':app'` and add the following lines
```
include :react-native-full-screen'
project(':react-native-full-screen').projectDir = file('../node_modules/react-native-full-screen/android')
```
**NOTE** : If you have included other libraries in your project, the `include` line will contain the other dependencies too.

In `android/app/build.gradle`, add a dependency to `':react-native-full-screen'`
```
dependencies {
    compile project(':react-native-full-screen')
}
```

Next, you need to change the `MainActivity` of your app to register `ReactNativeDialogsPackage` :
```java
import com.image.zoom.ReactImageZoom; // add this import

public class MainActivity extends ReactActivity {
    //...

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactImageZoom() // add this manager
      );
    }
```

---

TeamLockr full screen
Team Lockr full screen for react native

These are functions created by the TeamLockr Team created for the TeamLockr platform.

---
