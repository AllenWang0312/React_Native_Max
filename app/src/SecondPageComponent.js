/**
 * Created by wpc on 2017/3/22.
 */
import React,{Component} from 'react';
import {View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    } from 'react-native';
import Toolbar from './widget/Toolbar.js'
import BottomSheet from './widget/BottomSheet.js'

import FirstPageComponent from './FirstPageComponent';
export default class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    componentDidMount() {
        this.setState({
            message: this.props.message,
        });
    }

    _pressButton() {
        const { navigator } = this.props;
        if (this.props.getResult) {
            this.props.getResult("This is from SecondPageComponent");
        }
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.layout}>
                <Toolbar title='main'/>
                <View style={styles.content}>
                    <Button title='点我跳转回去' onPress={this._pressButton.bind(this)}/>
                    <Image source={require('../res/mitmap.')}/>
                </View>
                <BottomSheet
                    titles={['first','second','third']}
                    icons={[{response}]}
                    onClicks={[()=>{ToastAndroid.show('you have click first',1000)},
                    ()=>{ToastAndroid.show('you have click second',1000)},
                    ()=>{ToastAndroid.show('you have click third',1000)},]}
                    index={2}
                    />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});