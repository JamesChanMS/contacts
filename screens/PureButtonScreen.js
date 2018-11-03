/**
 * Created by Kim on 2018/10/3.
 */
import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import PureButton from '../PureButton';

import {Constants} from 'expo';
import ContactsList from '../ContactsList';
import {changeFirstContact} from '../redux/actions'
// import store from '../redux/store';

import {connect} from 'react-redux';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a6f27a',
        // backgroundImage: radialGradient(ellipse at 50% 65%,#6ccef8 0,#21a9dd 41%,#155791 86%),
        paddingTop: Constants.statusBarHeight,

    },
    button: {
        alignSelf: "center"
    },
    image:{
        width:width,
        height:width * 9 / 16,
    },
    banner: {
        // height: height,
        // lineHeight:height,
    },
});

export default class PureButtonScreen extends React.Component {


    state = {
        count: 0,
    }

    /**
     * Well, properties are created at every single mount.
     * Whereas methods are created just once ever.
     * 这样是定义函数 inc() {
     *  this.setState(prevState => ({count: prevState.count + 1})
     * } 这样函数只被创建一次, 在创建这个模块时
     * 下面是匿名函数 每次函数都是新创建的 这样写是为了 绑定this到实例上 ()=> {}
     * But again, remember, there are trade-offs for all these optimizations.
     * Well, these performance optimizations come at complexity costs.
     * And often times, it's just not worth the cost of complexity and maintainability.
     * So don't forget. Don't over optimize until a bottleneck is found.
     */
    inc = () => this.setState(prevState => ({count: prevState.count + 1}))

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{this.state.count}</Text>
                <PureButton style={styles.button}
                            title="increment count 自增"
                            onPress={this.inc}
                />
                <View style={styles.banner}>
                    <Image style={styles.image}
                           source={require('../image/splash.jpg')}>
                    </Image>
                </View>
            </View>
        )
    }
}

// export default connect(mapStateToProps, {changeFirstContact})(ContactListScreen)