import React, { Component } from 'react';
import NavItem from '../components/Navigator/NavItem';
import {Text} from "react-native";


export default class Me extends Component {

    static navigationOptions = {
        headerTitle: '我的',
        headerLeft: <NavItem source={{uri: 'nav_coin'}} />,
        headerRight: <NavItem source={{uri: 'nav_setting'}} />,
    }


    render(): React.ReactNode {
        return (
            <View>
                <Text style={styles.welcome}>Welcome to Me!</Text>
            </View>
        );
    }

}