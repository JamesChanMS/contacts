import React from 'react';
import {SectionList, Text} from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

/**
 * Created by Kim on 2018/4/28.
 */
const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {}) // 初始化一个空对象


    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            // renderItem={obj => <Row {...(obj.item)} />}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )

}
// (
//     <SectionList
//         // renderItem={obj => <Row {...(obj.item)} />}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}
//         sections={[{
//             title: 'A',
//             data: props.contacts,
//         }]}
//     />
// )

// propTypes 构造
ContactsList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactsList