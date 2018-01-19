import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ContactItem from "./ContactItem"

/* Required props: contact */

class ContactList extends Component {

  renderItem({item}) {
    return <ContactItem item={item}/>
  }

  render() {
    const { contacts } = this.props
    return (
      <FlatList
        data={contacts}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.recordID}
      />
    )
  }

}


export default ContactList