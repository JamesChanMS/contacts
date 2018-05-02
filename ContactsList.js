import React from 'react';
import {SectionList, Text} from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderItem = ({item}) => <Row {...item} />
const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

/**
 * Created by Kim on 2018/4/28.
 */
const ContactsList = props => (
    <SectionList
        // renderItem={obj => <Row {...(obj.item)} />}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[{
            title: 'A',
            data: props.contacts,
        }]}
    />
)

// propTypes 构造
ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

export default ContactsList