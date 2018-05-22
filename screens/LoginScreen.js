/**
 * Created by Kim on 2018/5/22.
 */
import React from 'react';
import {Button, SectionList, StyleSheet, Text, TextInput, View} from 'react-native';

export default  class LoginScreen extends React.Component {

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
                <TextInput placeholder='请输入手机号码'
                           value={this.state.username}
                           onChangeText={this.handleUsernameUpdate}
                           style={styles.text}>
                </TextInput>
                <TextInput placeholder='请您输入验证码'
                           value={this.state.password}
                           onChangeText={this.handlePasswordUpdate}
                           style={styles.text}>
                </TextInput>
                <Button title="Press to Log In" onPress={this._login}/>
            </View>
        )

    }

    _login = () => {
        // 假设登录成功了
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }).then(res => console.log(res));
        this.props.navigation.navigate('Main');
    };
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

    }
});