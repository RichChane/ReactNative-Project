import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import type {Props} from "react-native/Libraries/Experimental/Incremental";


export default class Page3 extends Component<Props> {



    render(): React.ReactNode {
        return <View style={styles.container}>
            <Text > Welcome to Page3 </Text>

            <TextInput
                style={styles.input}
                onChangeText={text=> {


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
        input:{
        height:50,
            width:150,
        borderWidth:1,
        marginTop:10,
        borderColor:'black'
    }



});