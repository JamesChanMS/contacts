/**
 * Created by Kim on 2018/5/21.
 */
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Constants} from 'expo';
import ContactsList from '../ContactsList';
import {changeFirstContact} from '../redux/actions'
// import store from '../redux/store';

import {connect} from 'react-redux';

class ContactListScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "我的账号",
        headerRight: (
            <Button
                title="添加"
                color="purple"
                onPress={() => {
                    navigation.navigate('AddContact')
                }}
            />
        ),
    })

    state = {
        showContacts: true,
    }

    addContact = newContact => {
        this.setState(prevState => ({
            showForm: false,
            contacts: [...prevState.contacts, newContact]
        }))
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts
        }))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact');
    }

    toggleForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    sort = () => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareNames)
        }))
    }


    render() {
        // 获取数据
        // const contacts = store.getState().contacts
        return (
            <View style={styles.container}>
                <Button title="改变第一位" onPress={this.props.changeFirstContact}/>
                {
                    this.state.showContacts &&
                    <ContactsList
                        // contacts={this.props.screenProps.contacts}
                        contacts={this.props.contacts}
                        onSelectContact={contact => {
                            this.props.navigation.navigate('ContactDetails', {
                                phone: contact.phone,
                                name: contact.name,
                            })
                        }}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6ccef8',
        // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
        paddingTop: Constants.statusBarHeight,

    },
});

const mapStateToProps = state => ({
    contacts: state.contacts,
})

/**
 * connect 绑定 stat与props的映射关系
 */
export default connect(mapStateToProps, {changeFirstContact})(ContactListScreen)