import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

/* Required props: item, selectContact */

class ContactItem extends Component {
  render() {
    const { item, selectContact } = this.props
    console.log("SDF")
    console.log(selectContact)
    console.log(item.recordID)
    return (
      <TouchableHighlight onPress={() => selectContact(item)} style={styles.itemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text style={styles.contactInfo}>{`${item.givenName} ${item.familyName}`}</Text>
          <Text style={styles.contactInfo}>{`${item.phoneNumbers[0].number}`}</Text>

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