/**
 * Created by Kim on 2018/5/22.
 */
import React from 'react';
import {Button, SectionList, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

export default  class SettingScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
                name={`ios-options${focused ? '' : '-outline'}`}
                size={25}
                color={tintColor}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You are currently </Text>
            </View>
        )
    }
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