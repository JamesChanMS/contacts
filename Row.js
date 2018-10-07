/**
 * Created by Kim on 2018/4/23.
 */
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    row: {
        padding: 20,
    },
});

class Row extends React.Component {

    shouldComponentUpdate(nextProps) {
        // if (nextProps.name !== this.props.name) {
        //     return true
        // } else {
        //     return false
        // }
        // 便捷写法
        return nextProps.name !== this.props.name
    }

    render() {
        // 下面是便捷写法 const props = this.props;
        const {props} = this;
        return (
            <TouchableOpacity style={styles.row} onPress={() => {
                props.onSelectContact(props);
            }}>
                <Text>{props.name}</Text>
                <Text>{props.phone}</Text>
            </TouchableOpacity>
        )
    }
}

// const Row = props => (
//     <TouchableOpacity style={styles.row} onPress={() => {
//         props.onSelectContact(props);
//     }}>
//         <Text>{props.name}</Text>
//         <Text>{props.phone}</Text>
//     </TouchableOpacity>
// )

Row.protoTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
}

export default Row