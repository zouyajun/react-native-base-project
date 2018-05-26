/**
 * Created by Ryan on 2018/5/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import HomeDetail from '../Home/HomeDetail'
import NavigationBar from '../navigation/NavBarCommon'

let that
export default class HomeTab extends Component {
    constructor(props) {
        super(props)
        that = this
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='首页'
                    rightImage={require('../images/icon_homepage_scan.png')}
                    rightAction={() => {
                        alert('扫了个码')
                    }}/>
                <TouchableOpacity onPress={() => this._onForward() }>
                    <Text style={{alignSelf: 'center',marginTop: 200}}>点我跳转</Text>
                </TouchableOpacity>

            </View>
        );
    }
    /**
     *  页面跳转
     */
    _onForward() {
        if (this.props.navigator == null) return
        this.props.navigator.push({
            title: '首页详情页面',
            component: HomeDetail
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
});