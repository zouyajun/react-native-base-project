/**
 * Created by Ryan on 2018/5/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Dimensions
} from 'react-native';

const {width,height} = Dimensions.get('window')
import TabBar from '../navigation/tabBar'

export default class navigator extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                                component: TabBar,    // TabBar页面
                                title:''
                            }}
                translucent={true}
                barTintColor={'#ed7b66'}
                titleTextColor={'#fff'}
                shadowHidden={false}
                style={styles.pageStyle}   // 此项不设置,创建的导航控制器只能看见导航条而看不到界面
                navigationBarHidden={true}
                interactivePopGestureEnabled = {true}
            />
        );
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        flex:1,
    },
});
