import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import type {Props} from "react-native/Libraries/Experimental/Incremental";
import navigation from "react-navigation";


export default class Page1 extends Component<Props> {

    render(): React.ReactNode {

        const {navigation} = this.props

        return <View style={styles.container}>
            <Text > Welcome to Page1 </Text>
            <Button
                title={'Go Back'}
                onPress={()=>{
                    //console.log (navigation);
                    navigation.goBack();
                }}
            />

            <Button
                title={'跳转到页面4'}
                onPress={()=>{
                    navigation.navigate('Page4')
                }}

            />

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