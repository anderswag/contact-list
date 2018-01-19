import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import CheckBox from "./CheckBox"
/* Required props: item, selectContact */

class ContactItem extends Component {
  render() {
    const { item, selectContact, selected } = this.props
    return (
      <TouchableHighlight style={styles.itemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text style={styles.contactInfo}>{`${item.givenName} ${item.familyName}`}</Text>
          <Text style={styles.contactInfo}>{`${item.phoneNumbers[0].number}`}</Text>
          <CheckBox handleClick={selectContact} item={item} check={selected}/>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  itemInnerContainer: {
    flexDirection: "row",
  },
  contactInfo: {
    marginLeft:5,
    marginRight:5,
  },
})

export default ContactItem