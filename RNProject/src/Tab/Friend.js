import React, { Component } from 'react';
import NavItem from '../components/Navigator/NavItem';
import {Text} from "react-native";


export default class Friend extends Component {

    static navigationOptions = {
        headerTitle: '朋友',
        headerLeft: <NavItem source={{uri: 'nav_coin'}} />,
        headerRight: <NavItem source={{uri: 'nav_setting'}} />,
    }


    render(): React.ReactNode {
        return (
            <View>
                <Text style={styles.welcome}>Welcome to Friends!</Text>
            </View>
        );
    }

}