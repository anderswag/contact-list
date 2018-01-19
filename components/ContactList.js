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

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem({item}) {
    const { selectContact } = this.props
    return <ContactItem selectContact={selectContact} item={item}/>
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