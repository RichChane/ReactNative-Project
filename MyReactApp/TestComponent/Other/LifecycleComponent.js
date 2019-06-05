
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";


export default class LifecycleComponent extends Component {

    constructor (props) {// 构造方法
        super (props);
        console.log('-----constructor-------')
        this.state={
            count:0,
        }
    }

    componentWillMount(): void {
        console.log('------componentWillMount-------')
    }

    componentDidMount(): void {
        console.log('------componentDidMount-------')
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        console.log('-----componentWillReceiveProps-------')
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        console.log('------shouldComponentUpdate-------')
        return true;
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        console.log('------componentWillUpdate-------')
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        console.log('------componentDidUpdate-------')
    }


    componentWillUnmount(): void {
        console.log('------componentWillUnmount-------')
    }

    render(): React.ReactNode {
        console.log('------render-------')
        return <View>
            <Text
                style={{fontSize:20,backgroundColor:'red'}}
                onPress={()=>{
                    console.log('点击'),
                    this.setState({

                        count:this.state.count+1,
                    })
                }}
            >有本事你打我呀。
            </Text>
            <Text style={{fontSize:20}}>被打了{this.state.count}次</Text>

                </View>

    }
}
