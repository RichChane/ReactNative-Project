/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import setup from "./TestComponent/setup";
// import {createAppContainer} from 'react-navigation';
// import {AppStackNavigator} from "./navigation/AppNavigators";
//
// const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent('MyReactApp', () => setup);
