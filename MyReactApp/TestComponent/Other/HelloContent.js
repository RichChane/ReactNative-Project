
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";

/*
*ES6
*
* */
export default class HelloContent extends Component {

    constructor (props) {
        super (props);
    }


    render(): React.ReactNode {
        return <Text style={{fontsize:20,backgroundColor:'red'}}>Hello{this.props.name}</Text>
    }

}

/*
* ES5
*
* */
// var HelloComponent=React.createClass({
//     render(){
//         return <Text style={{fontsize:20,backgroundColor:'red'}}>Hello</Text>
//     }
//
// })
// module.exports=HelloComponent;

/*
* 方式三：函数式
* */
// function HelloComponent( props) {
//     return <Text style={{fontsize: 20,backgroundColor: 'red'}}>Hello{props.name}</Text>;
//
// }
// module.exports=HelloComponent;