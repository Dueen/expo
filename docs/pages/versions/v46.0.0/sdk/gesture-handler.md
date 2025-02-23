---
title: GestureHandler
sourceCodeUrl: 'https://github.com/software-mansion/react-native-gesture-handler'
packageName: 'react-native-gesture-handler'
---

import {APIInstallSection} from '~/components/plugins/InstallSection';
import PlatformsSection from '~/components/plugins/PlatformsSection';

An API for handling complex gestures. From the project's README:

> This library provides an API that exposes mobile platform specific native capabilities of touch & gesture handling and recognition. It allows for defining complex gesture handling and recognition logic that runs 100% in native thread and is therefore deterministic.

<PlatformsSection android emulator ios simulator web />

## Installation

<APIInstallSection href="https://docs.swmansion.com/react-native-gesture-handler/docs/" />

## API

Add this import to the top of your app entry file, such as **App.js**:

```js
import 'react-native-gesture-handler';
```

This will ensure that appropriate event handlers are registered with React Native. Now, you can import gesture handlers wherever you need them:

```js
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

class ComponentName extends Component {
  render() {
    return (
      <TapGestureHandler>
        <RotationGestureHandler>...</RotationGestureHandler>
      </TapGestureHandler>
    );
  }
}
```

## Usage

Read the [react-native-gesture-handler docs](https://docs.swmansion.com/react-native-gesture-handler/) for more information on the API and usage.
