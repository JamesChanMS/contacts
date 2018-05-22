/**
 * Created by Kim on 2018/5/21.
 */
import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from 'react-navigation'

function randomNumber() {
    // 1-10
    return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        title: "我的第一个应用页面",
        headerTintColor: "red",
        headerStyle: {
            backgroundColor: "#155791"
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 25,
                borderColor: "#21a9dd"
            }}>
                <Button title="Go to screen two 跳转第2导航页" onPress={() => {
                    this.props.navigation.navigate('RouteNameTwo');
                }}/>
            </View>
        );
    }
}

class ScreenComponentTwo extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Button title="My title button" onPress={() => alert('headerTitle')}/>,
            headerTintColor: "teal",
            // headerRight: <Button title="Press me" onPress={() => alert('pressed')}/>,
            // 给第三个页面传递参数
            headerRight: <Button title="Press me" onPress={() =>
                navigation.navigate('RouteNameThree', {
                    number: 11
                })
            }/>,
            headerStyle: {
                backgroundColor: "#123455"
            }
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 25,
                borderColor: "#5a5a5a"
            }}>
                <Button
                    title="Go to screen Three 跳转第3导航页" onPress={() => {
                    this.props.navigation.navigate('RouteNameThree', {
                        number: randomNumber(),
                    });
                }}/>
            </View>
        );
    }
}

class ScreenComponentThree extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: `Number: ${navigation.getParam('number')}`,
            headerTintColor: "teal",
            headerStyle: {
                backgroundColor: "#ccc"
            }
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 25,
                borderColor: "purple"
            }}>
                <Text style={{fontSize: 25}}>
                    {this.props.navigation.getParam('number')}
                </Text>
                <Button
                    title="New number" onPress={() => {
                    this.props.navigation.setParams({
                        number: randomNumber()
                    });
                }}/>
                <Button
                    title="Go back 跳转上页" onPress={() => {
                    this.props.navigation.goBack();
                }}/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
    "RouteNameThree": ScreenComponentThree,
});

export default class App extends React.Component {
    render() {
        return <AppNavigator/>;
    }
}