import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import type {Props} from "react-native/Libraries/Experimental/Incremental";


export default class Page4 extends Component<Props> {

    render(): React.ReactNode {
        const {navigation} = this.props;

        return <View style={styles.container}>
            <Text > Welcome to Page4 </Text>

            <Button title = {'Open Drawer'} onPress = {() => navigation.openDrawer} />
            <Button title = {'Close Drawer'} onPress = {() => navigation.closeDrawer} />
            <Button title = {'Toggle Drawer'} onPress = {() => navigation.toggleDrawer} />

        </View>

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});