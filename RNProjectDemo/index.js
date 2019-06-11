/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createAppContainer} from 'react-navigation';
import {AppNavigator} from "./Section/Navigators/AppNavigators";

const AppStackNavigatorContainer = createAppContainer(AppNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
