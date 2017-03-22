/**
 * Created by wpc on 2017/3/22.
 */

import React,{Component} from 'react'
import {View ,Text,StyleSheet, TouchableOpacity,ToastAndroid}from'react-native'

export default class BottomSheet extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            titles: props.titles,
            icons:props.icons,
            onClicks:props.onClicks,
            onClicks: props.onClicks,
            selectIndex: props.index != undefined ? props.index : 0
        };
    }

    render() {
        return (
            <View style={{height:50}}>
                <View style={{height:2,backgroundColor:'black'}}></View>
                <View style={styles.layout}
                    >
                    { this.state.titles.map((title, key)=> {
                        return <TouchableOpacity style={styles.itemWapper} onPress={this.state.onClicks[key]}><Text style={styles.item}>{title}</Text></TouchableOpacity>
                    })}
                </View>
            </View>

        );
    }

    addContent(titles) {

    }
}
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    itemWapper:{
        flex:1,
        height:48,
        justifyContent:'center',
        alignItems: 'center',
    },
    item:{
        color:'white',
        justifyContent: 'center',
    },

});
