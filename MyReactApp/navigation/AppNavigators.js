
import {createStackNavigator} from 'react-navigation';

import {Button} from 'react-native';
import NavigationHomePage from '../page/NavigationHomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';


export const AppStackNavigator = createStackNavigator({

    NavigationHomePage:{
        screen:NavigationHomePage
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


    Page3:{
        screen:Page3,
        navigationOptions:(props)=>{
            const {navigation}=props;
            const {state,setParams}=navigation;
            const {params}=state;

            return {
                title:params.title?params.title:'This is Page3',
                headerRight:(
                    <Button
                        title={params.mode==='edit'?'保存':'编辑'}
                        onPress={()=>
                            setParams({mode:params.mode==='edit'?'':'edit'})
                        }
                    >
                    </Button>
                )
            }
        }

    },




})