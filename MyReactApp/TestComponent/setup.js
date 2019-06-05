
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LifecycleComponent from "./Other/LifecycleComponent";
import EIComponent,{studname,studage,sum} from "./Other/EIComponent";
import StateTestComponent from "./Other/StateTestComponent";
import StudentModel from "./Class/StudentModel";

import PropsComponent from "./Other/PropsComponent";
import MingStudent from "./Class/MingStudent";
import FlexBoxComponent from "./UI/FlexBoxComponent";
import WidthHeightComponent from "./UI/WidthHeightComponent";

export default class setup extends Component {

    constructor(props) {
        super (props)
        this.state = ({
            remove:false,
            sumresult:'',
            size:0,
        })

        this.stu = new StudentModel('小红','女',16);
        this.mingStu = new MingStudent();

    }


    render(): React.ReactNode {
        return <View>
            <StackNavigation />
        </View>


    }


    /*
    * UI
    * */

    // render () {
    //     return <View >
    //         <View style={{height:100}}></View>
    //         <FlexBoxComponent />
    //         <WidthHeightComponent />
    //     </View>
    //
    //
    // }


    /*
    * class
    * */
    // render () {
    //     return <View style={styles.container}>
    //         <Text style={{fontSize: 20,backgroundColor: 'red'}}>STU {this.stu.getDescription()}</Text>
    //         <Text style={{fontSize: 20,backgroundColor: 'red'}}>STU {this.mingStu.getDescription()}</Text>
    //
    //     </View>
    //
    // }


    /*
    * state、ref
    * */
    // render () {
    //     return <View style={styles.container}>
    //
    //         <Text
    //             style = {{fontSize:20}}
    //             onPress={()=>{
    //                 var size = this.refs.reftest.state.size;
    //                 this.setState({
    //                     size:size,
    //                 })
    //             }}>气球大小:{this.state.size}</Text>
    //
    //
    //         <StateTestComponent
    //             ref="reftest"
    //         />
    //
    //     </View>
    //
    // }


    /*
    * props
    * */

    // render () {
    //     return <View style={styles.container}>
    //         <PropsComponent name="xiaohong"/>
    //
    //     </View>
    //
    // }


    // 组件导入导出
    // render () {
    //     return <View style={styles.container}>
    //         <Text style={{fontSize:20}}>名字:{studname} </Text>
    //         <Text style={{fontSize:20}}>年龄:{studage} </Text>
    //         <Text style={{fontSize: 20}}
    //               onPress={() => {
    //                   var result = sum(2, 3);
    //                   this.setState({
    //                       sumresult: result,
    //                   })
    //               }}
    //
    //         >2+3={this.state.sumresult}</Text>
    //
    //     </View>
    //
    // }


    // 组件的生命周期
    // render() {
    //     var view = this.state.remove? null:<LifecycleComponent/>;
    //     var text = this.state.remove? "让他复活":"干掉他"
    //
    //     return (
    //         <View style={styles.container}>
    //             <Text
    //                 style={{fontSize:20}}
    //                 onPress={()=>{
    //                     this.setState({
    //                         remove:!this.state.remove
    //                     })
    //                 }}
    //             >{text}
    //             </Text>
    //
    //             {view}
    //
    //         </View>
    //     );
    // }
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
