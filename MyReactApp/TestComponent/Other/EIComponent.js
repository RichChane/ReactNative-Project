import React, {Component } from 'react';

/*
* 组件的导入导出
* */

var studname='小明';
const studage = 20;
export {studname,studage};


export function sum(a,b) {
    return a+b;
}

// extport default class EIComponent extends Component {
//     render () {
//         return <Text style={{fontSize:20,backgroundColor:'red'}}> </Text>
//     }
//
// }

// var EIComponent=React.createClass({
//
// })
// module.exports=EIComponent;

