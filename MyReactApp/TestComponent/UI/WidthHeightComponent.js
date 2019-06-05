
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";

export default class WidthHeightComponent extends Component {

    render(): React.ReactNode {
        return <View style={{height: 100,top:10}}>
            <View style={{flex:1,backgroundColor:'powderblue'}} />
            <View style={{flex:2,backgroundColor:'skyblue'}} />
            <View style={{flex:3,backgroundColor:'steelblue'}} />
            <View style={{flex:4,backgroundColor:'powderblue'}} />

        </View>
    }

}
