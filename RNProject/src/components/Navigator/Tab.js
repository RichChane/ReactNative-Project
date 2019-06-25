import React, { Component } from 'react';
import { 
    Text, 
    Image, 
    View, 
    StyleSheet 
} from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
//import TabBar from './TabBar';

import Essence from '../../Tab/Essence';
import New from '../../Tab/New';
import Friend from '../../Tab/Friend';
import Me from '../../Tab/Me';

// const tabBarOptions = {
//     activeTintColor: '#ff2e57',
//     inactiveTintColor: '#666',
// }

export const TabNavigator = createBottomTabNavigator(
    {
        Essence: {
            screen: Essence,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <Image
                        source={{uri: focused ? 'tabbar_essence_click' : 'tabbar_essence'}}
                        style={styles.item}
                        />
                ),
                tabBarLabel: '精华',
            }
        },
        New: { 
            screen: New,
            navigationOptions: {  
                tabBarIcon: ({focused}) => (  
                    <Image 
                        source={{uri: focused ? 'tabbar_new_click' : 'tabbar_new'}}  
                        style={styles.item}  
                        />  
                ),
                tabBarLabel: '最新',    
            } 
        },

        Friend: { 
            screen: Friend, 
            navigationOptions: {  
                tabBarIcon: ({focused}) => (  
                    <Image 
                        source={{uri: focused ? 'tabbar_friend_click' : 'tabbar_friend'}}  
                        style={styles.item}  
                        />  
                ),
                tabBarLabel: '社区',  
            } 
        },
        Me: { 
            screen: Me,
            navigationOptions: {
                tabBarIcon: ({focused}) => (  
                    <Image 
                        source={{uri: focused ? 'tabbar_me_click' : 'tabbar_me'}}  
                        style={styles.item}
                        />  
                ),
                tabBarLabel: '我',   
            } 
        },
    },
    {
        //tabBarComponent:(props) => <TabBar {...props} />,// 自定义tab样式
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions:{
            activeTintColor:Platform.OS === 'ios' ? '#e91e63':'#fff',

        }
    }
)

const styles = StyleSheet.create({
    item: {
        width: 27,
        height: 27,
    },
    centerItem: {
        width: 38,
        height: 38,
    },
})