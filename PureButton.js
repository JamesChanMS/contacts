/**
 * Created by Kim on 2018/10/3.
 */
import React from 'react'
import {Button, SectionList, StyleSheet, Text, View} from 'react-native';

export default class PureButton extends React.PureComponent {

    state = {
        color: null,
    }

    componentDidUpdate() {
        this.setState({color: 'red'})
    }

    render() {
        return <Button title="" onPress="" {...this.props} color={this.state.color}/>
    }
}