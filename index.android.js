/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    } from 'react-native';

import FirstPageComponent from './app/src/FirstPageComponent.js'

export default class NavigaterApp extends Component {
    render() {
        var defaultName = 'FirstPageComponent';
        var defaultComponent = FirstPageComponent;
        return (
            <Navigator
            initialRoute={{name:defaultName,component:defaultComponent}}
            configureScene={(route)=>{return Navigator.SceneConfigs.FadeAndroid;}}
            renderScene={(route,navigator)=>{
            let Component =route.component;
            if(route.component){
            return<Component {...route.params} navigator={navigator}/>
            }
            }}
                />
        );
    }
}

AppRegistry.registerComponent('NavigaterApp', () => NavigaterApp);
