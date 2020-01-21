<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/op_logo.png" width="1050"/>

Ready to use awesome alerts as modal for React Native via Paraboly.

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-alert-modal.svg)](https://www.npmjs.com/package/@paraboly/react-native-alert-modal)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-alert-modal.svg)](https://www.npmjs.org/package/@paraboly/react-native-alert-modal)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Alert Modal

<p align="center">
<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/Screenshots/example.png" height="600" width="49.7%"/>
<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/Screenshots/example2.png" height="600" width="49.7%"/>
</p>

<p align="center">
<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/Screenshots/example3.png" height="600" width="49.7%"/>
<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/Screenshots/example4.png" height="600" width="49.7%"/>
</p>

<p align="center">
<img alt="Paraboly React Native Alert Modal" src="https://github.com/Paraboly/react-native-alert-modal/blob/master/assets/Screenshots/example5.png" height="600" width="49.7%"/>
</p>

## Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-alert-modal
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-modal": "^11.0.2",
"react-native-vector-icons": "^6.5.0",
"react-native-linear-gradient": "^2.5.4",
"react-native-dynamic-vector-icons": "0.0.4",
```

## Basic Usage of AlertModal

#### Classic

```js
import AlertModal from "@paraboly/react-native-alert-modal";

<AlertModal type="classic" />;
```

#### ClassicOnlyText

```js
import AlertModal from "@paraboly/react-native-alert-modal";

<AlertModal type="classicOnlyText" />;
```

#### ClassicWithIcon

```js
import AlertModal from "@paraboly/react-native-alert-modal";

<AlertModal type="classicWithIcon" />;
```

#### ClassicTriple

```js
import AlertModal from "@paraboly/react-native-alert-modal";

<AlertModal type="classicTriple" />;
```

#### ClassicTripleWithIcon

```js
import AlertModal from "@paraboly/react-native-alert-modal";

<AlertModal type="classicTripleWithIcon" height={getStatusBarHeight() + 600} />;
```

### Example Application

- [check the code](example/App.js), and yes! :) all of the images, screenshots are directly taken
  from the this example. Of course, you can simply clone the project and run the example on your own environment.

### Modal Types

- Classic
- ClassicOnlyText
- ClassicWithIcon
- ClassicTriple
- ClassicTripleWithIcon

## Author

FreakyCoder, kurayogun@gmail.com | kuray.ogun@paraboly.com

## License

Paraboly React Native Alert Modal Library is available under the MIT license. See the LICENSE file for more info.
