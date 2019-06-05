
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";

/*
* state 的运用
* */
export default class StateTestComponent extends Component {

    constructor (props) {
        super(props);

    }

    state = {
        size:90
    }

    render () {
        return  <View>

            <Text style={{fontSize:20,backgroundColor:'red'}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size+10
                    })
                }}
            >变大，变大变大</Text>
            <Text style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size-10
                    })
                }}

            >变小，变小变小</Text>

            <Image style={{width:this.state.size,height:this.state.size}}
                source={require('./qiqiu.png')}
            ></Image>

            </View>




    }


}