

import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";

/*
* 布局 --- 需要多用才能熟悉
* */
export default class FlexBoxComponent extends Component {

    render(): React.ReactNode {

        /*
        * flexDirection
        *   row
        *   row-reverse
        *   column
        *   column-reverse
        * */


        /*
        *
        *
        *
        * */





        return  <View >

            <View style={{flexDirection: 'row-reverse',backgroundColor:'darkgray',marginTop: 5,justifyContent: 'space-between'}}>
                <View style={{width:40,height:40,backgroundColor:'red' ,margin: 5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'red' ,margin: 5}}>
                    <Text style={{fontSize:16}}>2</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'red',margin: 5 }}>
                    <Text style={{fontSize:16}}>3</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'red' ,margin: 5}}>
                    <Text style={{fontSize:16}}>4</Text>
                </View>

            </View>

            <View style={{height:300,flexDirection: 'column',backgroundColor:'green',marginTop: 5}}>
                <View style={{width:100,height:40,backgroundColor:'gray' ,margin: 5,flex:1,paddingLeft: 5,paddingTop: 5}}>
                    <View style={{flex:1,backgroundColor:'red'}}></View>
                </View>
                <View style={{height:40,backgroundColor:'red' ,margin: 10,flex:1}}>
                    <Text style={{fontSize:16}}>2</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'red',margin: 5,flex:1}}>
                    <Text style={{fontSize:16}}>3</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:'red' ,margin: 5,flex:1}}>
                    <Text style={{fontSize:16}}>4</Text>
                </View>

            </View>
        </View>



    }
}