/**
 * Created by Kim on 2018/5/21.
 */
import React from 'react'
import {Button, View} from 'react-native'
import {createSwitchNavigator} from 'react-navigation'

class ScreenComponentOne extends React.Component {
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
                    title="Go to screen one 跳转第1导航页" onPress={() => {
                    this.props.navigation.navigate('RouteNameOne');
                }}/>
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
});

export default class App extends React.Component {
    render() {
        return <AppNavigator/>;
    }
}