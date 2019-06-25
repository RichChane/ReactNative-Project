/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createAppContainer} from 'react-navigation';
import {AppNavigator,AppBottomNavigator,AppStackNavigator} from "./Section/Navigators/AppNavigators";

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
