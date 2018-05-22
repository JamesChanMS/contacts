/**
 * Created by Kim on 2018/5/21.
 */
import React from 'react';
import AddContactForm from '../AddContactForm';

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle:"添加账号"
    }
    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    };

    render() {
        return <AddContactForm onSubmit={this.handleSubmit}/>;
    }
}