/**
 * Created by Kim on 2018/5/22.
 */
import React from 'react';
import {Button, SectionList, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from  'react-redux';
import PropTypes from 'prop-types';

import {logInUser} from '../redux/actions'
// import {login} from '../api';

class LoginScreen extends React.Component {

    static propTypes = {
        err: PropTypes.string,
        token: PropTypes.string,
        logInUser: PropTypes.func
    }

    state = {
        username: '',
        username: '',
    }

    handleUsernameUpdate = username => {
        this.setState({username})
    }
    handlePasswordUpdate = password => {
        this.setState({password})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.props.err}</Text>
                <TextInput placeholder='请输入手机号码'
                           value={this.state.username}
                           onChangeText={this.handleUsernameUpdate}
                           style={styles.text}
                           autoCapitalize="none">
                </TextInput>
                <TextInput placeholder='请您输入验证码'
                           value={this.state.password}
                           onChangeText={this.handlePasswordUpdate}
                           style={styles.text}
                           autoCapitalize="none"
                           secureTextEntry={true}>
                </TextInput>
                <Button title="Press to Log In" onPress={this._login}/>
            </View>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.token) {
            this.props.navigation.navigate('Main');
        }
    }

    /**
     * 异步 async 关键字写法
     * @returns {Promise.<void>}
     * @private
     */
    _login = async () => {
        // // 假设登录成功了
        // const response = await fetch('http://192.168.0.5:3000', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({username: this.state.username, password: this.state.password})
        // })
        // console.log(response);
        // // if (response.status === 400
        // //     || response.status === 401
        // //     || response.status === 402
        // //     || response.status === 403) {
        // //
        // // }
        // /**
        //  * 登录成功
        //  */
        // if (response.ok) {
        //     this.props.navigation.navigate('Main');
        //     return
        // }
        // /**
        //  * 等待一个异步方法执行完成 返回错误信息
        //  */
        // const errMessage = await response.text()
        // this.setState({err: errMessage})


        /**
         * 使用抽取的方法
         */
        // try {
        //     this.props.logInUser(this.state.username, this.state.password)
        //     // const success = await login(this.state.username, this.state.password)
        //
        //     // this.props.navigation.navigate('Main');
        // } catch (err) {
        //     const errMessage = err.message
        //     this.setState({err: errMessage})
        // }

        this.props.logInUser(this.state.username, this.state.password)

    };
    /**
     * 同步
     * promise 写法
     * @private
     */
    // _login = () => {
    //     // 假设登录成功了
    //     const response = fetch('http:  //localhost:3000', {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({username: this.state.username, password: this.state.password})
    //     }).then(res => console.log(res));
    //     this.props.navigation.navigate('Main');
    // };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#6ccef8',
        // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
        // paddingTop: Constants.statusBarHeight,

    },
    text: {
        textAlign: 'center',

    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
});

const mapStateToProps = state => ({
    err: state.user.loginErr,
    token: state.user.token,

})

export default connect(mapStateToProps, {logInUser})(LoginScreen)