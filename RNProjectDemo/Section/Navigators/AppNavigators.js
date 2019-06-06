
import {
    Button,
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import NaviHomePage from '../page/NaviHomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';




export const AppStackNavigator = createStackNavigator({

    NavigationHomePage:{
        screen:NaviHomePage
    },

    Page1:{// 动态配置 navigationOptions
        screen:Page1,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名`

        })
    },


    Page2:{// 静态
        screen:Page2,
        navigationOptions:{
            title:'This is Page2'
        }

    },

    Page4:{// 静态
        screen:Page4,
        navigationOptions:{
            title:'This is Page4'
        }

    },


    /**********************************/
    Page3:{
        screen:Page3,
        navigationOptions:(props)=>{

            /*
            * 这三段代码语法知识完全不懂
            * */
            // const {navigation}=props;
            // const {state,setParams}=navigation;
            // const {params}=state;

            return {
                title:'This is Page3',

                // 右侧按钮 不懂怎么设置
            }
        }

    },





})