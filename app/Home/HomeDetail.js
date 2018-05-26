/**
 * Created by Ryan on 2018/5/26.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavigationBar from '../navigation/NavBarCommon'

export default class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='首页详情页面'
                    leftImage={require('../images/navigationbar_arrow_up.png')}
                    leftAction = {() => this._goBack()}/>
            </View>
        );
    }
    /**
     *  导航返回
     */
    _goBack() {
        this.props.navigator.pop()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});