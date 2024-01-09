/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import onBoarding from './onBoarding';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => onBoarding);
