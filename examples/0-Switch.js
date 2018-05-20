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
                <Button title="Go to screen two 跳转第2导航页" onPress=""/>
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne
});

export default class App extends React.Component {
    render() {
        return <AppNavigator/>;
    }
}