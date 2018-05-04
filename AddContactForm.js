/**
 * Created by Kim on 2018/5/3.
 */
import React from 'react'
import {View, TextInput, StyleSheet, Button} from 'react-native'
import PropTypes from 'prop-types';
import {Constants} from 'expo';

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});

export default class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: ''
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        this.setState({phone})
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.name} onChangeText={this.handleNameChange}/>
                <TextInput style={styles.input} value={this.state.phone}
                           onChangeText={this.handlePhoneChange}
                           keyboardType="numeric"
                />
                <Button title="添加联系人"/>
            </View>
        )
    }
}