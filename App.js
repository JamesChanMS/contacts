/**
 * 导航页面切换
 */
// import Example from './examples/0-Switch';
// export default Example;

/**
 * 导航页面切换
 */
// import Example from './examples/1-Stack';
// export default Example;

/***
 * 异步非阻塞获取数据
 *
 */
// async function fetchUsersWithErrorHandling() {
//     try {
//         const response = await fetch('https://randomuser.me/api/?results=5')
//         const result = await response.json();
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// }

/**
 * 多组件实现
 */
// import React from 'react';
// import {Button, SectionList, StyleSheet, Text, View} from 'react-native';
// import {Constants} from 'expo';
//
// import contacts, {compareNames, comparePhones, compareIds} from './contacts';
// import ContactsList from './ContactsList'
// import AddContactForm from './AddContactForm'
//
// export default class App extends React.Component {
//     state = {
//         showContacts: false,
//         showForm: false,
//         contacts: contacts,
//     }
//
//     addContact = newContact => {
//         this.setState(prevState => ({
//             showForm: false,
//             contacts: [...prevState.contacts, newContact]
//         }))
//     }
//
//     toggleContacts = () => {
//         this.setState(prevState => ({
//             showContacts: !prevState.showContacts
//         }))
//     }
//
//     toggleForm = () => {
//         this.setState(prevState => ({
//             showForm: !prevState.showForm
//         }))
//     }
//
//
//     // 只有state状态更新时 FlatList才会重新渲染
//     // clone that into a new array
//     // contacts: [...prevState.contacts].sort(compareNames),
//     sort = () => {
//         this.setState(prevState => ({
//             contacts: [...prevState.contacts].sort(compareNames)
//         }))
//     }
//
//     // renderItem = obj => <Row {...(obj.item)} />
//     // same as renderItem = obj => <Row name:{obj.item.name} phone:{obj.item.phone} />
//
//     // item: {name: String, phone: String}
//
//     // <Text>{props.name}</Text>
//
//     render() {
//
//         // 回显方法1
//         // if (this.state.showContacts) {
//         //     return (
//         //         <View style={styles.container}>
//         //             <Button title="切换显示" onPress={this.toggleContacts}/>
//         //             <ScrollView>
//         //                 {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
//         //             </ScrollView>
//         //         </View>
//         //     )
//         // }
//         // return (
//         //     <View style={styles.container}>
//         //         <Button title="切换显示" onPress={this.toggleContacts}/>
//         //     </View>
//         // );
//
//         // 回显方法2 a ternary
//         // return (
//         //     <View style={styles.container}>
//         //         <Button title="切换显示" onPress={this.toggleContacts}/>
//         //         {
//         //             this.state.showContacts ? (
//         //                 <ScrollView>
//         //                     {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
//         //                 </ScrollView>
//         //             ) : null
//         //         }
//         //     </View>
//         // )
//
//         // 回显方法3
//         // return (
//         //     <View style={styles.container}>
//         //         <Button title="切换显示" onPress={this.toggleContacts}/>
//         //         {
//         //             this.state.showContacts && (
//         //                 <ScrollView>
//         //                     {contacts.map(contact => <Row key={contact.key} {...contact}/>)}
//         //                 </ScrollView>
//         //             )
//         //         }
//         //     </View>
//         // )
//
//         // ScrollView 会渲染全部元素 不推荐
//         // <ScrollView></ScrollView>
//         // FlatList 只渲染当前页面 推荐
//         // <FlatList renderItem={this.renderItem} data={contacts} />
//
//         if (this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>
//         return (
//             <View style={styles.container}>
//                 <Button title="切换" onPress={this.toggleContacts}/>
//                 <Button title="排序" onPress={this.sort}/>
//                 <Button title="添加联系人" onPress={this.toggleForm}/>
//                 {
//                     this.state.showContacts &&
//                     <ContactsList
//                         contacts={this.state.contacts}
//                     />
//                 }
//             </View>
//         )
//     }
// }
//
//
// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         backgroundColor: '#6ccef8',
//         // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         paddingTop: Constants.statusBarHeight,
//         // topBarButton: Constants.statusBarHeight,
//
//     },
// });


/**
 * 使用 Switch Navigator 实现 页面切换
 */
// import React from 'react';
// import {Button, SectionList, StyleSheet, Text, View} from 'react-native';
// import {Constants} from 'expo';
//
// import contacts, {compareNames, comparePhones, compareIds} from './contacts';
// import {createSwitchNavigator} from 'react-navigation';
// import AddContactScreen from './screens/AddContactScreen';
// import ContactListScreen from  './screens/ContactListScreen';
//
// const AppNavigator = createSwitchNavigator({
//     AddContact: AddContactScreen,
//     ContactList: ContactListScreen,
// }, {
//     initialRouteName: 'ContactList'
// })
//
// export default class App extends React.Component {
//     state = {
//         showContacts: false,
//         showForm: false,
//         contacts: contacts,
//     }
//
//     addContact = newContact => {
//         this.setState(prevState => ({
//             showForm: false,
//             contacts: [...prevState.contacts, newContact]
//         }))
//     }
//
//     toggleForm = () => {
//         this.setState(prevState => ({
//             showForm: !prevState.showForm
//         }))
//     }
//
//     render() {
//         return <AppNavigator screenProps={{
//             contacts: this.state.contacts,
//             addContact: this.addContact
//         }}/>;
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#6ccef8',
//         // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
//         paddingTop: Constants.statusBarHeight,
//
//     },
// });

/**
 * 使用 Stack Navigator 实现 页面切换
 */
import React from 'react';
import {Button, SectionList, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';

// import contacts, {compareNames, comparePhones, compareIds} from './contacts';
import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from  './screens/ContactListScreen';
import ContactDetailsScreen from  './screens/ContactDetailsScreen';
import LoginScreen from  './screens/LoginScreen';
import SettingScreen from  './screens/SettingScreen';
import {fetchUsers} from './api'

import {Ionicons} from 'react-native-vector-icons';

const ContactsTab = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
}, {
    initialRouteName: 'ContactList',
    navigationOptions: {
        headerTintColor: "red",
    }
})

ContactsTab.navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
            name={`ios-contacts${focused ? '' : '-outline'}`}
            size={25}
            color={tintColor}
        />
    ),
}

const MainNavigator = createBottomTabNavigator({
    Contacts: ContactsTab,
    Settings: SettingScreen
}, {
    tabBarOptions: {
        activeTintColor: 'green'
    }
})

const AppNavigator = createSwitchNavigator({
    Main: MainNavigator,
    Login: LoginScreen,
}, {
    initialRouteName: 'Login'
})

export default class App extends React.Component {
    state = {
        showContacts: false,
        showForm: false,
        contacts: null,
    }

    /**
     * 非异步方法
     */
    componentDidMount() {
        // promise 用法
        // fetch('https://randomuser.me/api/?results=5')
        //     .then(response => response.json())
        //     .then(({results}) => {
        //         console.log(results)
        //         this.setState({
        //             contacts: results
        //         })
        //     })

        // promise 用法
        // fetchUsers().then(results => this.setState({contacts: results}))

        this.getUsers()
    }

    /**
     * async 关键字用法
     * @returns {Promise.<void>}
     */
    getUsers = async () => {
        const results = await fetchUsers()
        this.setState({contacts: results})
    }

    addContact = newContact => {
        this.setState(prevState => ({
            showForm: false,
            contacts: [...prevState.contacts, newContact]
        }))
    }

    toggleForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    render() {
        return <AppNavigator screenProps={{
            contacts: this.state.contacts,
            addContact: this.addContact
        }}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6ccef8',
        // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
        paddingTop: Constants.statusBarHeight,

    },
});