/**
 * Created by Ryan on 2018/5/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import HomeTab from '../Home/HomeTab'
import ShopTab from '../Shop/ShopTab'
import MoreTab from '../More/MoreTab'
import MineTab from '../Mine/MineTab'

const {width,height} = Dimensions.get('window')

export default class tabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home',
            tabBarBottom: 0,
            tabBarHeight: 49
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={true}
                    tabBarStyle={
                        [styles.tabBar,{height: this.state.tabBarHeight}]
                    }
                    sceneStyle={{paddingBottom: styles.tabBar.height}}>

                    {/*首页*/}
                    {
                        this._renderTabBarItem(
                            '首页',
                            require('../images/icon_tabbar_homepage.png'),
                            require('../images/icon_tabbar_homepage_selected.png'),
                            'home',
                            HomeTab)
                    }
                    {/*商家*/}
                    {
                        this._renderTabBarItem(
                            '商家',
                            require('../images/icon_tabbar_merchant_normal.png'),
                            require('../images/icon_tabbar_merchant_selected.png'),
                            'shop',
                            ShopTab)
                    }
                    {/*我的*/}
                    {
                        this._renderTabBarItem(
                            '我的',
                            require('../images/icon_tabbar_mine.png'),
                            require('../images/icon_tabbar_mine_selected.png'),
                            'mine',
                            MineTab)
                    }
                    {/*更多*/}
                    {
                        this._renderTabBarItem(
                            '更多',
                            require('../images/icon_tabbar_misc.png'),
                            require('../images/icon_tabbar_misc_selected.png'),
                            'more',
                            MoreTab)
                    }

                </TabNavigator>
            </View>
        );
    }
    /**
     *  抽取每个tabBarItem
     */
    _renderTabBarItem(title,iconName,selectedIconName,selectedTab,component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image source={iconName} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={selectedIconName} style={styles.iconStyle} />}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {
                   this._renderItemPage(title)
                }

            </TabNavigator.Item>
        )
    }
    /**
     * 渲染Tab页面
     */
    _renderItemPage(title) {

        if (title == '首页') {
            return (
                <HomeTab
                    navigator={this.props.navigator}/>
            )
        } else if (title == '商家') {
            return (
                <ShopTab
                    navigator={this.props.navigator}/>
            )
        } else if (title == '我的') {
            return (
                <MineTab
                    navigator={this.props.navigator}/>
            )
        } else {
            return (
                <MoreTab
                    navigator={this.props.navigator}/>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabText: {
        color:'#333',
        fontSize:12
    },
    selectedTabText: {
        color:'#D81E06'
    },
    iconStyle: {
        width:Platform.OS == 'ios' ? 30: 25,
        height:Platform.OS == 'ios' ? 30: 25,
    },
    tabBar: {
        width: width,
        backgroundColor: '#fff'
    }
});
