/**
 * Created by wpc on 2017/3/22.
 */

import React,{Component}from 'react'
import {View,Text,StyleSheet}from 'react-native'


export default class Toolbar extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title: props.title,
            onBack: {},
        };
    }


    render() {
        return (
            <View>
                <View style={styles.layout}>
                    <Text>back</Text>
                    <Text>{this.state.title}</Text>
                    <Text>more</Text>
                </View>
                <View style={{
                backgroundColor:'black',
                height:1,
                }}></View>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    layout: {

        height: 48,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

});