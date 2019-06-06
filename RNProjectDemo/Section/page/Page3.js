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

        // const {navigation}=this.props;
        // const {state,setParams}=navigation;
        // const {params}= this.state.;
        // const showText=params&&params.mode==='edit'? '正在编辑':'编辑完成'

        return <View style={styles.container}>
            <Text style={styles.welcome}> Welcome to Page3 </Text>
            {/*<Text style={styles.welcome}> {showText} </Text>*/}
            {/*<TextInput*/}
                {/*style = {styles.input}*/}
                {/*onChangeText={text=>{*/}
                    {/*navigation.title = text;*/}
                    {/*//setParams({title:text})*/}
                {/*}}*/}
            {/*> </TextInput>*/}


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
        borderWidth:1,
        borderColor:'black',
    }

});