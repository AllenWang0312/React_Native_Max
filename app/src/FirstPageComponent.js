/**
 * Created by wpc on 2017/3/22.
 */
import React,{Component}from 'react'
import {
    View,
    Image,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    }from 'react-native'

import SecondPageComponent from './SecondPageComponent.js'

export default class FirstPageComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            resultMessage:'hello',
        };
    }

    render() {
        return (
            <View style={styles.root}>
                <Button
                    title='Chat with Lucy'/>
                <Image
                    style={styles.portrait}
                    source={require('../res/mitmap/social/social_round_github_149px_1196568_easyicon.net.png')}/>

                <View >
                    <TextInput style={styles.textInputStyle} placeholder='请输入用户名'/>
                    <TextInput style={styles.textInputStyle} placeholder='请输入密码' password={true}/>
                </View>
                <View style={styles.btLayout}>
                    <TouchableOpacity
                        style={styles.buttonWapper}
                        onPress={this._signUpClick.bind(this)}>
                        <Text style={styles.loginButton}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonWapper}
                        onPress={this._loginBtClick.bind(this)}>
                        <Text style={styles.loginButton}>
                            {/*`登陆${this.state.resultMessage}`*/}
                            登录
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>其他方式登录</Text>
                <View style={styles.btLayout}>
                    <Image
                        style={styles.loginSocial}
                        source={require('../res/mitmap/social/social_round_facebook_149px_1196567_easyicon.net.png')}/>
                    <Image
                        style={styles.loginSocial}
                        source={require('../res/mitmap/social/social_round_evernote_149px_1196566_easyicon.net.png')}/>
                    <Image
                        style={styles.loginSocial}
                        source={require('../res/mitmap/social/social_round_dribbble_149px_1196564_easyicon.net.png')}/>
                </View>
            </View>
        );
    }

    _loginBtClick() {
        var _this = this;
        const {navigator} =this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPageComonent',
                component: SecondPageComponent,
                params:{
                    message:"I am from FirstPageComponent",
                    getResult:function(myMessage){
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                },
            })
        }
    }

    _signUpClick() {

    }
}

//获取屏幕信息
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
        root: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        portrait: {
            width: 100,
            height: 100,
        },
        textInputStyle: {
            width: width - 30, //设置宽度减去30将其居中左右便有15的距离
            height: 45,
            borderRadius: 18,  //设置圆角程度
            borderColor: 'blue', //设置边框的颜色
            borderWidth: 1,//设置边框的宽度
            paddingLeft: 10,  //内边距
            paddingRight: 10,
            marginTop: 10,  //外边距
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: 'white', //设置相对父控件居中
            marginBottom: 5,
            textAlign: 'center',

            //placeholderTextColor:'gray'//hint颜色
            // editable：如果值为假，文本是不可编辑，默认值为真
            //autoCapitalize: 控制TextInput是否要自动将特定字符切换为大写none：不自动使用任何东西 sentences：每个句子的首字母（默认）words：每一个单词的首字母characters：所有字符
            //autoCorrect:如果为false，会关闭拼写自动修正。默认值是true。 //智能提示
            //autoFocus：如果为true，在componentDidMount后会获得焦点。默认值为false。
            //clearButtonMode：清除按钮出现的时机never：不出现while-editing：编辑的时候出现unless-editing：没有编辑时出现always：总是出现
            //clearTextOnFocus：如果为true，每次开始输入的时候都会清除文本框的内容
            //multiline={true}//多行

            //enablesReturnKeyAutomatically：如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。
            //returnKeyType：决定返回键的样式 default go google join next route search send yahoo done emergency-call

            //secureTextEntry：如果值为真，文本输入框就会使输入的文本变模糊，以便于像密码这样敏感的文本保持安全，类似 password 属性，默认值为假
            //keyboardType="number-pad"

            //onChange：当文本框内容变化时调用此回调函数
            //onChangeText：当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递
            //onFocus：当文本框获得焦点的时候调用此回调函数
            //onBlur：当文本框失去焦点的时候调用此回调函数
            //onEndEditing：结束编辑时，调用回调函数
        },
        btLayout: {
            flexDirection: 'row'
        },
        buttonWapper: {
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,//圆角
            borderWidth: 5,//描边宽度
            borderColor: 'white',//颜色
            backgroundColor: 'blue'
        },
        loginButton: {
            color: 'white',
        },
        loginSocial: {
            width: 60,
            height: 60,
        },
    }
);