
import React, {Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";



export default class PropsComponent extends  Component {

    static defaultProps = {
        name:'小号'
    }

    static propTypes= {
        name:PropTypes.string
    }

    render () {

        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
    }

}