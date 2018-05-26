/**
 * Created by Ryan on 2018/5/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import Navigator from '../navigation/navigator'

export default class App extends Component {

    componentDidMount() {
        <StatusBar barStyle={'light-content' }/>
    }
    render() {
        return (
           <Navigator/>
        );
    }
}