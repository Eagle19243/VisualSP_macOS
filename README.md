# VisualSP Safari App Extension

## Environment
- Xcode 9.4+
- Mac OS X 10.13+
- Safari 11.1+

## Instruction to build/run App and Safari App Extension in Xcode
After you install Xcode in your mac, follow the steps below:

1. Open `VisualSP.xcodeproj` in Xcode.\
2. Click Product/Run once you choose the Scheme("VisualSP") pointed at the screenshot.\
![Build/Run]\
Then VisualSP app will be shown.\
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

### Running Safari App Extension
To run VisualSP Safari App Extension, you need to install Xcode, and open `VisusalSP.xcodeproj`.
Then Xcode will be opened, and click `Product/Run`.
After that VisualSP macOS application will be shown. Follow the instructions you see in the screen.
