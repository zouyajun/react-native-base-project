/**
 * Created by Ryan on 2018/5/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationBar from '../navigation/NavBarCommon'

export default class MoreTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='更多'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});