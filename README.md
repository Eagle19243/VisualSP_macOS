# VisualSP Safari App Extension

## Environment
- Xcode 9.4+
- Mac OS X 10.13+
- Safari 11.1+

## Instruction to build/run App and Safari App Extension in Xcode
After you install Xcode in your mac, follow the steps below:

1. Open `VisualSP.xcodeproj` in Xcode.

2. Click Product/Run once you choose the Scheme("VisualSP") pointed at the screenshot.\

![Build/Run](https://github.com/Eagle19243/VisualSP_macOS/blob/master/screenshot/1.png)\
![Build/Run](https://github.com/Eagle19243/VisualSP_macOS/blob/master/screenshot/2.png)\

Then VisualSP app will be shown.

3. To see Safari App Extension, follow the instructions that you see in the screen of the app.

## How to make changes of injected script
In background, VisualSP Safari App Extension uses `bootstrap.min.js` as an injected script.
But we don't recommend to make changes to `bootstrap.min.js` directly.
To make changes of `bootstrap.min.js`, just write the code in `bootstrap.js`
And then follow the steps below:

### Building bootstrap.min.js

```
npm install
```

#### Debug
```
gulp build-Debug
```

#### Test
```
gulp build-Test
```

#### Release
```
gulp build-Release
```

After you build bootstrap.min.js successfully, you should rebuild App and Safari App Extension in Xcode.
