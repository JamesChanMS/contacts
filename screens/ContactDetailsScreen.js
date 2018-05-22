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
                <Button title="Go to random contact" onPress={this._goToRandom}/>
            </View>
        )
    }

    _goToRandom = () => {
        const contacts = this.props.screenProps.contacts;
        const phone = this.props.navigation.getParam("phone");
        let randomContact;
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random() * contacts.length);
            if ( contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex];
            }
        }
        this.props.navigation.push('ContactDetails', {
            name: randomContact.name,
            phone: randomContact.phone,
        })
    }

}