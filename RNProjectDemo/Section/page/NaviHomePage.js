
import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import type {Props} from "react-native/Libraries/Experimental/Incremental";


export default class NaviHomePage extends Component<Props> {

    // 设置title、返回按钮的名称
    static navigationOptions = {
        title:'Home',
        headerBackTitle:'返回主页'

    }
    render(): React.ReactNode {

        const {navigation}=this.props;

        return <View style={styles.container}>

            <Text > Welcome to HomePage </Text>

            <Button
                title={'Go to Page1'}
                onPress={()=>{
                    navigation.navigate('Page1',{name:'动态的'})
                }}
            />
            <Button
                title={'Go to Page2'}
                onPress={()=>{
                    navigation.navigate('Page2')
                }}
            />
            <Button
                title={'Go to Page3'}
                onPress={()=>{
                    navigation.navigate('Page3')
                }}
            />

            <Button
                title={'Go to Bottom Navigator'}
                onPress={()=>{
                    navigation.navigate('Bottom')
                }}
            />

            <Button
                title={'Go to Top Navigator'}
                onPress={()=>{
                    navigation.navigate('Top')
                }}
            />

            <Button
                title={'Go to DrawerNavi'}
                onPress={()=>{
                    navigation.navigate('DrawerNavi')
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