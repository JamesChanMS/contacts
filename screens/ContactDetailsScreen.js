/**
 * Created by Kim on 2018/5/21.
 */
import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

export default class ContacDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam("name"),
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
    })

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam("phone")}</Text>
                <Button title="Go to random contact" onPress=""/>
            </View>
        )
    }
}