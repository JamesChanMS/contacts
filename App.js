import React from 'react';
import {Button, SectionList, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';

import contacts, {compareNames, comparePhones, compareIds} from './contacts';
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
    state = {
        showContacts: false,
        showForm:false,
        contacts: contacts,
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts
        }))
    }

    toggleForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    // 只有state状态更新时 FlatList才会重新渲染
    // clone that into a new array
    // contacts: [...prevState.contacts].sort(compareNames),
    sort = () => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareNames)
        }))
    }

    // renderItem = obj => <Row {...(obj.item)} />
    // same as renderItem = obj => <Row name:{obj.item.name} phone:{obj.item.phone} />

    // item: {name: String, phone: String}

    // <Text>{props.name}</Text>

    render() {

        // 回显方法1
        // if (this.state.showContacts) {
        //     return (
        //         <View style={styles.container}>
        //             <Button title="切换显示" onPress={this.toggleContacts}/>
        //             <ScrollView>
        //                 {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
        //             </ScrollView>
        //         </View>
        //     )
        // }
        // return (
        //     <View style={styles.container}>
        //         <Button title="切换显示" onPress={this.toggleContacts}/>
        //     </View>
        // );

        // 回显方法2 a ternary
        // return (
        //     <View style={styles.container}>
        //         <Button title="切换显示" onPress={this.toggleContacts}/>
        //         {
        //             this.state.showContacts ? (
        //                 <ScrollView>
        //                     {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
        //                 </ScrollView>
        //             ) : null
        //         }
        //     </View>
        // )

        // 回显方法3
        // return (
        //     <View style={styles.container}>
        //         <Button title="切换显示" onPress={this.toggleContacts}/>
        //         {
        //             this.state.showContacts && (
        //                 <ScrollView>
        //                     {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
        //                 </ScrollView>
        //             )
        //         }
        //     </View>
        // )

        // ScrollView 会渲染全部元素 不推荐
        // <ScrollView></ScrollView>
        // FlatList 只渲染当前页面 推荐
        // <FlatList renderItem={this.renderItem} data={contacts} />

        if (this.state.showForm) return <AddContactForm/>
        return (
            <View style={styles.container}>
                <Button title="切换" onPress={this.toggleContacts}/>
                <Button title="排序" onPress={this.sort}/>
                <Button title="添加联系人" onPress={this.toggleForm}/>
                {
                    this.state.showContacts &&
                    <ContactsList
                        contacts={this.state.contacts}
                    />
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#6ccef8',
        // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        // topBarButton: Constants.statusBarHeight,

    },
});
