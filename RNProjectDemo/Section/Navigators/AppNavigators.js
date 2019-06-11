
import React from 'react';
import {
    Button,Platform,ScrollView,SafeAreaView
} from 'react-native';
import {createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    createSwitchNavigator
} from 'react-navigation';

import NaviHomePage from '../page/NaviHomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';
import Login from '../page/Login';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const DrawerNavi = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({tintColor}) => {
                return <MaterialIcons

                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}}
                />
            }

        }

    },

    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: "Page5",
            drawerIcon: ({tintColor}) => {
                return <MaterialIcons

                    name={'move-to-inbox'}
                    size={24}
                    style={{color: tintColor}}
                />
            }

        }

    }
}, {
    initialRouteName: 'Page4',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
    contentComponent: (props) => (
        <ScrollView
            style={{backgroundColor: '#789', flex: 1}}
        >
            <SafeAreaView
                forceInset={{top: 'always', horizontal: 'never'}}
            >
                <DrawerItems {...props} />

            </SafeAreaView>
        </ScrollView>
    )

});


const AppTopNavigator = createMaterialTopTabNavigator({
    Page1:{
        screen: Page1,
        navigationOptions:{
            tabBarLabel:'All'
        }

    },

    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'iOS'
        }

    },

    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'React'
        }

    },

    Page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel:'React Native'
        }

    },
},{
    // tabBarOptions 不懂如何设置
    tabBarOptions:{

        tabStyle : {mindWidth:50},
        upperCaseLabel:false, // 是否是标签大写，默认为true
        scrollEnabled:true, // 是否支持 选项卡滚动，默认false

        style:{
            backgroundColor:'#678' // TabBar背景色
        },
        indicatorStyle:{
            height:2,
            bakcgroundColor:'white'

        }, // 便签指示器的样式

        labelStyle:{
            fontSize:13,
            marginTop:6,
            marginBottom:6,

        },

    }

})

const AppBottomNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (

                <Iconicons
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}

                />

            )
        }
    },

    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (

                <Iconicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}

                />

            )
        }

    },

    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (

                <Iconicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}

                />

            )
        }

    },

    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (

                <Iconicons
                    name={'ios-aperture'}
                    size={26}
                    style={{color: tintColor}}

                />

            )
        }
    }
},
{
    tabBarOptions:{
        activeTintColor:Platform.OS === 'ios' ? '#e91e63':'#fff',

    }

})

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
            * 这三段代码语法知识完全不懂 - 并且还会莫名报错
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

    Bottom : {

        screen:AppBottomNavigator,
        navigationOptions: {// 在这里定义每个页面的导航数据，静态配置
            title: 'BottomNavigator'
        }
    },

    Top : {

        screen:AppTopNavigator,
        navigationOptions: {// 在这里定义每个页面的导航数据，静态配置
            title: 'TopNavigator'
        }
    },

    DrawerNavi:{
        screen:DrawerNavi,
        navigationOptions:{// 在这里定义每个页面的导航属性，静态配置

            title:"This is DrawerNavigator .",
        }

    }


})


/* SwitchNavigation */
const AuthStack = createStackNavigator ({
    Login:{
        screen:Login
    },

});

export const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,

        App: AppStackNavigator,
    },
    {
        initialRouteName:'Auth',

    }

);