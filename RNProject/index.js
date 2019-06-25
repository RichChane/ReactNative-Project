/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {createAppContainer} from "react-navigation";
import {TabNavigator} from "./src/components/Navigator/Tab";



const AppStackNavigatorContainer = createAppContainer(TabNavigator)

AppRegistry.registerComponent('RNProject', () => AppStackNavigatorContainer);